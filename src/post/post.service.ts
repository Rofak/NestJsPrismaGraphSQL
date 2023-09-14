import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    private user: UserService,
  ) {}
  create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({ data: createPostInput });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id: id } });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({
      where: { id: id },
      data: updatePostInput,
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id: id } });
  }
}
