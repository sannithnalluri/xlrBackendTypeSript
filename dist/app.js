"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const passengerRoute_1 = __importDefault(require("./routes/passengerRoute"));
const parcelRoute_1 = __importDefault(require("./routes/parcelRoute"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use('/api', authRoute_1.default);
app.use("/api/travel", passengerRoute_1.default);
app.use("/api/parcel", parcelRoute_1.default);
const indexHtml = path_1.default.join(__dirname, './components/index.html');
app.get('/', (req, res) => {
    res.sendFile(indexHtml);
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
