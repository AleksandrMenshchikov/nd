import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Evaluation } from './entities/evaluation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluationsService {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
  ) {}

  async createEvaluation(
    lesson_id: number,
    createEvaluationDto: CreateEvaluationDto,
  ) {
    return await this.evaluationRepository.save({
      ...createEvaluationDto,
      lesson_id,
    });
  }
}
