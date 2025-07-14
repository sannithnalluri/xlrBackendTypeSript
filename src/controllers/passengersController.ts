const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import {Request, Response} from "express";

// POST /api/passengers
export const addPassenger = async (req : Request, res : Response) => {
  try {
    const {
      fullName,
      phoneNumber,
      origin,
      destination,
      travelDate,
      passportNumber,
      visaNumber,
      baggageSpace,
      notes,
      userId,
      email
    } = req.body;

    // Basic validation
    if (
      !fullName ||
      !phoneNumber ||
      !origin ||
      !destination ||
      !travelDate ||
      !passportNumber ||
      !visaNumber ||
      !userId
    ) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const passenger = await prisma.passenger.create({
      data: {
        fullName,
        phoneNumber,
        origin,
        destination,
        travelDate: new Date(travelDate),
        passportNumber,
        visaNumber,
        baggageSpace,
        notes,
        userId,
      },
    });

    res.status(201).json({ message: 'Passenger added successfully', passenger });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add passenger.' });
  }
};


// export const getPassengers = async (req: Request, res: Response) => {
//   try {
//     const passengers = await prisma.passenger.findMany({
//       where: {
//         userId: req.user.id, // Assuming user ID is stored in req.user
//       },
//     });

//     res.status(200).json(passengers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to retrieve passengers.' });
//   }
// }   


export const getallPassenger = async (req: Request, res: Response) => {
    try {
        const passengers = await prisma.passenger.findMany({
        include: {
            user: true, // Include user details if needed
        },
        });
    
        res.status(200).json(passengers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve passengers.' });
    }   
}
