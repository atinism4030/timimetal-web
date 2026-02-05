import Hero from "@/components/Hero";
import Services from "@/components/Services/Services";
import AboutSection from "@/components/AboutSection";
import ProjectsHome from "@/components/Projects/ProjectsHome";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

export default async function Home() {

  return (
    <div className="flex flex-col bg-white">
      <div>
        <Hero />
      </div>

      <div id="services">
        <Services />
      </div>

      <div>
        <AboutSection />
      </div>

      <div>
        <ProjectsHome />
      </div>

      <div>
        <GetInTouch />
      </div>

    </div>
  );
}
