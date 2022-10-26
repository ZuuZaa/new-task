import { CustomizeDesk } from "sections/CustomizeDesk";
import { Header } from "sections/Header";
import { QuotesCarousel } from "sections/QuotesCarousel";
import { Products } from "sections/Products";
import { Footer } from "sections/Footer";

export const Mainlayout = () => {
  return (
    // ------ layout for page -----
    <div className="main-container">
      <Header />
      <CustomizeDesk />
      <Products />
      <QuotesCarousel />
      <Footer />
    </div>
  );
};
