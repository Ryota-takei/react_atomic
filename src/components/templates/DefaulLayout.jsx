import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefaulLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
