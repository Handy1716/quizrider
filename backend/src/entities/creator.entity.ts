import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Creator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    length: 100,
  })
  email: string;

  @Column({
    length: 100,
  })
  password: string;

  @Column()
  created: Date;
}
