import Image from "next/image";
import image1 from '@/public/ProjectTestPic/test1.png'
import image2 from '@/public/ProjectTestPic/test2.png'
import image3 from '@/public/ProjectTestPic/test3.png'
import { IProject } from "./types";
// import { Building2, Construction, Droplet, Factory, Home// icon, Palette, Scissors, Warehouse, Workflow } from "lucide-react";
// import Home from "@/app/page";

export const projects: IProject[] = [
    {
      id: 0,
      title: "Industrial Complex Fabrication",
      description: "Complete structural steel fabrication for a 50,000 sq ft manufacturing facility, featuring precision-welded frames and advanced LGS systems.",
      image: "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NjMxNDE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Factory,
      date: "September 2024",
      location: "Detroit, Michigan",
      client: "Advanced Manufacturing Corp",
      duration: "8 months",
      category: "Industrial Fabrication",
      images: [
        "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NjMxNDE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1755924648847-f733ed2818c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdvcmtzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMjQ2NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1727413433452-b5c4b6367416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdlbGRpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2MzI0NjcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjMyMzU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1695651832926-66591245a88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzMjQ2NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "This landmark project involved the complete structural steel fabrication for a state-of-the-art 50,000 square foot manufacturing facility in Detroit. Our team designed, fabricated, and installed over 500 tons of precision-engineered steel components, including custom trusses, support beams, and an advanced lightweight gauge steel (LGS) framing system. The project required meticulous planning and execution to meet stringent automotive industry standards while maintaining an aggressive construction timeline.",
      challenges: [
        "Complex architectural requirements demanding custom-engineered solutions for non-standard load distributions",
        "Tight installation timeline requiring coordination with multiple trades and just-in-time delivery schedules",
        "High-precision tolerances (±1/16\") required for critical structural connections supporting automated manufacturing equipment",
        "Weather-dependent installation phases during Michigan winter conditions"
      ],
      solutions: [
        "Implemented advanced 3D modeling and BIM coordination to identify and resolve clashes before fabrication, reducing field modifications by 85%",
        "Utilized prefabrication techniques and modular construction methods to accelerate on-site assembly",
        "Deployed laser-guided positioning systems and certified welding procedures to ensure precision alignment",
        "Established a heated on-site assembly area and flexible scheduling to maintain progress during adverse weather"
      ],
      results: [
        "Project completed 2 weeks ahead of schedule, allowing client to begin equipment installation early",
        "Achieved 100% first-time inspection pass rate on all structural welds and connections",
        "Reduced overall construction costs by 15% through efficient prefabrication and minimized field labor",
        "Client reported zero structural issues during equipment commissioning and facility startup"
      ]
    },
    {
      id: 1,
      title: "Precision CNC Components",
      description: "High-tolerance CNC machining project delivering 5000+ custom metal components for aerospace applications with ±0.001\" accuracy.",
      image: "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzE5NTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Scissors,
      date: "July 2024",
      location: "Seattle, Washington",
      client: "Aerospace Dynamics LLC",
      duration: "6 months",
      category: "CNC Machining",
      images: [
        "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzE5NTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRvb2xzfGVufDF8fHx8MTc2MzI0NjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjMyMzU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1755924648847-f733ed2818c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdvcmtzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMjQ2NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1727413433452-b5c4b6367416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdlbGRpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2MzI0NjcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "An aerospace-grade precision machining project that pushed the boundaries of our CNC capabilities. We produced over 5,000 custom metal components made from aerospace-certified aluminum alloys, titanium, and stainless steel. Each component required extreme dimensional accuracy of ±0.001 inches and underwent rigorous quality control including coordinate measuring machine (CMM) inspection, surface finish analysis, and material traceability documentation.",
      challenges: [
        "Ultra-tight tolerances requiring temperature-controlled machining environment and thermal compensation",
        "Complex geometries with multiple angles, pockets, and thin-wall features prone to distortion",
        "Material traceability requirements demanding full chain-of-custody documentation for aerospace certification",
        "High-volume production while maintaining zero-defect quality standards"
      ],
      solutions: [
        "Invested in 5-axis CNC machining centers with thermal stabilization and real-time tool monitoring",
        "Developed custom fixturing and work-holding solutions to minimize part deflection during machining",
        "Implemented comprehensive quality management system with batch tracking and automated CMM inspection",
        "Established parallel production lines with continuous process monitoring to maintain throughput without compromising quality"
      ],
      results: [
        "Achieved 99.8% first-pass acceptance rate across all components, exceeding aerospace industry standards",
        "Delivered all 5,000+ components on schedule with complete material traceability documentation",
        "Client reported zero rejections during assembly and function testing of final aerospace systems",
        "Secured long-term contract for ongoing component production based on quality and reliability"
      ]
    },
    {
      id: 2,
      title: "Commercial LGS Structure",
      description: "Design and installation of lightweight gauge steel framing system for a modern 12-story commercial building, reducing construction time by 40%.",
      image: "https://images.unsplash.com/photo-1705304711052-93df5c1e18d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdGVlbHxlbnwxfHx8fDE3NjMxODg5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Building2,
      date: "October 2024",
      location: "Austin, Texas",
      client: "Urban Development Partners",
      duration: "10 months",
      category: "LGS Structures",
      images: [
        "https://images.unsplash.com/photo-1705304711052-93df5c1e18d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdGVlbHxlbnwxfHx8fDE3NjMxODg5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1695651832926-66591245a88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzMjQ2NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NjMxNDE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzE5NTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjMyMzU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "A groundbreaking commercial construction project that showcased the advantages of modern lightweight gauge steel (LGS) framing for mid-rise buildings. This 12-story mixed-use development in downtown Austin featured our engineered LGS framing system for all interior and exterior walls, floor assemblies, and roof structure. The system provided superior dimensional stability, fire resistance, and acoustic performance while significantly reducing construction time and overall building weight compared to traditional methods.",
      challenges: [
        "Engineering LGS system to meet Texas wind load and seismic requirements for 12-story height",
        "Coordinating panelized framing delivery and installation with compressed construction schedule",
        "Training local trades on LGS installation techniques and quality control procedures",
        "Managing integration with concrete core, MEP systems, and architectural features"
      ],
      solutions: [
        "Utilized advanced structural analysis software to optimize LGS member sizing and connection details",
        "Implemented off-site panelization with just-in-time delivery to minimize site storage and accelerate installation",
        "Conducted comprehensive on-site training programs and provided dedicated technical support throughout construction",
        "Coordinated weekly with all trades using BIM models to ensure seamless integration of systems"
      ],
      results: [
        "Reduced framing installation time by 40% compared to traditional stick-built methods",
        "Achieved 25% reduction in overall building weight, allowing for optimized foundation design and cost savings",
        "Exceeded building code requirements for fire resistance and acoustic performance",
        "Project recognized with regional construction excellence award for innovation and efficiency"
      ]
    },
    {
      id: 3,
      title: "Highway Bridge Structural Steel",
      description: "Fabrication and installation of 850 tons of structural steel for a major highway bridge expansion, meeting strict DOT specifications.",
      image: "https://images.unsplash.com/photo-1696759106449-70e7d2ea67d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJyaWRnZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM0MTcwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Construction,
      date: "May 2024",
      location: "Phoenix, Arizona",
      client: "State Department of Transportation",
      duration: "14 months",
      category: "Infrastructure",
      images: [
        "https://images.unsplash.com/photo-1696759106449-70e7d2ea67d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJyaWRnZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM0MTcwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1695651832926-66591245a88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzMjQ2NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1727413433452-b5c4b6367416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdlbGRpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2MzI0NjcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzE5NTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NjMxNDE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "A critical infrastructure project involving the fabrication and erection of 850 tons of structural steel for a major highway bridge expansion over the Salt River. This project required strict adherence to Department of Transportation specifications, AASHTO standards, and rigorous quality control protocols. Our team coordinated closely with the general contractor to ensure minimal disruption to traffic flow while maintaining an aggressive construction schedule.",
      challenges: [
        "Meeting stringent DOT welding certifications and material specifications for bridge-critical components",
        "Coordinating large-scale steel deliveries and crane operations with minimal highway lane closures",
        "Managing complex geometry of curved bridge segments requiring advanced fabrication techniques",
        "Extreme desert temperatures affecting welding procedures and material handling"
      ],
      solutions: [
        "Established dedicated bridge fabrication facility with DOT-certified welders and comprehensive quality systems",
        "Implemented detailed logistics planning with night-time deliveries and pre-positioned materials",
        "Utilized 3D laser scanning and advanced CAD modeling to ensure precise fit-up of curved members",
        "Developed temperature-specific welding procedures and climate-controlled storage for critical materials"
      ],
      results: [
        "Achieved 100% acceptance rate on all NDT inspections including ultrasonic and magnetic particle testing",
        "Completed installation 3 weeks ahead of schedule, reducing total highway closure time",
        "Zero safety incidents throughout 14-month fabrication and installation period",
        "Project became reference case for future state bridge projects based on quality and efficiency"
      ]
    },
    {
      id: 4,
      title: "Custom Architectural Staircase",
      description: "Design and fabrication of a stunning three-story helical staircase featuring laser-cut steel panels and glass railings for luxury corporate headquarters.",
      image: "https://images.unsplash.com/photo-1609862776077-ef7dbd3fb464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtZXRhbCUyMHN0YWlyY2FzZXxlbnwxfHx8fDE3NjM0MTcwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Workflow,
      date: "August 2024",
      location: "San Francisco, California",
      client: "Premier Architecture Group",
      duration: "5 months",
      category: "Architectural Metalwork",
      images: [
        "https://images.unsplash.com/photo-1609862776077-ef7dbd3fb464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtZXRhbCUyMHN0YWlyY2FzZXxlbnwxfHx8fDE3NjM0MTcwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1684355277143-69c991fa052a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGFydCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjM0MTcwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRvb2xzfGVufDF8fHx8MTc2MzI0NjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1705304711052-93df5c1e18d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdGVlbHxlbnwxfHx8fDE3NjMxODg5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjMyMzU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "An architectural masterpiece combining structural engineering with artistic design. This three-story helical staircase serves as the centerpiece of a Sil// icon Valley tech company's new corporate headquarters. The design features a self-supporting steel structure with intricate laser-cut decorative panels creating a dynamic interplay of light and shadow. Tempered glass railings and LED accent lighting complete this stunning focal point.",
      challenges: [
        "Engineering helical geometry to meet building codes while achieving architect's vision for minimal visual mass",
        "Precise laser cutting and forming of complex decorative patterns in stainless steel panels",
        "Coordinating installation in occupied building with strict safety and noise restrictions",
        "Achieving mirror-finish stainless steel surfaces without distortion or visible welding marks"
      ],
      solutions: [
        "Developed custom parametric 3D models to optimize structural performance and aesthetic proportions",
        "Invested in fiber laser cutting technology capable of intricate patterns with clean edges requiring minimal finishing",
        "Created modular assembly strategy allowing installation during off-hours with minimal disruption",
        "Utilized TIG welding techniques with specialized grinding and electropolishing for invisible seams"
      ],
      results: [
        "Staircase became signature feature in architectural magazines and company promotional materials",
        "Achieved structural performance exceeding code requirements while maintaining elegant 2-inch profile stringers",
        "Installation completed within 2-week window with zero complaints from building occupants",
        "Design won regional architectural metalwork excellence award"
      ]
    },
    {
      id: 5,
      title: "Industrial Piping & Ductwork System",
      description: "Complete fabrication and installation of stainless steel process piping and ventilation ductwork for pharmaceutical manufacturing facility.",
      image: "https://images.unsplash.com/photo-1748256086767-8974ee677f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwaW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2MzQxNzAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Droplet,
      date: "June 2024",
      location: "Boston, Massachusetts",
      client: "BioPharm Solutions Inc",
      duration: "7 months",
      category: "Process Piping",
      images: [
        "https://images.unsplash.com/photo-1748256086767-8974ee677f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwaW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2MzQxNzAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjMyMzU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1755924648847-f733ed2818c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdvcmtzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMjQ2NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1727413433452-b5c4b6367416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdlbGRpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2MzI0NjcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NjMxNDE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "A critical infrastructure project for a new pharmaceutical manufacturing facility requiring the highest levels of cleanliness and precision. We fabricated and installed over 12,000 linear feet of 316L stainless steel process piping, along with specialized ventilation ductwork for cleanroom environments. All work met FDA cGMP requirements and ASME BPE standards for pharmaceutical applications.",
      challenges: [
        "Meeting pharmaceutical-grade surface finish requirements (Ra < 0.5 μm) for all product-contact piping",
        "Orbital TIG welding of stainless steel with full X-ray inspection and documentation for critical systems",
        "Maintaining cleanroom protocols during installation in partially operational facility",
        "Coordinating complex routing with other MEP systems in congested ceiling spaces"
      ],
      solutions: [
        "Established dedicated cleanroom fabrication area with controlled environment and trained personnel",
        "Invested in automated orbital welding equipment with data logging for full weld traceability",
        "Developed detailed installation procedures including HEPA filtration and continuous air quality monitoring",
        "Created comprehensive 3D BIM coordination model with weekly clash detection reviews"
      ],
      results: [
        "Achieved 100% first-pass acceptance on all weld X-rays and pressure testing",
        "Completed installation with zero contamination incidents in active cleanroom areas",
        "System passed FDA pre-approval inspection with zero findings related to piping installation",
        "Client reported 15% improvement in production uptime due to superior system reliability"
      ]
    },
    {
      id: 6,
      title: "Custom Metal Art Installation",
      description: "Creation of large-scale decorative metal sculpture for public plaza, featuring kinetic elements and integrated LED lighting.",
      image: "https://images.unsplash.com/photo-1684355277143-69c991fa052a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGFydCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjM0MTcwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Palette,
      date: "April 2024",
      location: "Denver, Colorado",
      client: "City Arts Commission",
      duration: "4 months",
      category: "Artistic Metalwork",
      images: [
        "https://images.unsplash.com/photo-1684355277143-69c991fa052a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGFydCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjM0MTcwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1609862776077-ef7dbd3fb464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtZXRhbCUyMHN0YWlyY2FzZXxlbnwxfHx8fDE3NjM0MTcwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMHRvb2xzfGVufDF8fHx8MTc2MzI0NjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1705304711052-93df5c1e18d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdGVlbHxlbnwxfHx8fDE3NjMxODg5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1695651832926-66591245a88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzMjQ2NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "A stunning public art installation combining sculptural design with functional kinetic elements. This 25-foot tall sculpture features flowing forms created from weathering steel that naturally develops a protective rust patina. Kinetic elements rotate with wind movement, while integrated LED lighting creates dramatic nighttime displays. The piece represents the intersection of industrial craftsmanship and artistic expression.",
      challenges: [
        "Engineering structure to withstand 100 mph wind loads while allowing controlled kinetic movement",
        "Creating smooth, flowing curves in heavy plate steel without visible welding seams",
        "Integrating electrical systems for LED lighting while maintaining weatherproof integrity",
        "Achieving artist's vision while meeting public safety and accessibility requirements"
      ],
      solutions: [
        "Collaborated with structural engineer to design balanced kinetic system with sealed bearing assemblies",
        "Utilized plasma cutting, CNC forming, and extensive hand-finishing to create seamless flowing surfaces",
        "Designed concealed conduit routing with marine-grade LED fixtures and weatherproof junction boxes",
        "Conducted wind tunnel testing and public safety review to validate design before fabrication"
      ],
      results: [
        "Sculpture became // iconic landmark featured in city tourism materials and public events",
        "Kinetic elements performed flawlessly through first winter including multiple severe weather events",
        "LED lighting system reduced energy consumption by 60% compared to conventional outdoor lighting",
        "Project received national recognition from Public Art Network and Industrial Designers Society"
      ]
    },
    {
      id: 7,
      title: "Distribution Center Steel Structure",
      description: "Rapid construction of 200,000 sq ft warehouse facility using pre-engineered metal building system with custom modifications.",
      image: "https://images.unsplash.com/photo-1669003750682-93cf2c65b9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdGVlbCUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NjM0MTcwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Warehouse,
      date: "March 2024",
      location: "Atlanta, Georgia",
      client: "National Logistics Corp",
      duration: "9 months",
      category: "Commercial Buildings",
      images: [
        "https://images.unsplash.com/photo-1669003750682-93cf2c65b9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdGVlbCUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NjM0MTcwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NjMxNDE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzE5NTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1695651832926-66591245a88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzMjQ2NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjMyMzU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "A fast-track warehouse project utilizing pre-engineered metal building technology with custom modifications to meet client's specific operational requirements. This 200,000 square foot distribution center features clear-span construction with 32-foot eave heights, accommodating modern high-bay racking systems. Custom modifications included reinforced areas for material handling equipment, enhanced insulation packages, and integrated dock leveler systems.",
      challenges: [
        "Accelerated 9-month schedule from design to occupancy for critical logistics expansion",
        "Soft soil conditions requiring specialized foundation design and coordination",
        "Integration of automated material handling systems with structural support requirements",
        "Managing just-in-time delivery of components while maintaining construction momentum"
      ],
      solutions: [
        "Partnered with pre-engineered building manufacturer to optimize design and fabrication timeline",
        "Coordinated geotechnical analysis early to implement appropriate foundation solutions",
        "Embedded reinforced support points in building design for future automation equipment",
        "Established sequenced delivery schedule with on-site staging areas to minimize delays"
      ],
      results: [
        "Building envelope completed in 6 months, allowing early start of interior fit-out work",
        "Clear-span design provided maximum flexibility for client's evolving racking configurations",
        "Energy-efficient metal roofing and wall systems reduced operational HVAC costs by 30%",
        "Facility operational 2 weeks ahead of schedule, supporting client's peak season requirements"
      ]
    },
    {
      id: 8,
      title: "Premium Metal Roofing System",
      description: "Installation of standing seam metal roofing and architectural wall panels for high-end residential development.",
      image: "https://images.unsplash.com/photo-1720188874925-5cdf654f734f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHJvb2ZpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYzNDE3MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      // icon: Home// icon,
      date: "November 2024",
      location: "Portland, Oregon",
      client: "Luxury Homes Development",
      duration: "3 months",
      category: "Architectural Panels",
      images: [
        "https://images.unsplash.com/photo-1720188874925-5cdf654f734f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHJvb2ZpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYzNDE3MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1705304711052-93df5c1e18d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdGVlbHxlbnwxfHx8fDE3NjMxODg5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1609862776077-ef7dbd3fb464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtZXRhbCUyMHN0YWlyY2FzZXxlbnwxfHx8fDE3NjM0MTcwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1696759106449-70e7d2ea67d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJyaWRnZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM0MTcwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzE5NTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      fullDescription: "A high-end residential roofing project showcasing the aesthetic and performance benefits of premium metal roofing systems. We installed custom-fabricated standing seam roof panels and coordinating wall panels on 12 luxury homes. The zinc-coated Galvalume® panels feature concealed fasteners, thermal breaks, and integrated snow retention systems. Each installation was custom-fitted to complex roof geometries including multiple valleys, dormers, and architectural features.",
      challenges: [
        "Accommodating complex roof geometries with multiple pitch changes and architectural details",
        "Matching exact color specifications across multiple panel runs for visual consistency",
        "Installation during Pacific Northwest rainy season requiring weather-responsive scheduling",
        "Meeting stringent aesthetic standards of luxury homebuyers and architectural review board"
      ],
      solutions: [
        "Created detailed field measurements and CAD drawings for each home to ensure precise panel fabrication",
        "Implemented color-matching protocols with digital spectrophotometry and batch consistency checks",
        "Developed weather monitoring system and flexible crew scheduling to maximize productivity",
        "Established quality control checkpoints with architect and homeowner walkthroughs at critical stages"
      ],
      results: [
        "Achieved seamless appearance with zero visible fasteners or panel misalignments",
        "All 12 homes passed final inspection with commendations for craftsmanship quality",
        "Roofing systems carry 50-year warranty with expected lifespan exceeding 75 years",
        "Developer reported metal roofing became key selling feature commanding premium pricing"
      ]
    }
  ];


  export const fetchProjecst = async (numberOfProjects: number) => {
    try {
      console.log({projects, numberOfProjects});
      
        return projects.slice(0, numberOfProjects);
    } catch (error) {
        console.log(error);
    }
  }


  export const getProjectById = async (id: number) => {
    try {
      return projects.filter((project) => project.id === id)[0];      
    } catch (error) {
      console.log(error);
    }
  }
  