import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
type HeaderProps = {
  onOpenTransactionModal: () => void;
};

export function App() {
  const [transactionModalIsOpen, setTransactionModalisOpen] = useState(false);

  function handleOpenTransactionModal() {
    setTransactionModalisOpen(true);
  }

  function handleCloseTransactionModal() {
    setTransactionModalisOpen(false);
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={transactionModalIsOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h1>Information Here</h1>
      </Modal>
      <GlobalStyle />
    </>
  );
}
