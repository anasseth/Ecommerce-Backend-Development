const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true },
        product: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }
        ],
        amount: { type: Number, required: true },
        address: { type: Object, required: true },
        status: { type: Number, required: true, default: 'Pending' }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Order", OrderSchema);