import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import emptyBagIcon from "./assets/EMPTYBAG.svg";
import fullBagIcon from "./assets/FULLBAG.svg";

function App() {
  const [addChart, setAddChart] = useState();
  const [chartCount, setChartCount] = useState(0);
  const [bagIcon, setBagIcon] = useState(emptyBagIcon);

  const updateBagIcon = () => {
    chartCount === 0 ? setBagIcon(emptyBagIcon) : setBagIcon(fullBagIcon);
  };

  return (
    <>
      <Navbar
        bagIcon={bagIcon}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              addChart={addChart}
              setAddChart={setAddChart}
              chartCount={chartCount}
              setChartCount={setChartCount}
              bagIcon={bagIcon}
              setBagIcon={setBagIcon}
              updateBagIcon={updateBagIcon}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
