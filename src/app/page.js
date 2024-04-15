import Footer from "@/Shared/Footer/Footer";
import Banner from "./sections/Banner/Banner";
import Equipments from "./sections/Equipments/Equipments";
import Testimonial from "./sections/Testimonial/Testimonial";
import UniqueSection from "./sections/UniqueSection/UniqueSection";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Testimonial />
      <UniqueSection />
      <Equipments />
      <Footer />
    </main>
  );
}
