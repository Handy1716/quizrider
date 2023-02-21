import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
