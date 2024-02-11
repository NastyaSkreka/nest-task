import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [], 
    providers: [],
    imports: [
        UsersModule,
        MongooseModule.forRoot('mongodb+srv://skrekanastya:task@cluster0.s9zq8a2.mongodb.net/?retryWrites=true&w=majority'),
        AuthModule,
    ]
})

export class AppModule {
    constructor() {
      console.log('Connected to MongoDB');
    }
  }


