import { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ExploreMenu from "../components/ExploreMenu";
import EventsDisplay from "../components/EventsDisplay";
import Footer from "../components/Footer";

export default function HomePage() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 20px" }}>
        <div className="m-auto mb-10 mt-10 flex max-w-[80%] flex-col gap-10">
          <ExploreMenu category={category} setCategory={setCategory} />
          <EventsDisplay category={category} />
          <EventsDisplay category={category} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
