import React from "react";

type Section = {
  sectionNumber: string;
  sectionName: string;
};

export default function SectionComponent() {
  const sectionArrays: Section[] = [
    {
      sectionNumber: "01",
      sectionName: "Parsons Services",
    },
    {
      sectionNumber: "02",
      sectionName: "",
    },
    {
      sectionNumber: "03",
      sectionName: "Section 3",
    },
    {
      sectionNumber: "04",
      sectionName: "Section 4",
    },
    {
      sectionNumber: "05",
      sectionName: "Section 5",
    },
  ];
  return (
    <div className="">
      <div></div>
    </div>
  );
}

export function () {
  return (
    <div></div>
  )
}

