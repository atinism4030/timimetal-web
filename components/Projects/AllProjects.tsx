import { motion } from "motion/react";
import { ArrowLeft, Grid3x3, Filter } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: any;
  date: string;
  location: string;
  category: string;
}

interface AllProjectsProps {
  projects: Project[];
  onBack: () => void;
  onProjectClick: (id: number) => void;
}

export function AllProjects({ projects, onBack, onProjectClick }: AllProjectsProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#F8FAFB] via-white to-white border-b border-[#E8F3FF] overflow-hidden">
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-50%] right-[-50%] h-full">
            <div className="absolute top-0 left-[10%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/8 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[25%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/6 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[40%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/10 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[55%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/7 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[70%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/8 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[85%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/6 to-transparent rotate-[15deg] origin-top" />
          </div>
        </div>

        {/* Top Section Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent" />

        {/* Background accents */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#3BA9FF]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#3BA9FF]/20 hover:border-[#3BA9FF]/50 hover:bg-[#F3F7FF] transition-all duration-300 shadow-sm hover:shadow-md mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 text-[#3BA9FF] group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm text-[#5A6675] group-hover:text-[#3BA9FF] transition-colors duration-300">Back to Home</span>
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6">
              <div className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3BA9FF]/20 to-[#6FB7FF]/20 border-2 border-[#3BA9FF]/40 backdrop-blur-sm shadow-xl">
                <span className="text-base text-[#3BA9FF] tracking-[0.25em] uppercase">Portfolio</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 bg-gradient-to-r from-[#0a0e1a] via-[#1a2333] to-[#0a0e1a] bg-clip-text text-transparent">
                All Projects
              </h1>
              <div className="w-32 h-2 mx-auto bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] rounded-full shadow-[0_0_30px_rgba(59,169,255,0.6)]" />
            </div>
            
            <p className="text-[#5A6675] max-w-3xl mx-auto leading-relaxed text-xl">
              Explore our complete portfolio of precision engineering and metal fabrication projects, delivered with excellence across the nation.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#E8F3FF] to-white border border-[#3BA9FF]/15 shadow-sm text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] bg-clip-text text-transparent">150+</div>
              <div className="text-sm text-[#5A6675]">Completed Projects</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#E8F3FF] to-white border border-[#3BA9FF]/15 shadow-sm text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-[#5A6675]">Client Satisfaction</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#E8F3FF] to-white border border-[#3BA9FF]/15 shadow-sm text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] bg-clip-text text-transparent">25+</div>
              <div className="text-sm text-[#5A6675]">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-50%] right-[-50%] h-full">
            <div className="absolute top-0 left-[10%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/8 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[25%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/6 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[40%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/10 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[55%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/7 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[70%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/8 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[85%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/6 to-transparent rotate-[15deg] origin-top" />
          </div>
        </div>

        {/* Background accents */}
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#6FB7FF]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mb-12 flex-wrap gap-4"
          >
            <div className="flex items-center gap-3">
              <Grid3x3 className="w-5 h-5 text-[#3BA9FF]" />
              <span className="text-[#5A6675]">
                Showing <span className="text-[#3BA9FF]">{projects.length}</span> projects
              </span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-[#3BA9FF]/20 bg-white/50 backdrop-blur-sm">
              <Filter className="w-4 h-4 text-[#3BA9FF]" />
              <span className="text-sm text-[#5A6675]">All Categories</span>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                icon={project.icon}
                date={project.date}
                location={project.location}
                index={index}
                onClick={() => onProjectClick(project.id)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 p-10 rounded-2xl bg-gradient-to-br from-[#F3F7FF] to-white border-2 border-[#3BA9FF]/20 shadow-xl text-center"
          >
            <h3 className="mb-4 text-[#0a0e1a]">Don't See What You're Looking For?</h3>
            <p className="text-[#5A6675] mb-8 max-w-2xl mx-auto leading-relaxed">
              We specialize in custom metal fabrication solutions. Let's discuss your unique project requirements.
            </p>
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] hover:from-[#2E8FE5] hover:to-[#5BA3E5] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
