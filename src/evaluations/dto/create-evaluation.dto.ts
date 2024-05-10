import { PickType } from '@nestjs/mapped-types';
import { Evaluation } from '../entities/evaluation.entity';

export class CreateEvaluationDto extends PickType(Evaluation, [
  'lesson_id',
  'score',
  'user_id',
]) {
  lesson_id: number;
  score: number;
  user_id: number;
}
