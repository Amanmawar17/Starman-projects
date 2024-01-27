import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FaExclamationCircle } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import baseapparelhero from "/baseapparel/baseapparelhero.jpg";
import baseapparelheromobile from "/baseapparel/baseapparel-hero-mobile.jpg";
import logo from '/baseapparel/baseapparel_logo.svg';

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

export default function BaseApparel() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {console.log(data); reset();}

  return (
    <section className="bg-secondary font-sans overflow-y-scroll no-scrollbar bg-gradient-to-tr from-[#fff] to-[#fff5f5]">
      <div className="flex justify-center lg:justify-between ">
        <div className="flex flex-col justify-center w-full lg:w-3/5">
          <div className=" flex flex-col justify-evenly lg:justify-around items-start lg:items-start text-center lg:text-start lg:px-28 h-screen">
            <div className="p-4">
              <img src={logo} alt="" />
            </div>
            <div className="block lg:hidden ">
              <img src={baseapparelheromobile} alt="hero-image" className="webkit-fill-available"/>
            </div>
            <div className="max-w-lg">
              <h1 className="font-normal tracking-[15px] text-4xl lg:text-7xl text-[#ce9797]">
                WE`RE <br />
                <span className="font-semibold tracking-[20px] text-4xl lg:text-7xl text-[#000]">
                  COMING <br />
                  SOON
                </span>
              </h1>
              <p className="text-[#ce9797] px-3 text-sm mt-2 lg:mt-8">
                Hello fellow shoppers! We`re currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start items-center relative text-[#000] w-11/12 lg:w-4/5 h-[87px]">
              <input
                type="email"
                placeholder="Email address"
                id="email"
                autoComplete="email"
                {...register("email", {
                  required: "Field cannot be empty",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please provide a valid email",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="mb-3 text-sm p-2 w-5/6 rounded-2xl border-2 border-solid h-2/3 border-[#d0c7c7]"
              />
              {errors.email && (
                <FaExclamationCircle className="text-[#ee8c8c] absolute right-1/3 top-1/3" />
              )}
              <button
                type="submit"
                className="absolute bg-gradient-to-r from-[#f8bfbf] to-[#ee8c8c] text-secondary right-0 hove:backdrop-filter hover:shadow-lg  hover:backdrop-blur-lg bg-opacity-30 z-10 p-3 w-1/4 mb-3 h-2/3 rounded-3xl"
                onClick={handleSubmit(onSubmit)}
              >
                <BsChevronRight className="m-auto" />
              </button>
              {errors.email && (
                <p className="text-[#ee8c8c] text-sm absolute left-8 lg:left-2 bottom-0">
                  {errors.email?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-screen">
          <img src={baseapparelhero} alt="base apparel hero" className="webkit-fill-available" />
        </div>
      </div>
    </section>
  );
}
