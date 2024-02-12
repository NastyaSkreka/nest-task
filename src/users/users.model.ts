import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose'; 
import { Post } from 'src/posts/posts.model'; 

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Post' }] })
  posts: Post[];
}

export const UserModel = SchemaFactory.createForClass(User);
