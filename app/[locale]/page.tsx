import Hero from "@/components/Hero";
import Services from "@/components/Services/Services";
import AboutSection from "@/components/AboutSection";
import ProjectsHome from "@/components/Projects/ProjectsHome";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Partners from "@/components/Partners";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "sq" | "en" | "mk" | "de" }>;
}) {
  const { locale } = await params;

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
        <ProjectsHome locale={locale} />
      </div>

      <div>
        <Partners />
      </div>

      <div>
        <GetInTouch />
      </div>
    </div>
  );
}