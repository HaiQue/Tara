import FAQ from "../pages/FAQ";
import HomePage from "../pages/HomePage";
import Analysis from "../pages/HomePage";
import Statistics from "../pages/Statistics";
import Temp from "../pages/Temp";
import { currentTheme } from "./color_themes";

export interface ILinkListItem {
  name: string;
  url: string;
  key: number;
  isIndex?: boolean;
  description?: string;
  getElement: () => JSX.Element;
  imagesrc?: string;
}

const layoutHeightBreakpoint = "768px";

export const LINK_LIST: ILinkListItem[] = [
  {
    name: "Home",
    url: "/",
    key: 1,
    isIndex: true,
    getElement: () => <HomePage layoutbreakpoint={layoutHeightBreakpoint} />,
  },
  {
    name: "Tara",
    url: "/Tara",
    key: 2,
    description: "test",
    getElement: () => (
      <Statistics
        theme={currentTheme}
        layoutbreakpoint={layoutHeightBreakpoint}
      />
    ),
  },
  {
    name: "Analysis",
    url: "/Analysis",
    key: 3,
    description: "Analysis",
    getElement: () => (
      <Analysis
        theme={currentTheme}
        layoutbreakpoint={layoutHeightBreakpoint}
      />
    ),
  },
  {
    name: "FAQ",
    url: "/FAQ",
    key: 4,
    description: "FAQ",
    getElement: () => (
      <FAQ theme={currentTheme} layoutbreakpoint={layoutHeightBreakpoint} />
    ),
  },
  {
    name: "Temp",
    url: "/Temp",
    key: 5,
    description: "Temp",
    getElement: () => (
      <Temp theme={currentTheme} layoutbreakpoint={layoutHeightBreakpoint} />
    ),
  },
];
