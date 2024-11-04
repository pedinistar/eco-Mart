import ImageSlider from "../components/ImageSlider";
import DisplayProducts from "../components/DisplayProducts";

const HomePage = () => {
  return (
    <section className="relative w-full">
      <ImageSlider />
      <div className="px-72 py-10">
        <DisplayProducts />
      </div>
    </section>
  );
};

export default HomePage;
