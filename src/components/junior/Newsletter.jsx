import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import mobileSvg from "/signinform/illustration-sign-up-mobile.svg";
import desktopSvg from "/signinform/illustration-sign-up-desktop.svg";
import { TiTick } from "react-icons/ti";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function reset() {
    setIsSuccess(false);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const email = data.email;
    console.log(email);
    setEmail(email);
    setIsSuccess(true);
  };

  return (
    <section className="lg:h-screen lg:grid place-content-center bg-[#242742] text-[#242742]">
      <div className="h-full">
        {isSuccess ? (
          <div className="grid place-content-center gap-8 h-screen lg:h-full lg:w-3/5 p-10 bg-[#fff] m-auto rounded-2xl">
            <div className="rounded-full w-16 bg-[#ff6257]">
              <TiTick className="text-[#fff] h-16 w-10 m-auto" />
            </div>
            <div className="">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                Thanks for subscribing!
              </h1>
              <p className="my-6">
                A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it
                and click the button inside to confirm your subscription.
              </p>
              <button
                onClick={reset}
                className="bg-[#242742] hover:bg-gradient-to-br from-[#ff6257] to-[#ffab57] text-[#fff] font-semibold mt-2 py-4 px-8 rounded-md w-full"
              >
                Dismiss message
              </button>
            </div>
          </div>
        ) : (
          <>
          <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center bg-[#fff] max-w-md lg:max-w-4xl m-auto rounded-2xl">
            <div className="lg:py-5 lg:pr-5 ">
              <img
                src={mobileSvg}
                alt="mobile-svg"
                className="webkit-fill-available lg:hidden"
              />
              <img
                src={desktopSvg}
                alt="desktop-svg"
                className="hidden lg:block"
              />
            </div>
            <div className="flex flex-col justify-center items-start p-8 lg:p-16">
              <div className="mb-4">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                  Stay Updated!
                </h1>
                <p>
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
              </div>
              <div className="grid gap-2 my-5">
                <div className="flex">
                  <div className="rounded-full p-1 lg:w-6 h-6 mr-2 bg-[#ff6257]">
                    <TiTick className="text-[#fff]" />
                  </div>
                  <div>Product discovery and building what matters</div>
                </div>
                <div className="flex">
                  <div className="rounded-full p-1 lg:w-6 mr-2 h-6 bg-[#ff6257]">
                    <TiTick className="text-[#fff]" />
                  </div>
                  <div>Measuring to ensure updates are a success</div>
                </div>
                <div className="flex">
                  <div className="rounded-full p-1 h-6 lg:w-6 mr-2 bg-[#ff6257]">
                    <TiTick className="text-[#fff]" />
                  </div>
                  <div>And much more!</div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:justify-start items-start mt-4 w-full lg:w-4/5">
                <div className="flex justify-between items-center mb-2 webkit-fill-available">
                  <div className="font-semibold">Email address</div>
                  <div className="text-[#ee8c8c] text-sm">
                    {errors.email && <p>{errors.email?.message}</p>}
                  </div>
                </div>
                <input
                  type="email"
                  className="p-4 mb-2 w-full border-[#9294a0] border-solid border-2 rounded-md"
                  placeholder="email@company.com"
                  {...register("email", {
                    required: "Field cannot be empty",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please provide a valid email",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <button
                  onClick={handleSubmit(onSubmit)}
                  className="bg-[#242742] hover:bg-gradient-to-br from-[#ff6257] to-[#ffab57] text-[#fff] font-semibold mt-2 py-4 px-8 rounded-md w-full"
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
