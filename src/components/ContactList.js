import React from "react";

import { ReactComponent as Dots } from "../icons/dots.svg";

function Contact({ dp, name, latestMessage }) {
  return (
    <div className="p-2 flex items-center space-x-3 bg-gray-400">
      <img src={dp} className="h-14 w-14 rounded-full flex-shrink-0 "></img>
      <div className="flex-grow">
        <p>{name}</p>
        <p className="">{latestMessage}</p>
      </div>
      <div className="px-2 flex-shrink-0">
        <Dots />
      </div>
    </div>
  );
}

function ContactList({ contacts }) {
  console.log(contacts[0].profilePictureURL);
  return (
    <div className="">
      <div className="font-normal text-xl leading-6">Chats</div>
      <div className="py-2 ">
        {contacts.map((contact) => (
          <Contact
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
