"use client";
import { ChangeEvent, useState } from "react";

type FormProps = {
  initalMessage: string;
};

export function FormDemo({ initalMessage }: FormProps) {
  const [message, setMessage] = useState(initalMessage);

  function handleMessageChange(e: ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  console.log("Rendering FormDemo with message", message);
  return (
    <div className="m-3 flex min-w-full flex-col gap-5 border-4 border-pink-500 p-5">
      <h1 className="font-bold">Form Demo</h1>
      Current Value: {message}
      <form className="flex flex-col gap-5">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          className="border-2 p-1"
        />
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Submit!
        </button>
      </form>
    </div>
  );
}
