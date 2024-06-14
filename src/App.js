import { useState } from "react";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";
import { data } from "./data/Data";

function App() {
  const [contacts, setContacts] = useState(data);

  return (
    <div className="App grid grid-cols-4 h-screen bg-white">
      <div className="col-span-1 h-full p-5">
        <ContactList contacts={contacts} />
      </div>
      <div className="col-span-3 h-full">
        <Conversation />
      </div>
    </div>
  );
}

export default App;
