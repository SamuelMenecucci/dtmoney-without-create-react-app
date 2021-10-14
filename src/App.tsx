import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

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

      <NewTransactionModal
        isOpen={transactionModalIsOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
