import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Runcode from './runcode.entity';

@Entity()
export default class Scoreboard {
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
  created: Date;

  @Column()
  points: number;

  @ManyToOne(() => Runcode, (runcode) => runcode.scoreboards)
  runcode: Runcode
}
