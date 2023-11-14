import AnalysisOrg from "../components/organisms/HomeOrg";
import { StyledMain, StyledSection, StyledSectionContent } from "./styles";
import { IPageProps } from "./types";

const Statistics = ({ theme, layoutbreakpoint }: IPageProps) => {
  return (
    <StyledMain layoutbreakpoint={layoutbreakpoint}>
      <StyledSection>
        <StyledSectionContent theme={theme}>
          <AnalysisOrg theme={theme} />
        </StyledSectionContent>
      </StyledSection>
    </StyledMain>
  );
};

export default Statistics;
