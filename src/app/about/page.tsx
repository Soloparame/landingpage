import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ASHETEN INVESTMENT ONE MEMBER PLC",
  description: "Learn about ASHETEN INVESTMENT ONE MEMBER PLC, a diversified business entity based in Addis Ababa, Ethiopia, providing comprehensive business solutions across multiple sectors.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Discover the story behind ASHETEN INVESTMENT ONE MEMBER PLC and our commitment to delivering excellence across multiple business sectors in Ethiopia."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
