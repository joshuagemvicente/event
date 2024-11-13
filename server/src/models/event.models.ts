import { model, Schema } from "mongoose";
import { IEvent, EventType } from "../interfaces/event.interface";
import { ticketSchema } from "./ticket.models";

const eventSchema = new Schema<IEvent>({
  name: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String },
  country: { type: String, required: true },
  organizer: { type: String, required: true },
  organizerEmail: { type: String, required: true },
  organizerPhone: { type: String, required: true },
  website: { type: String },
  links: { type: [String], required: true },
  price: { type: Number },
  image: { type: String },
  category: { type: String, required: true },
  banner: { type: String },
  capacity: { type: Number, required: true },
  tickets: [ticketSchema],
  type: {
    type: String,
    enum: Object.values(EventType),
    default: EventType.PUBLIC,
  },
});

const Event = model<IEvent>("Event", eventSchema);

export default { Event };
