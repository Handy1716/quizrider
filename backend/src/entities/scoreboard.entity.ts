import {
  BaseEntity,
  Column,
  Entity, 
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';
import RuncodeEntity from './runcode.entity';

@Entity({ name: 'scoreboard' })
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

  @CreateDateColumn()
  finishTime: Date;

  @Column()
  points: number;

  @ManyToOne(() => RuncodeEntity, (runcode) => runcode.scoreboards, {
    onDelete: 'CASCADE'
  })
  runCode: RuncodeEntity
}
