import { ITicket } from "./ticket.interface";
import { Document } from "mongoose";

export enum EventType {
  PUBLIC = "public",
  PRIVATE = "private",
}

// the document method is used to define the schema for the event model
export interface IEvent extends Document {
  name: string;
  description: string;
  date: Date;
  time: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string;
  country: string;
  organizer: string;
  organizerEmail: string;
  organizerPhone: string;
  website?: string;
  links: string[];
  price?: number;
  image?: string;
  category: string;
  banner?: string;
  capacity: number;
  tickets?: ITicket[];
  type: EventType;
}
