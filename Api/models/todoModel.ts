import mongoose from 'mongoose';


// enum
enum Status {
    Todo = "todo",
    InProgress = "in progress",
    Done = "done"
}

// todo interface
interface ITodo {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    ReminderTime: Date;
    status: Status;
}


// todo schema
export const todoSchema = new mongoose.Schema<ITodo>({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    ReminderTime:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        enum: Object.values(Status),
        required: true
    }
},{timestamps: true});


// todo model
export const todoModel = mongoose.model('Todo', todoSchema);