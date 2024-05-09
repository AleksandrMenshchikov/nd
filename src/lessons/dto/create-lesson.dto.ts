import { PickType } from '@nestjs/mapped-types';
import { Lesson } from '../entities/lesson.entity';

export class CreateLessonDto extends PickType(Lesson, ['name', 'code']) {}
