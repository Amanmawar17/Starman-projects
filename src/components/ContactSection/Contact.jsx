import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Deck from "./DeckAnimation";
import { BsSendFill } from "react-icons/bs";

const schema = yup
  .object({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const message = data.message;
    console.log(name);
    console.log(email);
    console.log(message);
    setName(name);
    setEmail(email);
    setMessage(message);
    reset();
  };

  return (
    <section className="h-[90vh] py-10">
      <h1 className="text-3xl text-center font-semibold">
        Let`s<span className="text-hoverColor"> connect</span>
      </h1>
      <div className="flex justify-between h-full">
        <div className="grid place-content-center w-1/2 h-full">
          <form className="max-w-lg mx-auto ">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="text-[#010101] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("name", {
                  required: "Field cannot be empty",})}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="text-[#010101] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                {...register("email", {
                  required: "Field cannot be empty",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please provide a valid email",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                required
              />
              <div className="text-[#ee8c8c] text-sm">
                {errors.email && <p>{errors.email?.message}</p>}
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <input
                type="text"
                id="message"
                className="text-[#010101] block w-80 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("message", {
                  required: "Field cannot be empty",})}
                required
              />
            </div>
            <button
            onClick={handleSubmit(onSubmit)}
              type="submit"
              className="flex item-center text-white hover:bg-card outline-dotted focus:ring-2 focus:ring-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send it! <BsSendFill className="text-hoverColor m-auto ml-2" />
            </button>
          </form>
        </div>
        <div className="w-1/2 grid place-content-center relative">
          <div className="absolute inset-y-1/3 inset-x-1/3">
            <Deck />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
