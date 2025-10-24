import About from "@/components/AboutHome/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[20%]">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      
      <div>
        <Services />
      </div>

      <div>
        <About />
      </div>

    </div>
  );
}
