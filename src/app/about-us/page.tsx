"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export default function AboutUs() {
  return (
    <div className="page-transition min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Typography
              variant="h1"
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              About Hima Technologies
            </Typography>
            <Typography
              variant="lead"
              className="text-lg text-gray-300 md:text-xl"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Innovating the future through cutting-edge technology solutions
            </Typography>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Typography
              variant="h2"
              className="mb-6 text-center text-3xl font-bold text-gray-900"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Who We Are
            </Typography>
            <Typography
              className="mb-8 text-center text-lg leading-relaxed text-gray-700"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Hima Technologies is a forward-thinking technology company dedicated to
              delivering innovative solutions that transform businesses and empower
              organizations to achieve their goals. With a team of experienced
              professionals and a passion for excellence, we specialize in creating
              custom software, digital products, and technology services that drive
              real results.
            </Typography>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Mission */}
            <Card
              className="hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <Typography
                  variant="h5"
                  className="mb-3 font-bold text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Our Mission
                </Typography>
                <Typography
                  className="text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  To empower businesses with innovative technology solutions that
                  drive growth, efficiency, and success in the digital age.
                </Typography>
              </CardBody>
            </Card>

            {/* Vision */}
            <Card
              className="hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <Typography
                  variant="h5"
                  className="mb-3 font-bold text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Our Vision
                </Typography>
                <Typography
                  className="text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  To be a global leader in technology innovation, recognized for
                  excellence, creativity, and transformative solutions.
                </Typography>
              </CardBody>
            </Card>

            {/* Values */}
            <Card
              className="hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <Typography
                  variant="h5"
                  className="mb-3 font-bold text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Our Values
                </Typography>
                <Typography
                  className="text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Innovation, integrity, collaboration, and customer-centricity
                  guide everything we do and every solution we create.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Typography
            variant="h2"
            className="mb-12 text-center text-3xl font-bold text-gray-900"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Why Choose Hima Technologies?
          </Typography>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div>
                <Typography
                  variant="h6"
                  className="mb-2 font-bold text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Expert Team
                </Typography>
                <Typography
                  className="text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Our talented team brings years of experience and deep technical
                  expertise to every project.
                </Typography>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div>
                <Typography
                  variant="h6"
                  className="mb-2 font-bold text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Custom Solutions
                </Typography>
                <Typography
                  className="text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We tailor our services to meet your unique business needs and
                  goals.
                </Typography>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div>
                <Typography
                  variant="h6"
                  className="mb-2 font-bold text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Proven Track Record
                </Typography>
                <Typography
                  className="text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We&apos;ve successfully delivered projects across various industries
                  and scales.
                </Typography>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div>
                <Typography
                  variant="h6"
                  className="mb-2 font-bold text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Ongoing Support
                </Typography>
                <Typography
                  className="text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We provide continuous support and maintenance to ensure your
                  success.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
