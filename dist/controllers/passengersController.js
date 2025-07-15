"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getallPassenger = exports.addPassenger = void 0;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// POST /api/passengers
const addPassenger = async (req, res) => {
    try {
        const { fullName, phoneNumber, origin, destination, travelDate, passportNumber, visaNumber, baggageSpace, notes, userId, email } = req.body;
        // Basic validation
        if (!fullName ||
            !phoneNumber ||
            !origin ||
            !destination ||
            !travelDate ||
            !passportNumber ||
            !visaNumber ||
            !userId) {
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add passenger.' });
    }
};
exports.addPassenger = addPassenger;
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
const getallPassenger = async (req, res) => {
    try {
        const passengers = await prisma.passenger.findMany({
            include: {
                user: true, // Include user details if needed
            },
        });
        res.status(200).json(passengers);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve passengers.' });
    }
};
exports.getallPassenger = getallPassenger;
