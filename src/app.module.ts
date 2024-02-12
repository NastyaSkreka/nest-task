import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';

@Module({
    controllers: [], 
    providers: [],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }),
        UsersModule,
        MongooseModule.forRoot('mongodb+srv://skrekanastya:task@cluster0.s9zq8a2.mongodb.net/?retryWrites=true&w=majority'),
        AuthModule,
        PostsModule,
    ]
})

export class AppModule {
    constructor() {
      console.log('Connected to MongoDB');
    }
  }


