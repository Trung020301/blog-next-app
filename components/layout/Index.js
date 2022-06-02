import Footer from "../Footer";
import Header from "../Header";

const LayoutPage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPage;
