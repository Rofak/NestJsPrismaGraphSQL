import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Post {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  published: boolean;

  @Field()
  authorId: number;

  @Field(() => User)
  author: User;
}
