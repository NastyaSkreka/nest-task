import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserModel } from './users.model';
import { AuthModule } from 'src/auth/auth.module';
import { Post, PostModel } from 'src/posts/posts.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService], 
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
    MongooseModule.forFeature([{ name: Post.name, schema: PostModel }]),
  ], 
  exports: [
    UsersService, 

 ]
})
export class UsersModule {}
