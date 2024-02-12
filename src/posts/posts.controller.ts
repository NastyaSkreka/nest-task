import { Body, Controller, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @Post(':userId')
    @UseInterceptors(FileInterceptor('file'))
    async createPost(
        @Param('userId') userId: string,
        @Body() dto: CreatePostDto,
        @UploadedFile() file: any
    ) {
        return this.postService.createPost(userId, dto, file);
    }

} 


