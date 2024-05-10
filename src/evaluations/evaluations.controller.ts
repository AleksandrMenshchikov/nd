import { Controller, Post, Body, Param } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Evaluations')
@ApiBearerAuth()
@Controller()
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Post('lessons/:id/evaluations')
  createEvaluation(
    @Param('id') lesson_id: number,
    @Body() createEvaluationDto: CreateEvaluationDto,
  ) {
    return this.evaluationsService.createEvaluation(
      lesson_id,
      createEvaluationDto,
    );
  }
}
