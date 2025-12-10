"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const tasksData = [
    {
      id: 1,
      title: "Task 1 - Registration Form",
      description:
        "Registration form with email, password, confirm password, validation, and toast notifications.",

      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "React Hook Form",
        "Zod",
        "React Query",
      ],
      link: "/register",
    },
    {
      id: 2,
      title: "Task 2 - Search Page",
      description:
        "User list fetched from API with search input, cards showing name, email, and company.",

      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Axios"],
      link: "/search",
    },
    {
      id: 3,
      title: "Task 3 - Figma Ui",
      description:
        "Pixel-perfect Figma design recreation, responsive layout, with animation.",

      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
      ],
      link: "/figma-ui",
    },
  ];
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className="p-4 border rounded-xl shadow-md flex flex-col items-center text-center space-y-4 text-md "
          >
            <h2 className="text-lg font-bold text-center my-4 ">
              {task.title}
            </h2>
            <p >{task.description}</p>
            <p className="mt-2  tracking-wide">
              <span className="font-semibold">Tech Stack: </span>
               {task.techStack.join(",   ")}
            </p>
            <Link href={task.link}>
              <Button className="mt-4 cursor-pointer">View Task</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
