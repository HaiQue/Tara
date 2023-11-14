import AnalysisPageOrg from "../components/organisms/AnalysisPageOrg";
import { StyledMain, StyledSection, StyledSectionContent } from "./styles";
import { IPageProps } from "./types";

const FAQ = ({ theme, layoutbreakpoint }: IPageProps) => {
  return (
    <StyledMain layoutbreakpoint={layoutbreakpoint}>
      <StyledSection>
        <StyledSectionContent theme={theme}>
          <AnalysisPageOrg theme={theme} />
        </StyledSectionContent>
      </StyledSection>
    </StyledMain>
  );
};

export default FAQ;
