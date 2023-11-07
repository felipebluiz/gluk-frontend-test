import { styled } from 'styled-components'

interface StyledModalProps {
  opened: string
}

export const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.opened === 'true' ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  overflow-y: auto;
  z-index: 9999;

  .modal-container {
    width: 100vw;
    min-height: 100%;
    background-color: var(--colors-white);
    display: flex;
    flex-direction: column;

    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: 1.3rem;
        font-weight: 600;
      }
    }
  }

  @media screen and (min-width: 990px) {
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgb(0 0 0 / 30%);
    backdrop-filter: blur(6px);
    overflow-y: auto;

    .modal-container {
      height: fit-content;
      max-width: 580px;
      min-height: initial;
      border-radius: 20px;
    }
  }
`
