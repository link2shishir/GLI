import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ComponentWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="py-3">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ComponentWrapper;
