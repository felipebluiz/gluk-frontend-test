import { styled } from 'styled-components'

export const Container = styled.div`
  .table-responsive {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    table {
      margin-bottom: 0;

      thead > tr > th {
        font-size: 0.875rem;
        text-transform: uppercase;
        white-space: nowrap;
      }

      thead > tr > th,
      tbody > tr > td {
        border-right: 1px solid;
        border-bottom: 1px solid;
        border-color: var(--bs-border-color-translucent);
        padding: 12px;
        vertical-align: middle;

        &:last-child {
          border-right: none;
        }
      }

      tbody > tr:last-child > td {
        border-bottom: none;
      }

      tbody > tr {
        &.highlight {
          td {
            --bs-table-bg-type: #e6f3ff;
            --bs-table-hover-bg: #e6f3ff;
          }
        }

        &.content {
          --bs-table-bg: var(--colors-white) !important;
          --bs-table-hover-bg: var(--colors-white) !important;
          --bs-table-striped-bg: var(--colors-white) !important;
        }

        td > .table-content {
          padding: 13px;
        }
      }

      .actions {
        display: flex;
        gap: 5px;

        button {
          display: flex;
          align-items: center;
          padding: 4px;
          border-radius: 5px;
          border: none;

          &:first-child {
            color: var(--bs-white);
            background-color: var(--bs-gray);
          }

          &:last-child {
            color: var(--bs-white);
            background-color: var(--bs-danger);
          }
        }
      }
    }
  }

  .subtotals-container {
    padding: 20px;
    background-color: var(--colors-white);
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: var(--bs-border-color-translucent);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .row {
      column-gap: 20px;
    }

    p {
      margin-bottom: 0;
      font-size: 0.875rem;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 4px;
      color: var(--colors-primary);
    }

    @media screen and (min-width: 768px) {
      .row {
        justify-content: right;
      }
    }
  }
`
