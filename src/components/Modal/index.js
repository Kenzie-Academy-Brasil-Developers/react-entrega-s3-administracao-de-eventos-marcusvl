import {
  LargeContainerModal,
  ContainerModal,
  ContentModal,
  Close,
} from "./styles";

const Modal = ({ children, onClose = () => {}, id = "modal" }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) {
      onClose();
    }
  };
  return (
    <LargeContainerModal id={id} onClick={handleOutsideClick}>
      <ContainerModal>
        <Close onClick={onClose} />
        <ContentModal>{children}</ContentModal>
      </ContainerModal>
    </LargeContainerModal>
  );
};

export default Modal;
