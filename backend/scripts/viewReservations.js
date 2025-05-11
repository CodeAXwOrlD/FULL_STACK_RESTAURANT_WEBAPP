import mongoose from "mongoose";
import dotenv from "dotenv";
import { Reservation } from "../models/reservation.js";

dotenv.config({ path: "./config.env" });

const viewReservations = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "RESERVATIONS",
    });
    console.log("Connected to database!");

    const reservations = await Reservation.find({});
    console.log("\nAll Reservations:");
    console.log("----------------");
    reservations.forEach((res, index) => {
      console.log(`\nReservation ${index + 1}:`);
      console.log(`Name: ${res.firstName} ${res.lastName}`);
      console.log(`Email: ${res.email}`);
      console.log(`Phone: ${res.phone}`);
      console.log(`Date: ${res.date}`);
      console.log(`Time: ${res.time}`);
      console.log("----------------");
    });

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error);
  }
};

viewReservations(); 