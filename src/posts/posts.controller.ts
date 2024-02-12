import { Body, Controller, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @Post(':userId')
    async createPost(
        @Param('userId') userId: string,
        @Body() dto: CreatePostDto,
    ) {
        return this.postService.createPost(userId, dto);
    }

} 


