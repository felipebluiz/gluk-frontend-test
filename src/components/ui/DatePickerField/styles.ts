import { styled } from 'styled-components'

interface ContainerProps {
  error?: string
}

export const Container = styled.div<ContainerProps>`
  .react-datepicker-wrapper {
    display: block;

    .react-datepicker__input-container input {
      width: 100%;
      height: 50px;
      padding: 16px;
      background: transparent;
      border-radius: 6px;
      border: 1px solid;
      border-color: ${(props) =>
        props.error === 'true'
          ? 'var(--bs-red)'
          : 'var(--bs-border-color-translucent)'};
      font-size: 0.875rem;
      fontfamily: var(--fonts-default);
      color: var(--colors-darker);
      transition: border-color 0.2s ease 0s;

      &:focus {
        border-color: var(--colors-darker);

        svg {
          color: var(--colors-darker);
        }
      }
    }
  }

  .react-datepicker {
    border: 1px solid var(--colors-regular);
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation {
    top: 9px;
  }

  .react-datepicker__navigation--previous {
    border-right-color: var(--colors-primary);

    &:hover {
      border-right-color: var(--colors-primary);
      opacity: 0.8;
    }
  }

  .react-datepicker__navigation--next {
    border-left-color: var(--colors-primary);

    &:hover {
      border-left-color: var(--colors-primary);
      opacity: 0.8;
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: var(--colors-primary) !important;
    color: var(--colors-white);
  }

  .react-datepicker__header {
    background-color: var(--colors-white);
    border-bottom: 1px solid var(--colors-regular);
  }

  .react-datepicker-time__input > input {
    font-size: 13px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
    line-height: 16px;
    padding: 6px 10px 5px;
  }
`
