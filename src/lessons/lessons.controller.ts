import { Controller, Post, Body, Get } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  createLesson(
    @Body() createLessonDto: CreateLessonDto,
  ): Promise<CreateLessonDto & Lesson> {
    return this.lessonsService.createLesson(createLessonDto);
  }

  @Get()
  findAllLessons(): Promise<Lesson[]> {
    return this.lessonsService.findAllLessons();
  }
}
