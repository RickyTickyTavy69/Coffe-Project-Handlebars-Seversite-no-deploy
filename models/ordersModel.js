const {Schema, model} = require('mongoose');

const orderSchema = new Schema({
    items : [
        {
            item: {
                type: Object,
                required: true
            },
            amount: {
                type: Number,
                required: true
            }
        }
    ],
    user: {
        name: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});






module.exports = model('Order', orderSchema);

