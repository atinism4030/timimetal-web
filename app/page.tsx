import About from "@/components/AboutHome/About";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsHome from "@/components/Projects/ProjectsHome";
import Services from "@/components/Services/Services";

export default async  function Home() {

  return (
    <div className="flex flex-col bg-white">
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

      <div>
        <ProjectsHome />
      </div>

      <div>
        <GetInTouch />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}
