import Modal from "react-modal";
import { Container } from "./style";
import closeImg from "../../assets/fechar.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-close-modal"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />

        <input placeholder="Valor" type="number" />

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
