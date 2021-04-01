import { Document } from 'mongoose';
export interface itodo extends Document {
    readonly date_todo: string;
    readonly favorite_todo: string;
    readonly show: boolean;
    readonly title_todo: string;
    readonly state_todo: string;
}
