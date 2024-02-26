import Banner from "./sections/Banner/Banner";
import Equipments from "./sections/Equipments/Equipments";
import Process from "./sections/Process/Process";
import Testimonial from "./sections/Testimonial/Testimonial";
import UniqueSection from "./sections/UniqueSection/UniqueSection";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Testimonial />
      <UniqueSection />
      <Equipments />
    </main>
  );
}
