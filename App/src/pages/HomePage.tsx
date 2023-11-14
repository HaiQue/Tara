import HomeOrg from "../components/organisms/HomeOrg";
import { StyledMain, StyledSection, StyledSectionContent } from "./styles";
import { IPageProps } from "./types";

const HomePage = ({ theme, layoutbreakpoint }: IPageProps) => {
  return (
    <StyledMain layoutbreakpoint={layoutbreakpoint}>
      <StyledSection>
        <StyledSectionContent theme={theme}>
          <HomeOrg theme={theme} />
        </StyledSectionContent>
      </StyledSection>
    </StyledMain>
  );
};

export default HomePage;
