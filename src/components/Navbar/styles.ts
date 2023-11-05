import { styled } from 'styled-components'

interface ContainerProps {
  isopen: string
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: ${(props) => (props.isopen === 'true' ? '5000px' : 0)};
  background-color: var(--colors-white);
  transition: max-height 0.3s ease 0s;
  overflow: hidden;
  z-index: 9999;

  .logo-container {
    display: none;
  }

  .dots {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px;

    li > a {
      color: #331f5f;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      border-radius: 6px;
      font-size: 0.875rem;

      .line {
        display: none;
      }

      svg {
        width: 20px;
        height: 20px;
      }

      &.active {
        background-color: #71baca;
      }

      &:hover:not(&.active) {
        background-color: var(--colors-regular);
      }
    }

    .separator {
      border-bottom: 1px solid #f1f1f1;
      margin: 5px 0;
    }
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    width: 80px;
    height: 100vh;
    max-height: 100vh;
    background-color: #190c50;
    padding-top: 15px;
    padding-bottom: 15px;
    transition: none;

    .logo-container {
      display: initial;
    }

    .dots {
      display: block;
      color: #3a2b7b;
      margin: 15px auto 10px;
    }

    ul {
      padding: 0;
      text-align: center;
      gap: 15px;

      li {
        a {
          position: relative;
          display: block;
          padding: 10px 0;
          color: var(--colors-white);
          border-radius: none;

          svg {
            width: initial;
            height: initial;
          }

          span {
            display: none;
          }

          &.active,
          &:hover:not(&.active, &.legacy-button),
          &.hover:not(&.active, &.legacy-button) {
            background-color: #221360;

            .line {
              position: absolute;
              display: initial;
              top: 7px;
              left: 0;
              width: 4px;
              height: 36px;
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
            }
          }

          &.active {
            .line {
              background-color: #1894ac;
            }

            color: var(--colors-primary);
          }

          &:hover:not(&.active) .line,
          &.hover:not(&.active) .line {
            background-color: #ffffff;
          }
        }

        &.mobile {
          display: none;
        }
      }

      .separator {
        display: none;
      }
    }
  }
`
