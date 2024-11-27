import HeroVideo from "../components/HeroVideo";
import ProductsList from "../components/ProductsList";

function HomePage({addChart, setAddChart, chartCount, setChartCount, bagIcon,
  setBagIcon, updateBagIcon}) {
  return (
    <>
      <HeroVideo />
      <ProductsList addChart={addChart} setAddChart={setAddChart} chartCount={chartCount} setChartCount={setChartCount} bagIcon={bagIcon} setBagIcon={setBagIcon} updateBagIcon={updateBagIcon}/>
    </>
  );
}

export default HomePage;
