import React from "react";
import { ReactComponent as Dots } from "../icons/dots.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
import { ReactComponent as Video } from "../icons/video.svg";
import { ReactComponent as Mic } from "../icons/mic.svg";
import { ReactComponent as Send } from "../icons/send.svg";
import { ReactComponent as Back } from "../icons/back.svg";

function Conversation({ selectedContact, onBack }) {
  return (
    <div className="px-10 md:py-8 flex flex-col h-screen">
      <div
        style={{
          backgroundColor: "#F6F6F6",
        }}
        className="py-4 px-6 flex items-center space-x-3 rounded-xl flex-shrink-0">
        <div className="md:hidden flex-shrink-0" onClick={onBack}>
          <Back />
        </div>
        <img
          src={selectedContact.profilePictureURL}
          className="h-14 w-14 rounded-full flex-shrink-0 "></img>
        <div className="flex-grow">
          <p
            className="font-semibold text-base"
            style={{ fontFamily: "Source Sans Pro" }}>
            {selectedContact.name}
          </p>
          <p
            className="font-normal h-6 overflow-clip text-sm"
            style={{ fontFamily: "Source Sans Pro" }}>
            Click here for contact info
          </p>
        </div>
        <div className="px-2 flex-shrink-0">
          <Video />
        </div>
        <div className="px-2 flex-shrink-0">
          <Phone />
        </div>
        <div className="px-2 flex-shrink-0">
          <Dots />
        </div>
      </div>
      <div className="py-4 flex-grow overflow-y-scroll scrollbar-hide ">
        {selectedContact.chat.map((messages) => (
          <div className="flex flex-col w-full">
            <div
              style={{ backgroundColor: "#FAFAFA" }}
              className="p-4 mb-3 rounded-full flex flex-col self-start max-w-64 sm:max-w-96 lg:max-w-full">
              <div className="text-base mb-2">{messages.user.message}</div>
              <div
                className="self-start text-sm"
                style={{ color: "#00000075" }}>
                {messages.user.timeStamp}
              </div>
            </div>
            <div
              className="p-4 mb-3 rounded-full flex flex-col text-sm self-end max-w-64 sm:max-w-96 lg:max-w-full"
              style={{ backgroundColor: "#DCF7C5" }}>
              <div className="text-base mb-2 ">{messages.you.message}</div>
              <div className="self-end text-sm" style={{ color: "#00000075" }}>
                {messages.you.timeStamp}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-shrink-0 flex flex-row items-center">
        <div className="flex-shrink-0">
          <Mic />
        </div>
        <div className="flex flex-grow flex-row ml-2 pr-2 border-2 border-gray-200 items-center rounded-3xl">
          <input
            className="flex-grow px-3 py-3 bg-transparent"
            type="text"
            placeholder={`Message ${selectedContact.name}`}
            style={{ fontFamily: "Source Sans Pro" }}></input>
          <Send className="flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
