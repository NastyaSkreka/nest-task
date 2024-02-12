import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async createUser(dto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(dto);
        return newUser.save();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().populate('posts').exec();
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }
}
