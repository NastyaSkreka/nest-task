import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { User } from 'src/users/users.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>,
        private filesService: FilesService,
    ) {}

    async createPost(userId: string, dto: CreatePostDto, file: any): Promise<Post> {
        try {
            const fileName = await this.filesService.createFile(file);
            const createdPost = await this.postModel.create({ ...dto, userId, image: fileName });

            const user = await this.userModel.findById(userId);

            if (!user) {
                throw new Error('Пользователь не найден');
            }

            user.posts.push(createdPost);
            await user.save();

            return createdPost;
        } catch (error) {
            throw new HttpException('Ошибка при создании поста', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

