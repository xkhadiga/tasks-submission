"use client";

import { useState } from "react";

// ui componenets
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PassInput from "./PassInput";

// validation libraries
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// react query
import { useMutation } from "@tanstack/react-query";

// react toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeButton from "@/components/shared/HomeButton";

function RegisterForm() {
  // submit state t handle loading
  const [submitting, setSubmitting] = useState(false);

  // form validation using zod
  const formSchema = z
    .object({
      // validate email format
      email: z.string().email("Enter a valid email"),

      // min 8 chars
      password: z.string().min(8, "Password must be at least 8 characters"),
      confirmPassword: z
        .string()
        .min(8, " Confirm Password must be at least 8 characters"),
    })
    //  checking if password and confirmPassword match
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  // react hook form setup
  // connect form to zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  // mutation function to submit form data
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit");
      return response.json();
    },

    onMutate: () => {
      // show loading
      setSubmitting(true);
    },
    onSuccess: () => {
      // delay 2 seconds
      // reset state & show success message
      setTimeout(() => {
        setSubmitting(false);
        toast.success("Form submitted successfully");
      }, 2000);
    },
    // reset state & show error message
    onError: () => {
      setSubmitting(false);
      toast.error("Form submission failed");
    },
  });
  //   handle submit
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex items-center relative">
      <span className="absolute top-4 left-4 md:top-12 md:left-12">
        <HomeButton />
      </span>
      {/* Register form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto p-10 border shadow-sm rounded-xl flex-col items-center justify-center space-y-8"
      >
        {/* email */}
        <div>
          <Label className=" mb-2 font-medium text-sm md:text-md"> Email</Label>
          <Input
            placeholder="Enter your email"
            className="w-full"
            {...register("email")}
            error={errors.email?.message}
          />
          <p className="text-red-500 text-sm my-2">
            {(errors.email && errors.email.message) || ""}
          </p>
        </div>
        {/* password */}
        <PassInput
          label="Password"
          placeholder="Enter your password"
          {...register("password")}
          error={errors.password?.message}
        />

        {/* confirm Password */}

        <PassInput
          label="Confirm Password"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        {/* submit button */}
        <Button
          type="submit"
          className="w-full mt-2 cursor-pointer"
          disabled={submitting}
        >
          {submitting ? (
            <span className="loader border border-white"></span>
          ) : (
            "Register"
          )}
        </Button>

        {/* toast notification container */}
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
}

export default RegisterForm;
