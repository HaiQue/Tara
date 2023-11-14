import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { LINK_LIST, ILinkListItem } from "./shared/LinkList";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {LINK_LIST.map((link: ILinkListItem) => {
              return (
                <Route
                  key={link.key}
                  index={link.isIndex ? true : false}
                  path={link.url}
                  element={link.getElement()}
                />
              );
            })}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
