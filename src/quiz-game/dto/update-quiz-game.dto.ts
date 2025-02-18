import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizGameDto } from './create-quiz-game.dto';

export class UpdateQuizGameDto extends PartialType(CreateQuizGameDto) {}
