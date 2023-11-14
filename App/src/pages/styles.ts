import styled, { keyframes } from "styled-components";
import { IPageProps } from "./types";
import { colorThemes } from "../shared/color_themes";

interface StyledSectionHeadingWrapperProps {
  theme: {
    background: string;
  };
}

interface StyledSectionContentProps {
  theme: {
    background: string;
  };
}

const purpleColor = colorThemes.purple.background;
const blueColor = colorThemes.blue.background;
const blueHoverColor = colorThemes.blue.hovercolor;

export const StyledMain = styled.main<IPageProps>`
  padding: 35px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: stretch;

  ${(props) => {
    const breakpoint = props.layoutbreakpoint || "1200px";
    return `
      @media (min-width: ${breakpoint}) {
        min-height: 80vh;
        padding: 50px;
      }
    `;
  }}
`;

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 15px 20px 3px lightgray;
`;

export const StyledSectionHeadingWrapper = styled.div<StyledSectionHeadingWrapperProps>`
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => props.theme.background};
  color: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledSectionContent = styled.div<StyledSectionContentProps>`
  padding: 20px 40px;
  height: 100%;
  border-radius: 0 0 5px 5px;
  min-height: 60vh;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: ${blueColor};
  }

  tr:nth-child(even) {
    background-color: ${blueColor};
  }

  tr:hover {
    background-color: ${blueHoverColor};
  }
`;

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid ${purpleColor};
    border-color: ${purpleColor} transparent ${purpleColor} transparent;
    animation: ${spinAnimation} 1.2s linear infinite;
  }
`;

export const ErrorBox = styled.div`
  padding: 20px;
  color: red;
  background-color: #ffeeee;
  border: 1px solid red;
  border-radius: 4px;
`;
