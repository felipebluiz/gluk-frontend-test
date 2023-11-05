import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 12px;
  background-color: #190c50;

  .info {
    display: flex;
    align-items: center;

    .logo-container img {
      width: 44px;
      padding: 0;
    }

    .company-details {
      margin-top: 4px;
      border-left: 1px solid #39248e;
      padding-left: 15px;
      margin-left: 15px;

      h1 {
        color: var(--colors-white);
        font-size: 1rem;
        line-height: 14px;
      }

      span {
        font-size: 0.8rem;
        color: var(--colors-regular);
      }
    }
  }

  .action-buttons button:not(.list) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    background-color: var(--colors-white);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);

    .logo-container {
      display: none;
    }

    .info .company-details {
      padding-left: 0;
      margin-left: 0;
      border-left: none;

      h1 {
        color: var(--colors-darker);
      }
    }

    .action-buttons {
      display: flex;
      gap: 10px;

      .list {
        display: none;
      }

      button:not(.list) {
        display: initial;
      }
    }
  }
`
