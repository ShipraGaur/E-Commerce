import asyncHandler from 'express-async-handler' 
import Order from '../models/orderModel.js '

// @desc   Create new order
// @route  POST/api/orders
// @access Private
export const addOrderItems = asyncHandler(async (req,res) => {
    const {
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingAddress,
        totalPrice
    } = req.body

    if(orderItems && orderItems.length === 0) { 
        res.status(400)
        throw new Error('No order Items')
    }
    else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            totalPrice 
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})