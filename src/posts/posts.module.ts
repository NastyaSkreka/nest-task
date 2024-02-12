import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserModel } from 'src/users/users.model';
import { Post, PostModel } from './posts.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController], 
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
    MongooseModule.forFeature([{ name: Post.name, schema: PostModel }]),

    FilesModule
  ]
})
export class PostsModule {}
