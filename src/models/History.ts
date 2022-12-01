import { Schema, model } from 'mongoose';

const HistorySchema = new Schema({
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    date: {
        type: String
    }
});

export default model('History', HistorySchema );