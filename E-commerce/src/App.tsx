import { FC } from "react";
import "./App.scss";
import { Navbar } from "./layout/Navbar/Navbar";
import { OfferBoard } from "./components/OfferBoard/OfferBoard";
import { FooterSection } from "./layout/FooterSection/FooterSection";
import { RoutesLayout } from "./routes/RoutesLayout";
import { AllModals } from "./modals/AllModals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useSetCarts } from "./hooks/useSetCarts";
import { useProductsList } from "./hooks/useProductsList";

const App: FC = () => {
  useCurrentUser();
  useSetCarts();
  useProductsList();
  return (
    <>
      <div className="main-application-wrapper">
        <AllModals />
        <OfferBoard />
        <Navbar />
        <RoutesLayout />
        <FooterSection />
      </div>
      <ToastContainer />
    </>
  );
};
export default App;
