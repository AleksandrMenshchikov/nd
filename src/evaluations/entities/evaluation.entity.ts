import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Lesson } from '../../lessons/entities/lesson.entity';
import { User } from '../../users/entities/user.entity';

@Entity('evaluations')
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  score: number;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  lesson_id: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.evaluations)
  @JoinColumn({ name: 'lesson_id' })
  lesson: Lesson;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @ManyToOne(() => User, (user) => user.evaluations)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
