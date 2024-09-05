import { IsString, MinLength } from 'class-validator';

export class CreateTasksDto {
  @IsString()
  @MinLength(1)
  title: string;
  @MinLength(1)
  @IsString()
  description: string;
}
