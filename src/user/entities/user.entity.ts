import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  dob: Date;

  @Field(() => [Post], { nullable: true })
  posts: Post[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
