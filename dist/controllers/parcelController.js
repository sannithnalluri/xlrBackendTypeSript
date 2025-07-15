"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addParcel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const addParcel = async (req, res) => {
    try {
        const { weight, productDescription, senderName, senderNumber, receiverName, receiverNumber, pickupLocation, dropLocation, user } = req.body;
        // Optional: Input validation (basic)
        if (!weight ||
            !productDescription ||
            !senderName ||
            !senderNumber ||
            !receiverName ||
            !receiverNumber ||
            !pickupLocation ||
            !dropLocation) {
            return res.status(400).json({ error: "All fields are required." });
        }
        const newParcel = await prisma.parcel.create({
            data: {
                weight,
                productDescription,
                senderName,
                senderNumber,
                receiverName,
                receiverNumber,
                pickupLocation,
                dropLocation,
                user: {
                    connect: { id: 1 }, // 👈 Correct way to link an existing user
                }
            },
        });
        return res.status(201).json(newParcel);
    }
    catch (error) {
        console.error("Error creating passenger:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.addParcel = addParcel;
