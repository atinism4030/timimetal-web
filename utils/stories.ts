import { BiTargetLock } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";
import About1 from "@/public/AboutPhotos/About1.jpg"
import About2 from "@/public/AboutPhotos/About2.jpg"
import About3 from "@/public/AboutPhotos/About3.jpg"


export const stories = [
  {
    id: 1,
    title: "Our Beginning",
    description: "E themeluar në vitin 1999, Timimetal filloi si një punëtori e vogël e pasionuar për ndërtimin me çelik. Me një ekip të përkushtuar inxhinierësh dhe vizionin për të sjellë standarde evropiane në ndërtimin industrial, ne u rritëm shpejt në një nga kompanitë më të besueshme në rajon.",
    icon: GiSparkles,
    image: About1,
    reverse: false,
  },
  {
    id: 2,
    title: "Our Mission Today",
    description: "Sot, ne jemi liderë në ndërtimin e shtëpive me teknologji LGS (Light Gauge Steel), struktura industriale dhe objekte komerciale të mëdha. Misioni ynë është i qartë: të ofrojmë zgjidhje të qëndrueshme, efikase dhe të sigurta që tejkalojnë pritjet e klientëve tanë.",
    icon: BiTargetLock,
    image: About2,
    reverse: true,
  },
  {
    id: 3,
    title: "Innovation in Steel Construction",
    description: "Ne investojmë vazhdimisht në teknologji të fundit dhe trajnime profesionale për ekipin tonë. Përmes inovacionit, ne kemi futur sisteme moderne BIM, teknika të automatizuara të prodhimit dhe metodologji të reja që reduktojnë kohën e ndërtimit dhe rrisin cilësinë në çdo projekt.",
    icon: FiZap,
    image: About3,
    reverse: false,
  },
];