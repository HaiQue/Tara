import { styled } from "styled-components";
import { INavigationProps } from "./Navigation";

export const StyledNav = styled.nav<INavigationProps>`
  width: 50%;
  min-height: 3.5rem;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  z-index: 99;

  i {
    display: flex;
    flex-direction: row;
    height: 3.25rem;
    width: 3.25rem;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.color};
    cursor: pointer;
  }

  i:hover {
    background-color: ${(props) => props.theme.hovercolor};
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    li {
      transition: 0.2s;
      display: flex;
      align-items: stretch;
      display: flex;
      height: 100%;
      width: 100%;
      background-color: transparent;
      color: #4a4a4a;

      a {
        transition: 0.2s;
        line-height: 1.5;
        padding: 0.5rem 0.75rem;
        display: flex;
        align-items: center;
        width: 100%;
        background-color: transparent;
        color: #fafafa;
        justify-content: center;
      }
    }

    li:hover {
      a {
        background-color: #3a51bb;
      }
    }
    li.active {
      a {
        color: ${(props) => props.theme.color};
      }
    }
  }

  ul.active {
    display: flex;
    background-color: white;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.11);
  }
`;
