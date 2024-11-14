import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { Telescope, Hotel, Tickets } from "lucide-react";

type Services = {
  serviceIcon: React.ReactNode;
  serviceName: string;
  serviceDescription: string;
};

const servicesArray: Services[] = [
  {
    serviceIcon: <Telescope size={50} />,
    serviceName: "Discover and Join Events!",
    serviceDescription:
      "Find events tailored to your interests, whether they’re local meetups, virtual conferences, or exclusive workshops. Filter by category, location, date, or price to quickly find the right event for you.",
  },
  {
    serviceIcon: <Hotel size={50} />,
    serviceName: "Host and Manage Events!",
    serviceDescription:
      "Empower yourself as an organizer with tools to create, customize, and manage events. From small gatherings to large-scale conferences, design events that suit your needs with customizable options and easy ticket management.",
  },
  {
    serviceIcon: <Tickets size={50} />,
    serviceName: "Secure Booking and Ticketing!",
    serviceDescription:
      "Join events seamlessly with our easy and secure booking system. For paid events, we offer a reliable payment gateway so you can book your spot without hassle. Your ticket is just a few clicks away!",
  },
];

export default function Services() {
  return (
    <section className="w-full py-12 px-12 lg:px-28">
      <div className="flex flex-col">
        <div className="text-left">
          <h3 className="text-3xl lg:text-4xl font-bold">01 | Services</h3>
        </div>
        <div className="py-12 px-0 xl:px-12 w-full h-full grid grid-cols-1 xl:grid-cols-3 gap-4">
          {servicesArray.map((service, index) => (
            <div key={index} className="">
              <ServicesCard key={index} services={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const ServicesCard = ({ services }: { services: Services }) => {
  return (
    <Card className="h-full w-auto">
      <CardHeader className="flex flex-col  ">
        <span className="">{services.serviceIcon}</span>
        <CardTitle className="text-2xl">{services.serviceName}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <CardDescription className="text-justify text-[13.5px]">
          {services.serviceDescription}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
