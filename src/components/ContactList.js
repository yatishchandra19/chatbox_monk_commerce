import React, { useState } from "react";
import "../index.css";
import Modal from "./Model";

import { ReactComponent as Dots } from "../icons/dots.svg";

function Contact({
  onSelectContact,
  selectedContact,
  userId,
  dp,
  name,
  latestMessage,
  unreadCount,
  showModel,
  setShowModel,
  unreadContacts,
  setUnreadContacts,
  handleDeleteContact,
}) {
  function handleMarkAsUnread(contactId) {
    setUnreadContacts([...unreadContacts, contactId]);
  }

  function handleCancel() {
    setShowModel(null);
  }

  return (
    <div
      onClick={() => {
        onSelectContact(userId);
      }}
      style={{
        backgroundColor:
          selectedContact && selectedContact.userId === userId
            ? "#F5F7FB"
            : "transparent",
        position: "relative",
      }}
      className="py-2 px-2 flex items-center space-x-3 mb-2 rounded ">
      <img src={dp} className="h-14 w-14 rounded-full flex-shrink-0 "></img>
      <div className="flex-grow">
        <p
          className="font-semibold text-base"
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}>
          {name}
        </p>
        <p
          className="font-normal h-6 overflow-clip text-sm"
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            color: "#8E8E93",
          }}>
          {latestMessage}
        </p>
      </div>
      {unreadContacts.find((current) => current === userId) && (
        <div
          className="flex-shrink-0 text-xs py-1 px-2 mb-2 rounded-full text-white self-end"
          style={{ backgroundColor: "#3BA55D" }}>
          {unreadCount}
        </div>
      )}
      <div className="px-2 flex-shrink-0" onClick={() => setShowModel(userId)}>
        <Dots />
      </div>
      {showModel === userId && (
        <Modal
          userId={userId}
          handleMarkAsUnread={handleMarkAsUnread}
          handleDeleteContact={handleDeleteContact}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}

function ContactList({
  contacts,
  setContacts,
  onSelectContact,
  selectedContact,
  unreadContacts,
  setUnreadContacts,
}) {
  const [showModel, setShowModel] = useState(null);

  function handleDeleteContact(contactId) {
    setContacts(contacts.filter((contact) => contact.userId !== contactId));
  }

  return (
    <div className="">
      <div className="font-normal font-sans text-xl leading-6">Chats</div>
      <div className="py-2 ">
        {contacts.map((contact) => (
          <Contact
            onSelectContact={onSelectContact}
            selectedContact={selectedContact}
            userId={contact.userId}
            dp={contact.profilePictureURL}
            name={contact.name}
            latestMessage={contact.chat[contact.chat.length - 1].you.message}
            unreadCount={contact.unreadCount}
            showModel={showModel}
            setShowModel={setShowModel}
            unreadContacts={unreadContacts}
            setUnreadContacts={setUnreadContacts}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
