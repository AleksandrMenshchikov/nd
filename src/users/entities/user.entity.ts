import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { Evaluation } from '../../evaluations/entities/evaluation.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @Transform((val) => val.value.trim())
  name: string;

  @Column({ unique: true, length: 30 })
  @Index()
  @IsEmail()
  @IsString()
  @MaxLength(30)
  @Transform((val) => val.value.trim())
  email: string;

  @OneToMany(() => Evaluation, (evaluation) => evaluation.user)
  evaluations: Evaluation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
