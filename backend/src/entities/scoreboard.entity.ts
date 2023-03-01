import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Runcode from './runcode.entity';

@Entity()
export default class Scoreboard {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  deviceId: number;
  @Column()
  name: string;
  @Column()
  runCodeId: number;
  @Column()
  created: Date;
  @Column()
  points: number;

  @OneToOne(() => Runcode)
    @JoinColumn()
    runcode: Runcode
}

