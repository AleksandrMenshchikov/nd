import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(
    createLessonDto: CreateLessonDto,
  ): Promise<CreateLessonDto & Lesson> {
    return await this.lessonRepository.save(createLessonDto);
  }

  async findAllLessons(): Promise<Lesson[]> {
    return await this.lessonRepository.find({
      relations: { evaluations: { user: true } },
    });
  }
}
