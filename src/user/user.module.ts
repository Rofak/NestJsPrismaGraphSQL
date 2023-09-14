import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from '../prisma.service';
import { PostService } from 'src/post/post.service';

@Module({
  providers: [UserResolver, UserService, PrismaService, PostService],
})
export class UserModule {}
