import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  published: boolean;

  @Field()
  authorId: number;
}
