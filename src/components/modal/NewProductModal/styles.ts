import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 30px;
  padding: 30px;
  text-align: center;

  .content-container {
    display: grid;
    gap: 20px;
    padding: 0;
    text-align: left;

    .error-message {
      margin-bottom: 0;
    }
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
  }

  @media screen and (min-width: 375px) {
    .footer-container {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`
