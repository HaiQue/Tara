import { IColorTheme } from "../shared/color_themes";

export interface IPageProps {
  headingText?: string;
  theme?: IColorTheme;
  layoutbreakpoint?: string;
}

export interface StyledMainProps {
  layoutbreakpoint?: string;
}

export interface StyledSectionProps {
  theme?: IColorTheme;
}

export interface StyledSectionHeadingWrapperProps {
  theme?: IColorTheme;
}

export interface StyledSectionContentProps {
  theme?: IColorTheme;
}
