import "./index.css";

const Modal = ({ children, onClose = () => {}, id = "modal" }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) {
      onClose();
    }
  };
  return (
    <div className="modal" id={id} onClick={handleOutsideClick}>
      <div className="container-modal">
        <button className="close" onClick={onClose} />
        <div className="content-modal">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
