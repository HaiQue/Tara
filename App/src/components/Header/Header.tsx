import { StyledHeader } from "./styles";
import Navigation from "../Navigation";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LINK_LIST } from "../../shared/LinkList";
import { NAV_ALIGNMENT } from "../Navigation/Navigation";
import { IColorTheme, currentTheme } from "../../shared/color_themes";

export interface IHeaderProps {
  theme: IColorTheme;
}

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    setUrl(pathname);
  }, [location, pathname]);

  return (
    <StyledHeader theme={currentTheme}>
      <Navigation
        theme={currentTheme}
        currentUrl={url}
        linkList={LINK_LIST}
        burgeralign={NAV_ALIGNMENT.right}
        desktopalign={NAV_ALIGNMENT.center}
      />
    </StyledHeader>
  );
};

export default Header;
