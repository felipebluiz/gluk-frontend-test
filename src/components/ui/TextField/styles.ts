import { styled } from 'styled-components'

interface StyledTextFieldProps {
  haslefticon?: string
  error?: string
}

export const StyledTextField = styled.div<StyledTextFieldProps>`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${(props) =>
    props.error === 'true'
      ? 'var(--bs-red)'
      : 'var(--bs-border-color-translucent)'};
  transition: border-color 0.2s ease 0s;

  &:focus-within {
    border-color: var(--colors-darker);

    svg {
      color: var(--colors-darker);
    }
  }

  svg {
    width: 20px;
    height: 20px;
    marginleft: 14px;
    color: var(--colors-regular);
    transition: color 0.2s ease 0s;
  }

  input {
    width: 100%;
    height: 48px;
    padding: ${(props) => (props.haslefticon === 'true' ? '12px' : '16px')};
    background: transparent;
    border: none;
    font-size: 0.875rem;
    font-family: var(--fonts-default);
    color: var(--colors-darker);

    &:disabled {
      background-color: #f4f4f4;
      border-radius: 4px;
    }
  }
`
