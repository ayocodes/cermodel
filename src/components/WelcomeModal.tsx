import { useContext } from "react";
import styled from "styled-components";
import { modalActions, ModalContext } from "../state/modals";
import Text from "./Text";

const SModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const SWelcome = styled.div`
  display: flex;
  flex-direction: column;
  width: 27rem;
  background: ${({ theme }) => theme.modal};
  border-radius: 1.5rem;
  height: 25rem;
  justify-content: space-between;
`;

const SHeader = styled.div`
  height: 5rem;
  width: 27rem;
  padding: 2rem;
  border-bottom: 1.5px solid #1d2231;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

const Sp = styled.p`
  font-size: 1.25;
  color: ${({ theme }) => theme.accent2};
`;

const Simg = styled.img`
  transition: 100ms;
  :hover {
    transform: scale(1.05);
  }
`;

const SBody = styled.div``;

const WelcomeModal = () => {
  const {
    state: { showWelcome },
    dispatch,
  } = useContext(ModalContext) as {
    state: ModalState;
    dispatch: any;
  };

  if (!showWelcome) {
    return null;
  }

  return (
    <SModal
      onClick={() => dispatch({ type: modalActions.CLOSE_WELCOME_MODAL })}
    >
      <SWelcome onClick={(e) => e.stopPropagation()}>
        <SHeader>
          <Simg
            onClick={() => dispatch({ type: modalActions.CLOSE_WELCOME_MODAL })}
            src="close.svg"
            alt=""
          />
          <Text type="h5">Welcome</Text>
          <Sp>Next</Sp>
        </SHeader>
        <SBody></SBody>
      </SWelcome>
    </SModal>
  );
};

export default WelcomeModal;