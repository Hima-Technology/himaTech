"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "50+",
    description: "Projects Delivered",
  },
  {
    title: "15+",
    description: "Expert Team Members",
  },
  {
    title: "5+",
    description: "Years of Innovation",
  },
  {
    title: "10+",
    description: "Tech Stacks Mastered",
  },
];

export function AtGlance() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/team.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            At Glance
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Our achievements and expertise at a glance.
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default AtGlance;
