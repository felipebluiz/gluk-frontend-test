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
    --fonts-default: 'Inter', sans-serif;
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
    color: var(--colors-regular);
    opacity: var(--opacity-default);
  }

  :-ms-input-placeholder {
    color: var(--colors-regular);
  }

  ::-ms-input-placeholder {
    color: var(--colors-regular);
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

  .btn-primary {
    background-color: var(--colors-primary);
    border-color: var(--colors-primary);

    &:hover {
      background-color: var(--colors-btn-primary-hover);
      border-color: var(--colors-btn-primary-hover);
    }
  }

  .btn-secondary {
    background-color: var(--bs-gray-200);
    border-color: var(--bs-gray-200);
    color: var(--colors-darker);

    &:hover {
      background-color: var(--bs-gray-300);
      border-color: var(--bs-gray-300);
      color: var(--colors-darker);
    }
  }

  .rounded-circle {
    padding: 8px;
    line-height: 0;
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      margin-left: 80px;
    }
  }
`
