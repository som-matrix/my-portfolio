import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Container } from "../../styles/globalStyles";
import { HomeContentSection, Content } from "../../styles/homeStyles";

const IntroSection = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [contentRef, inView, animation]);
  return (
    <HomeContentSection
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
        hidden: { y: 70, opacity: 0 },
      }}>
      <Container>
        <Content>
          The dream behind the Web is of a common information space in which we
          communicate by sharing information. Its universality is essential: the
          fact that a hypertext link can point to anything, be it personal,
          local or global, be it draft or highly polished
        </Content>
      </Container>
    </HomeContentSection>
  );
};

export default IntroSection;
