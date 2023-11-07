import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 4px;
    color: var(--colors-regular);
    font-size: 10px;
  }

  a {
    font-size: 0.8rem;
    color: #465467;

    &:hover {
      text-decoration: underline;
    }
  }

  .highlight {
    display: flex;
    align-items: center;

    span {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 4px;
      color: var(--colors-primary);
    }
  }
`
