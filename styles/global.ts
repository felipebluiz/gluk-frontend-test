import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --colors-primary: #FEBF00;
    --colors-secundary: #20A483;
    --colors-white: #FFFFFF;
    --colors-regular: #B7C8D5;
    --colors-darker: #191F23;
    --colors-black: #000000;
    --colors-transparent: rgba(0, 0, 0, 0);
    --colors-btn-primary-hover: #EFB402;
    --fonts-default: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    background-color: var(--colors-white);
  }

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
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
`
