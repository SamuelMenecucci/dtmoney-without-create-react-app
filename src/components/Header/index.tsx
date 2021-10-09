import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

type HeaderProps = {
  onOpenTransactionModal: () => void;
};

export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type="button" onClick={onOpenTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
