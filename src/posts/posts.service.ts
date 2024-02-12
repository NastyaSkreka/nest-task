import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post.name) private postModel: Model<Post>, 
        private filesService: FilesService ){}

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.filesService.createFile(image)
        const createdPost = new this.postModel({...dto, image: fileName});
        return createdPost.save();
    }

}

