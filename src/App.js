import "./App.css";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
function App() {
  return (
    <div className="content-wrapper font-Karla max-w-screen-2xl w-full text-base mx-auto  py-4 lg:px-8 overflow-x-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
