import ContactForm from "@/components/ContactForm";
import HomeBanner from "@/components/HomeBanner";
import OurWork from "@/components/OurWork";
import Outsourcing from "@/components/Outsourcing";
import OutsourcingServices from "@/components/OutsourcingServices";
import Process from "@/components/Process";
import ProductsPortfolio from "@/components/ProductsPortfolio";
import WhoWeAre from "@/components/WhoWeAre";
import Clients from "@/components/Clients";
import Benefits from "@/components/benefits";
import Technologies from "@/components/Techologies";
import "./home.scss";

export default function Home(): JSX.Element {
  return (
    <>
      <HomeBanner />
      <WhoWeAre />
      <Outsourcing />
      <Benefits />
      <OutsourcingServices />
      <ProductsPortfolio />
      <Process />
      <Technologies />
      <OurWork
        isLogoDesignPage={true}
        isWebPage={true}
        isMobilePage={true}
        isGraphicDesignPage={true}
      />
      <div className="home-contact-form">
        <ContactForm customPadding="ps-0 pe-0" />
      </div>
      <Clients />
    </>
  );
}
