import { useState } from "react";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";
import { data } from "./data/Data";

function App() {
  const [contacts, setContacts] = useState(data);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [unreadContacts, setUnreadContacts] = useState([]);

  const handleSelectContact = (contactId) => {
    const contact = contacts.find((contact) => contact.userId === contactId);
    if (contact) {
      setSelectedContact(contact);
      console.log("pressed");
      setUnreadContacts(
        unreadContacts.filter((current) => current !== contactId && current)
      );
    }
  };

  const handleBackToContacts = () => {
    setSelectedContact(null);
  };

  return (
    <div className="App flex flex-col md:flex-row h-screen bg-white ">
      <div
        className={`md:w-1/4 h-full p-5 border-gray-200 ${
          selectedContact ? "hidden md:block" : "block"
        }`}
        style={{ borderRight: "1px solid #EFEFEF" }}>
        <ContactList
          contacts={contacts}
          setContacts={setContacts}
          onSelectContact={handleSelectContact}
          selectedContact={selectedContact}
          unreadContacts={unreadContacts}
          setUnreadContacts={setUnreadContacts}
        />
      </div>
      {selectedContact && (
        <div className="flex-grow h-full">
          <Conversation
            selectedContact={selectedContact}
            onBack={handleBackToContacts}
          />
        </div>
      )}
    </div>
  );
}

export default App;
