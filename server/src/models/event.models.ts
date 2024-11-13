import { model, Schema, Document } from "mongoose";
import { IEvent } from "../interfaces/event.interface";

const eventSchema = new Schema<IEvent>({
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventVenue: {
    type: String,
    required: true,
  },
  eventAddress: {
    type: String,
    required: true,
  },
  eventCity: {
    type: String,
    required: true,
  },
  eventState: {
    type: String,
    required: true,
  },
  eventZip: {
    type: String,
    required: false,
  },
  eventCountry: {
    type: String,
    required: true,
  },
  eventOrganizer: {
    type: String,
    required: true,
  },
  eventOrganizerEmail: {
    type: String,
    required: true,
  },
  eventOrganizerPhone: {
    type: String,
    required: true,
  },
  eventWebsite: {
    type: String,
    required: false,
  },
  eventLinks: {
    type: [String],
    required: false,
  },
  eventPrice: {
    type: String,
    required: false,
  },
  eventImage: {
    type: String,
    required: false,
  },
  eventCategory: {
    type: String,
    required: true,
  },
  eventBanner: {
    type: String,
    required: false,
  },
});
