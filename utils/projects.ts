import { IProject } from "@/app/projects/page";
import Image from "next/image";
import image1 from '@/public/ProjectTestPic/test1.png'
import image2 from '@/public/ProjectTestPic/test2.png'
import image3 from '@/public/ProjectTestPic/test3.png'

export const projects: IProject[] = [
  {
    id: 1,
    name: "CNC Cutting",
    description: "zjarri i verstest",
    pic: image1.src ,// ✅ JSX element
    adrres: "Tetovo",
    date: "2025-10-30",
  },
  {
    id: 2, name: "LGS ECO HOME", description: "sistemi i integruar",
    pic: image2.src,
    adrres: "Xhepchisht",
    date: "2025-05-25"
  },
  {
    id: 3, name: "nova struktura spar nextex", description: "arkitektura moderne",
    pic: image3.src,
    adrres: "Poroj",
    date: "2025-11-22"
  },
  {
    id: 4,
    name: "sproposjekti spar sme snext sxhejses",
    description: "zjarri i verstest",
    pic: image1.src ,// ✅ JSX element
    adrres: "Tetovo",
    date: "2025-10-30",
  },
  {
    id: 5, name: "projetti alfas nexium beta", description: "sistemi i integruar",
    pic: image2.src,
    adrres: "Xhepchisht",
    date: "2025-05-25"
  },
  {
    id: 6, name: "nova struktura spar nextex", description: "arkitektura moderne",
    pic: image3.src,
    adrres: "Poroj",
    date: "2025-11-22"
  },
  {
    id: 7,
    name: "sproposjekti spar sme snext sxhejses",
    description: "zjarri i verstest",
    pic: image1.src ,// ✅ JSX element
    adrres: "Tetovo",
    date: "2025-10-30",
  },
  {
    id: 8, name: "projetti alfas nexium beta", description: "sistemi i integruar",
    pic: image2.src,
    adrres: "Xhepchisht",
    date: "2025-05-25"
  },
  {
    id: 9, name: "nova struktura spar nextex", description: "arkitektura moderne",
    pic: image3.src,
    adrres: "Poroj",
    date: "2025-11-22"
  },
  {
    id: 10,
    name: "sproposjekti spar sme snext sxhejses",
    description: "zjarri i verstest",
    pic: image1.src ,// ✅ JSX element
    adrres: "Tetovo",
    date: "2025-10-30",
  },
  {
    id: 11, name: "projetti alfas nexium beta", description: "sistemi i integruar",
    pic: image2.src,
    adrres: "Xhepchisht",
    date: "2025-05-25"
  },
  {
    id: 12, name: "nova struktura spar nextex", description: "arkitektura moderne",
    pic: image3.src,
    adrres: "Poroj",
    date: "2025-11-22"
  },

]

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
  