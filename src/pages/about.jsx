import * as React from "react";
import Layout from "../components/Layout/Layout";
// About Page Component
import AboutMe from "../components/AboutMe/AboutMe";
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
    <Layout onCursor={onCursor} seoTitle="About">
      <AboutMe />
    </Layout>
  );
};

export default AboutPage;
