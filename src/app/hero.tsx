"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Welcome to <br /> Hima Technologies
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              At Hima Technologies, we are driven by innovation and a passion
              for leveraging technology to empower businesses and individuals
              alike.
            </Typography>

            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <i className="fa-solid fa-phone"></i>
                Get in Touch
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <i className="fa-solid fa-info"></i>
                About Us
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/laptop.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Who we are
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Founded by a team of visionary technologists, Hima Technologies
            brings together expertise from diverse fields including software
            development, artificial intelligence, data analytics, and
            cybersecurity. Our team is dedicated to staying at the forefront of
            technological advancements, ensuring that we consistently deliver
            top-notch solutions that drive real-world impact.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
