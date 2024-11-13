import { Schema } from "mongoose";
import { ITicket } from "../interfaces/ticket.interface";

export const ticketSchema = new Schema<ITicket>({
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  sold: {
    type: Number,
  },
});
