import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";
import HeaderCopy from "../components/Header/HeaderCopy";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderCopy />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
