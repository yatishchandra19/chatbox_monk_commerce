const Modal = ({
  userId,
  handleMarkAsUnread,
  handleDeleteContact,
  handleCancel,
}) => {
  return (
    <div
      className="modal absolute bg-white flex flex-col p-3 rounded-md z-10 border-2 border-gray-200 font-normal text-sm"
      style={{
        top: "64%",
        right: "6%",
        // transform: "translate(-50%, -50%)",

        // border: 1px solid #ccc;
        minWidth: "50%",
        margin: "0px",
      }}>
      <button
        className="text-left mb-3"
        onClick={() => handleMarkAsUnread(userId)}>
        Mark as unread
      </button>
      <button
        className="text-left mb-3"
        onClick={() => handleDeleteContact(userId)}>
        Delete
      </button>
      <button className="text-left" onClick={() => handleCancel()}>
        Cancel
      </button>
    </div>
  );
};

export default Modal;
