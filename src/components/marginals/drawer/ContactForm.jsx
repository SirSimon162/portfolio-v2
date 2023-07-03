import React, { useState } from "react";
import { Btn } from "../../../styles/componentStyles/drawer.styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form
      onSubmit={""}
      className="flex flex-col gap-3 w-[85%] sm:w-[80%] mt-[20px] ml-[30px] text-[#f5eee6] font-Kanit"
      action="https://getform.io/f/7d0cd89f-83fd-47e4-8d14-af49afc3671a"
      method="POST"
      target="_blank"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="ml-[10px]">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          name="name"
          onChange={handleNameChange}
          required
          placeholder="Name"
          className="bg-transparent border-[#f5eee6] border-[3px] rounded-[16px] focus:outline-none placeholder:text-[#f5eee6] placeholder:opacity-30 px-3 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="ml-[10px]">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          name="email"
          required
          onChange={handleEmailChange}
          placeholder="xyz@gmail.com"
          className="bg-transparent border-[#f5eee6] border-[3px] rounded-[16px] focus:outline-none placeholder:text-[#f5eee6] placeholder:opacity-30 px-3 py-2 "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="ml-[10px]">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          name="message"
          required
          onChange={handleMessageChange}
          placeholder="Your message here"
          className="bg-transparent border-[#f5eee6] border-[3px] rounded-[16px] focus:outline-none placeholder:text-[#f5eee6] placeholder:opacity-30 px-3 py-2 h-[250px]"
        ></textarea>
      </div>
      <Btn type="submit">Submit</Btn>
    </form>
  );
};
export default ContactForm;
