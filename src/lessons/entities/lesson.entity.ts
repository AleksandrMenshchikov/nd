import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { Evaluation } from '../../evaluations/entities/evaluation.entity';

@Entity('lessons')
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @Transform((val) => val.value.trim())
  name: string;

  @Column({ length: 20, unique: true })
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @Transform((val) => val.value.trim())
  code: string;

  @OneToMany(() => Evaluation, (evaluation) => evaluation.lesson)
  evaluations: Evaluation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
