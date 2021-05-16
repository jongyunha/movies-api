import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// PartialType 은 기본 타입을 상속받아서 전부 필수가 아닌 상태로 만들어준다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
