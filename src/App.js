import { useState } from "react";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";
import { data } from "./data/Data";

function App() {
  const [contacts, setContacts] = useState(data);
  const [selectedContact, setSelectedContact] = useState(null);
  const [unreadContacts, setUnreadContacts] = useState([]);

  const handleSelectContact = (contactId) => {
    const contact = contacts.find((contact) => contact.userId === contactId);
    if (contact) {
      setSelectedContact(contact);
      // console.log("pressed");
      // setUnreadContacts(
      //   unreadContacts.filter((current) => (current !== contactId && current)
      // );
    }
  };

  return (
    <div className="App grid grid-cols-4 h-screen bg-white">
      <div
        className="col-span-1 h-full p-5"
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
      <div className="col-span-3 h-full">
        <Conversation selectedContact={selectedContact} />
      </div>
    </div>
  );
}

export default App;
