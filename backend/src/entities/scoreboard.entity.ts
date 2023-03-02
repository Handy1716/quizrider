import {
  BaseEntity,
  Column,
  Entity, 
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import RuncodeEntity from './runcode.entity';

@Entity()
export default class ScoreboardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 128
  })
  deviceId: string;

  @Column({
    length: 100
  })
  name: string;

  @Column()
  finishTime: Date;

  @Column()
  points: number;

  @ManyToOne(() => RuncodeEntity, (runcode) => runcode.scoreboards)
  runcode: RuncodeEntity
}
