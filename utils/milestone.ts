const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const milestoneTexts = {
  sq: [
    {
      title: "Themelimi i Kompanisë",
      description:
        "Timimetal u themelua në vitin 2003 nga z. Sadri Aliu, duke e kthyer përvojën dhe vizionin e tij profesional në realitet. Që nga fillimi, kompania u orientua drejt ndërtimit të konstruksioneve të çelikut dhe zhvillimit të zgjidhjeve moderne industriale.",
    },
    {
      title: "Objekti i Ri",
      description:
        "Kalimi në objektin tonë të ri modern përfaqësoi një fazë të rëndësishme në evolucionin e Timimetal. Me zgjerimin e hapësirave prodhuese, implementimin e teknologjive bashkëkohore dhe optimizimin e proceseve operative, kompania rriti kapacitetin, efikasitetin dhe aftësinë për të realizuar projekte industriale me standarde më të larta.",
    },
    {
      title: "Revolucion në Ndërtimin me LGS",
      description:
        "Implementimi i sistemeve moderne LGS solli një qasje të re në ndërtim, duke kombinuar shpejtësinë e realizimit, efikasitetin energjetik dhe qëndrueshmërinë strukturore. Kjo teknologji i mundësoi Timimetal të ofrojë zgjidhje më inovative dhe fleksibile për projekte rezidenciale dhe industriale.",
    },
    {
      title: "500+ Projekte të Realizuara",
      description:
        "Arritja e mbi 500 projekteve të përfunduara me sukses pasqyron përkushtimin, besueshmërinë dhe ekspertizën e Timimetal në realizimin e zgjidhjeve moderne industriale dhe konstruksioneve metalike me standarde të larta profesionale.",
    },
  ],
  en: [
    {
      title: "Company Founded",
      description:
        "Timimetal was founded in 2003 by Mr. Sadri Aliu, turning his professional experience and vision into reality. From the beginning, the company focused on steel construction and the development of modern industrial solutions.",
    },
    {
      title: "New Facility",
      description:
        "Moving into our new modern facility marked an important phase in the evolution of Timimetal. With expanded production space, modern technologies, and optimized operational processes, the company increased its capacity, efficiency, and ability to deliver industrial projects with higher standards.",
    },
    {
      title: "Revolution in LGS Construction",
      description:
        "The implementation of modern LGS systems introduced a new approach to construction, combining fast execution, energy efficiency, and structural durability. This technology enabled Timimetal to offer more innovative and flexible solutions for residential and industrial projects.",
    },
    {
      title: "500+ Completed Projects",
      description:
        "Reaching more than 500 successfully completed projects reflects Timimetal’s dedication, reliability, and expertise in delivering modern industrial solutions and metal constructions with high professional standards.",
    },
  ],
  mk: [
    {
      title: "Основање на компанијата",
      description:
        "Timimetal е основана во 2003 година од г. Sadri Aliu, претворајќи го неговото професионално искуство и визија во реалност. Од самиот почеток, компанијата се насочи кон челични конструкции и развој на модерни индустриски решенија.",
    },
    {
      title: "Нов објект",
      description:
        "Преминувањето во нашиот нов модерен објект претставуваше важна фаза во развојот на Timimetal. Со проширување на производните простори, имплементација на современи технологии и оптимизација на оперативните процеси, компанијата го зголеми капацитетот, ефикасноста и способноста за реализација на индустриски проекти со повисоки стандарди.",
    },
    {
      title: "Револуција во LGS градбата",
      description:
        "Имплементацијата на модерни LGS системи донесе нов пристап во градбата, комбинирајќи брза реализација, енергетска ефикасност и структурна издржливост. Оваа технологија му овозможи на Timimetal да понуди поиновативни и флексибилни решенија за станбени и индустриски проекти.",
    },
    {
      title: "500+ реализирани проекти",
      description:
        "Постигнувањето на повеќе од 500 успешно завршени проекти ја одразува посветеноста, доверливоста и експертизата на Timimetal во реализацијата на модерни индустриски решенија и метални конструкции со високи професионални стандарди.",
    },
  ],
  de: [
    {
      title: "Gründung des Unternehmens",
      description:
        "Timimetal wurde im Jahr 2003 von Herrn Sadri Aliu gegründet, der seine berufliche Erfahrung und Vision in die Realität umsetzte. Von Anfang an konzentrierte sich das Unternehmen auf Stahlkonstruktionen und die Entwicklung moderner industrieller Lösungen.",
    },
    {
      title: "Neue Produktionsstätte",
      description:
        "Der Umzug in unsere neue moderne Produktionsstätte markierte eine wichtige Phase in der Entwicklung von Timimetal. Durch die Erweiterung der Produktionsflächen, den Einsatz moderner Technologien und die Optimierung der Betriebsprozesse steigerte das Unternehmen seine Kapazität, Effizienz und Fähigkeit, Industrieprojekte mit höheren Standards umzusetzen.",
    },
    {
      title: "Revolution im LGS-Bau",
      description:
        "Die Einführung moderner LGS-Systeme brachte einen neuen Ansatz im Bauwesen, der schnelle Umsetzung, Energieeffizienz und strukturelle Beständigkeit verbindet. Diese Technologie ermöglichte es Timimetal, innovativere und flexiblere Lösungen für Wohn- und Industrieprojekte anzubieten.",
    },
    {
      title: "500+ abgeschlossene Projekte",
      description:
        "Das Erreichen von über 500 erfolgreich abgeschlossenen Projekten spiegelt das Engagement, die Zuverlässigkeit und die Expertise von Timimetal bei der Umsetzung moderner industrieller Lösungen und Metallkonstruktionen mit hohen professionellen Standards wider.",
    },
  ],
};

const baseMilestones = [
  { id: 1, year: "2003" },
  { id: 2, year: "2019" },
  { id: 3, year: "2025" },
  { id: 4, year: "2026" },
];

export const getMilestones = (locale: Locale = "sq") => {
  const texts = milestoneTexts[locale] || milestoneTexts.sq;

  return baseMilestones.map((milestone, index) => ({
    ...milestone,
    title: texts[index].title,
    description: texts[index].description,
  }));
};

export const milestones = getMilestones("sq");