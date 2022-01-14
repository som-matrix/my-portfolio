import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
// About Page Component
import AboutMe from "../components/aboutPage/aboutMe";
import {
  useGlobalDispatch,
  useGlobalStateContext,
} from "../context/globalContext";
const AboutPage = () => {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatch();
  const onCursor = (cursorType) => {
    cursorType = cursorStyles.includes(cursorType) && cursorType;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  return (
    <Layout onCursor={onCursor}>
      <SEO title="About" />
      <AboutMe />
    </Layout>
  );
};

export default AboutPage;
