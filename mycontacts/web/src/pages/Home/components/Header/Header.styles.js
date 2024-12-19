import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme, justifyContent }) => css`
    display: flex;
    align-items: center;
    justify-content: ${justifyContent};
    border-bottom: 2px solid ${theme.colors.gray[100]};
    margin-top: 32px;
    padding-bottom: 16px;

    strong {
      color: #222;
      font-size: 24px;
    }

    a {
      color: ${theme.colors.primary.main};
      font-weight: bold;
      border: 2px solid currentColor;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.2s ease-in;

      &:hover {
        background: ${theme.colors.primary.main};
        color: #FFF;
      }
    }
  `}
`
