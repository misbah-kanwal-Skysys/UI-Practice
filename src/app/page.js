import { Box } from "@chakra-ui/react";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import LogoSlider from "./components/slider/LogoSlider";
import ContentSection from "./components/contentSection/ContentSection";
import ContainerLayout from "./components/layout/ContainerLayout";
import ServiceSection from "./components/serviceSection/ServiceSection";
import JoinUsSection from "./components/joinUsSection/JoinUsSection";
import CaseStudiesSection from "./components/caseStudiesSection/CaseStudiesSection";
import OurWorkingSection from "./components/ourWorkingSection/OurWorkingSection";

export default function Home() {
  return (
    <>
      <Header />
      <ContainerLayout>
        <HeroSection />
        <Box mt={["20px", "20px", "55px"]}>
          <LogoSlider />
        </Box>
        <Box mt={["20px", "35px", "50px"]}>
          <ContentSection
            heading={"Services"}
            definition={
              "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
            }
            textwidth={["580px"]}
          />
          <ServiceSection />
        </Box>
        <Box mt={["20px", "30px", "35px"]}>
          <JoinUsSection />
        </Box>
        <Box mt={["20px", "35px", "50px"]}>
          <CaseStudiesSection/>
        </Box>
        <Box mt={["20px", "35px", "50px"]}>
          <OurWorkingSection/>
        </Box>
      </ContainerLayout>
    </>
  );
}
