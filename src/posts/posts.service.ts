import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { User } from 'src/users/users.model';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async createPost(userId: string, dto: CreatePostDto): Promise<Post> {
        try {
    
            const createdPost = await this.postModel.create({ ...dto, userId});

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

