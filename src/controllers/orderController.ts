import {Request,Response} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// ✅ Create Order
export const createOrder= async (req : Request, res:Response) => {
  try {
    const {
      senderUserId,
      receiverPassengerId,
      senderName,
      senderNumber,
      origin,
      receiverName,
      receiverNumber,
      dropLocation,
      weight,
      productDescription,
      amountToPaid,
      paymentReferenceId,
      TravellinDate,
    } = req.body;

    const newOrder = await prisma.parcel.create({
      data: {
        senderUserId,
        receiverPassengerId,
        senderName,
        senderNumber,
        origin,
        receiverName,
        receiverNumber,
        dropLocation,
        weight,
        productDescription,
        amountToPaid,
        paymentReferenceId,
        TravellinDate: new Date(TravellinDate),
      },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
}

// ✅ Get All Orders by User ID (sender)
export const getAllOrderById = async (req : Request, res : Response) => {
  const userId = parseInt(req.params.userId);
  if (isNaN(userId)) return res.status(400).json({ error: 'Invalid user ID' });

  try {
    const orders = await prisma.parcel.findMany({
      where: {
        senderUserId: userId,
      },
      include: {
        receiver: true, // Include Passenger details
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
}

