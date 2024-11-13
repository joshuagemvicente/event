export interface IEvent {
  eventName: string;
  eventDescription: string;
  eventDate: Date;
  eventTime: string;
  eventVenue: string;
  eventAddress: string;
  eventCity: string;
  eventState: string;
  eventZip?: string;
  eventCountry: string;
  eventOrganizer: string;
  eventOrganizerEmail: string;
  eventOrganizerPhone: string;
  eventWebsite?: string;
  eventLinks: string[];
  eventPrice?: string;
  eventImage?: string;
  eventCategory: string;
  eventBanner?: string;
}
