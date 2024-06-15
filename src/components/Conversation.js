import React from "react";
import { ReactComponent as Dots } from "../icons/dots.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
import { ReactComponent as Video } from "../icons/video.svg";

function Conversation({ selectedContact }) {
  return (
    // Conversation{selectedContact && <p>{selectedContact.userId}</p>}
    <div className="px-10 py-8 h-full flex flex-col">
      <div
        style={{
          backgroundColor: "#F6F6F6",
        }}
        className="py-4 px-6 flex items-center space-x-3 rounded flex-shrink-0">
        <img
          src={selectedContact.profilePictureURL}
          className="h-14 w-14 rounded-full flex-shrink-0 "></img>
        <div className="flex-grow">
          <p
            className="font-semibold text-base"
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            }}>
            {selectedContact.name}
          </p>
          <p
            className="font-normal h-6 overflow-clip text-sm"
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
              color: "#8E8E93",
            }}>
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
      <div className="flex-grow">messages</div>
      <div className="flex-shrink-0"> Input</div>
    </div>
  );
}

export default Conversation;
