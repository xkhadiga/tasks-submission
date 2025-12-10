import HomeButton from "@/components/shared/HomeButton";
import React from "react";


function FigmaUi() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex items-center relative">
      <span className="absolute top-4 left-4 md:top-12 md:left-12">
        <HomeButton />
      </span>
        <h1 className="mx-auto text-3xl font-bold">Figma UI Page</h1>
    </div>
  );
}

export default FigmaUi;
