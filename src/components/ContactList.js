import React from "react";
import "../index.css";

import { ReactComponent as Dots } from "../icons/dots.svg";

function Contact({ onSelectContact, userId, dp, name, latestMessage }) {
  return (
    <div
      onClick={() => onSelectContact(contact.userId)}
      className="py-2 px-1 flex items-center space-x-3 mb-2"
    >
      <img src={dp} className="h-14 w-14 rounded-full flex-shrink-0 "></img>
      <div className="flex-grow">
        <p
          className="font-semibold text-base"
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {name}
        </p>
        <p
          className="font-normal h-6 overflow-clip text-sm"
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            color: "#8E8E93",
          }}
        >
          {latestMessage}
        </p>
      </div>
      <div className="px-2 flex-shrink-0">
        <Dots />
      </div>
    </div>
  );
}

function ContactList({ contacts, handleSelectContact }) {
  console.log(contacts[0].profilePictureURL);
  return (
    <div className="">
      <div className="font-normal font-sans text-xl leading-6">Chats</div>
      <div className="py-2 ">
        {contacts.map((contact) => (
          <Contact
            onSelectContact={handleSelectContact}
            userId={contact.userId}
            dp={contact.profilePictureURL}
            name={contact.name}
            latestMessage={contact.chat[contact.chat.length - 1].you.message}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
