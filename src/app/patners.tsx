"use client";
import {
  Card,
  CardBody,
  Avatar,
  IconButton,
  Typography,
} from "@material-tailwind/react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  description: string;
}

function TeamCard({ img, name, title, description }: TeamCardPropsType) {
  return (
    <Card
      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        className="text-center p-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Avatar
          src={img}
          alt={name}
          variant="circular"
          size="xxl"
          className="mx-auto mb-6 object-top border-4 border-white shadow-md"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Typography
          variant="h5"
          color="blue-gray"
          className="!font-bold text-xl mb-1"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {name}
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-3 !text-base !font-semibold text-blue-500"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-sm text-gray-600"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {description}
        </Typography>
        <div className="flex items-center justify-center gap-2.5 mt-2">
          <IconButton
            variant="text"
            color="blue"
            className="rounded-full hover:bg-blue-50"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <i className="fa-brands fa-twitter text-lg" />
          </IconButton>
          <IconButton
            variant="text"
            color="blue"
            className="rounded-full hover:bg-blue-50"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <i className="fa-brands fa-linkedin text-lg" />
          </IconButton>
          <IconButton
            variant="text"
            color="blue"
            className="rounded-full hover:bg-blue-50"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <i className="fa-brands fa-github text-lg" />
          </IconButton>
        </div>
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: `/image/usamah.jpg`,
    name: "Usama Talib Juma",
    title: "Team Leader & Full Stack Developer",
    description:
      "Visionary team leader with exceptional expertise in full stack development. Drives innovation while empowering team members to achieve their highest potential.",
  },
  {
    img: `/image/seif.jpg`,
    name: "Seif Mwita Mgeni",
    title: "Mobile & Backend Developer",
    description:
      "Versatile developer specializing in robust mobile applications and scalable backend systems. Creates seamless solutions that bridge user experience with technical excellence.",
  },
  {
    img: `/image/seif.jpg`,
    name: "Hussein Ali Abdulrahman",
    title: "Senior Data Analyst & Advisor",
    description:
      "Experienced data analyst with remarkable insight and strategic thinking. Provides critical guidance to the team while transforming complex data into actionable intelligence.",
  },
  {
    img: `/image/ahmad.jpg`,
    name: "Ahmad Sadri Abdullah",
    title: "Technical Director & System Architect",
    description:
      "Brilliant system architect with exceptional problem-solving abilities. Designs innovative technical frameworks that form the foundation of our most advanced solutions.",
  },
];

export function Patners() {
  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Meet the Team
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="my-2 !text-2xl lg:!text-4xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Behind the Success: Our Dedicated Team
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 max-w-4xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            From visionary leadership to creative talent, and technical wizards,
            each team member plays a pivotal role in delivering the exceptional
            service and innovative solutions.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Patners;
