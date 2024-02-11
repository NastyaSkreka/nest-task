import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserModel } from './users.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService], 
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserModel }])
  ]
})
export class UsersModule {}
