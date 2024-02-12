import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose'; 

@Schema()
export class Post extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  image: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' }) 
  userId: string;

}

export const PostModel = SchemaFactory.createForClass(Post);



