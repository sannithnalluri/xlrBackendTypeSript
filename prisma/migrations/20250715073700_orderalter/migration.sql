-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passenger" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(255) NOT NULL,
    "origin" VARCHAR(255) NOT NULL,
    "destination" VARCHAR(255) NOT NULL,
    "travelDate" TIMESTAMP(3) NOT NULL,
    "passportNumber" VARCHAR(255) NOT NULL,
    "visaNumber" VARCHAR(255) NOT NULL,
    "baggageSpace" VARCHAR(255),
    "notes" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parcel" (
    "id" SERIAL NOT NULL,
    "senderUserId" INTEGER NOT NULL,
    "receiverPassengerId" INTEGER NOT NULL,
    "senderName" TEXT NOT NULL,
    "senderNumber" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,
    "receiverNumber" TEXT NOT NULL,
    "dropLocation" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "amountToPaid" TEXT NOT NULL,
    "paymentReferenceId" TEXT NOT NULL,
    "TravellinDate" TIMESTAMP(3) NOT NULL,
    "OrderConfirmed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Parcel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_senderUserId_fkey" FOREIGN KEY ("senderUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_receiverPassengerId_fkey" FOREIGN KEY ("receiverPassengerId") REFERENCES "Passenger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
