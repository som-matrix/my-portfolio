import * as React from "react";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
// Global Context
import {
  useGlobalDispatch,
  useGlobalStateContext,
} from "../context/globalContext";
// Components
import Banner from "../components/Banner/Banner";
import IntroSection from "../components/IntroSection/IntroSection";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
const HomePage = () => {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatch();
  const onCursor = (cursorType) => {
    cursorType = cursorStyles.includes(cursorType) && cursorType;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Layout onCursor={onCursor} seoTitle="Home">
      <Banner onCursor={onCursor} />
      <IntroSection />
      <FeatureSection
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <SkillsSection />
    </Layout>
  );
};

export default HomePage;
