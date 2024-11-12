import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";

interface ServicesProps {
  serviceName: string;
  serviceDescription: string;
  serviceIcon: string;
}

const servicesArray: ServicesProps[] = [
  {
    serviceName: "Web Development",
    serviceDescription: "Web Development",
    serviceIcon: "Web Development",
  },
];

export default function Services() {
  return (
    <section className="w-full px-12 lg:px-28">
      <div className="flex flex-col">
        <div className="text-left">
          <h3 className="text-3xl font-bold">01 | Services</h3>
        </div>
        <div>
          {servicesArray.map((service, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3">
              <ServicesCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const ServicesCard = ({
  serviceName,
  serviceDescription,
  serviceIcon,
}: ServicesProps) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{serviceName}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{serviceDescription}</CardDescription>
      </CardContent>
    </Card>
  );
};
