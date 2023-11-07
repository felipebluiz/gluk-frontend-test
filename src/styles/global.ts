import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --colors-primary: #2c95ad;
    --colors-secundary: #20a483;
    --colors-white: #ffffff;
    --colors-regular: #b7c8d5;
    --colors-darker: #191f23;
    --colors-black: #000000;
    --colors-transparent: rgba(0, 0, 0, 0);
    --colors-btn-primary-hover: #268297;
    --fonts-default: Open Sans, sans-serif;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: #edf0f4;
    color: var(--colors-darker);
    font-family: var(--fonts-default);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    color: var(--colors-darker);
    letter-spacing: -0.05px;
  }

  a {
    text-decoration: none;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  button {
    margin: 0;
    padding: 0;
    font-family: var(--fonts-default);
    cursor: pointer;
  }

  ::selection {
    color: var(--colors-white);
    background: var(--colors-primary);
  }

  ::-moz-selection {
    color: var(--colors-white);
    background: var(--colors-primary);
  }

  ::placeholder {
    color: var(--bs-border-color-translucent);
    opacity: var(--opacity-default);
  }

  :-ms-input-placeholder {
    color: var(--colors-regular);
  }

  ::-ms-input-placeholder {
    color: var(--colors-regular);
  }

  .required, .error-message {
    color: var(--bs-red) !important;
  }

  .error-message {
    font-size: 0.8rem;
    margin-top: 5px;
  }

  form {
    label > p {
      font-size: 0.875rem;
      color: var(--colors-darker) !important;
      margin-bottom: 8px !important;
    }

    .is-invalid {
      border-color: var(--colors-error-primary);
    }
  }

  input, textarea, button, select, a, div {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-appearance: none;
    outline: none;
  }

  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: none;
  }

  .btn, .btn > div:not(.spinner-border) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    font-family: var(--fonts-default);
    gap: 8px;

    .spinner-border {
      position: absolute;
    }
  }

  .btn-primary {
    background-color: var(--colors-primary);
    border-color: var(--colors-primary);

    &:hover, &:active {
      background-color: var(--colors-btn-primary-hover) !important;
      border-color: var(--colors-btn-primary-hover) !important;
    }
  }

  .btn-secondary {
    background-color: var(--bs-gray-200);
    border-color: var(--bs-gray-200);
    color: var(--colors-darker);

    &:hover, &:active {
      background-color: var(--bs-gray-300) !important;
      border-color: var(--bs-gray-300) !important;
      color: var(--colors-darker) !important;
    }
  }

  .btn-success {
    background-color: #36ac6c;
    border-color: #36ac6c;

    &:hover, &:active {
      background-color: #36ac6c !important;
      border-color: #36ac6c !important;
    }
  }

  .rounded-circle {
    padding: 8px;
    line-height: 0;
  }

  .content-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card {
    padding: 25px;
    margin-bottom: 25px;

    h2 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 3px;
    }

    .row {
      row-gap: 25px;
    }
  }

  .table-responsive {
    border: 1px solid var(--bs-border-color-translucent);
    border-radius: 5px;
    margin-top: 20px;
  }

  .buttons-container {
    display: flex;
    justify-content: right;
    margin-top: 25px;
  }

  .modal-open: {
    overflowY: hidden;
  }

  @media screen and (min-width: 990px) {
    .modal-open: {
      overflowY: inherit;
    }
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      margin-left: 80px;
    }
  }
`
