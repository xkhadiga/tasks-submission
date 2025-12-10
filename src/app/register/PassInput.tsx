"use client";
import  { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "../../../public/Icons";

function PassInput( {label, placeholder, error , ...props}: {label: string, placeholder: string, error: string}) {
    const [show, setShow] = useState(false);
  return (
    <div>
              <Label className=" mb-2 font-medium text-sm lg:text-md">{label}</Label>
          <div className="relative">
            <Input
              type={show ? "text" : "password"}
              className="w-full pr-10 "
              placeholder={placeholder}
              {...props}

            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className=" absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-4 h-4"
            >
              {show ? (
                <EyeOffIcon  />
              ) : (
                <EyeIcon />
              )}
            </button>
          </div>
          <p className="text-red-500 text-sm my-2"> 
            {error || ""}
          </p>
    </div>
  )
}

export default PassInput