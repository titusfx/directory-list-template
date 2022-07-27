/**
 * Category List
 */
 const categoryData = [
  {
      icon: "accounting",
      title: "Accounting",
  },
  {
    icon: "pie-chart",
    title: "Marketing & PR",
  },
  {
    icon: "meds",
    title: "Medicine",
  },
  {
    icon: "plant",
    title: "Agriculture",
  },
  {
    icon: "computer",
    title: "IT",
  },
  {
    icon: "security",
    title: "Security",
  },
];

/**
 * Steps List
 */
 const stepsData = [
  {
    id: "01",
    title: "Create an Account",
    content: "In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras arcu sed felis.",
  },
  {
    id: "02",
    title: "Create a Job Ad",
    content: "Convallis suspendisse libero integer duis luctus laoreet pellentesque. Aenean eget tristique.",
  },
  {
    id: "03",
    title: "Select a Pricing Plan",
    content: "Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui odio ege volutpat.",
  },
  {
    id: "04",
    title: "Post Your Job",
    content: "Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor adipiscing integer duis.",
  },
];

/**
 * Promotion Data List
 */
 const promotionData = [
  {
    image: "assets/img/pricing/icon-1.svg",
    title: "Easy Start",
    price: "5",
    view: "3",
    days: "3",
    movingSymbol :"fi-x fs-xs",
    featuredSymbol :"fi-x fs-xs",
    activeClass: "shadow-sm"
  },
  {
    image: "assets/img/pricing/icon-2.svg",
    title: "Fast Sale",
    price: "15",
    view: "10",
    days: "5",
    movingSymbol :"fi-check text-primary fs-sm",
    featuredSymbol :"fi-x fs-xs",
    activeClass: "shadow"
  },
  {
    image: "assets/img/pricing/icon-3.svg",
    title: "Turbo Boost",
    price: "25",
    view: "20",
    days: "10",
    movingSymbol :"fi-check text-primary fs-sm",
    featuredSymbol :"fi-check text-primary fs-sm",
    activeClass: "shadow-sm"
  },
];

/**
 * Job City List
 */
 const jobCityData = [
  {
    image: "assets/img/job-board/city/new-york.svg",
    name: "New York",
    jobs: "328",
  },
  {
    image: "assets/img/job-board/city/paris.svg",
    name: "Paris",
    jobs: "152",
  },
  {
    image: "assets/img/job-board/city/london.svg",
    name: "London",
    jobs: "74",
  },
  {
    image: "assets/img/job-board/city/bangkok.svg",
    name: "Bangkok",
    jobs: "92",
  },
  {
    image: "assets/img/job-board/city/barcelona.svg",
    name: "Barcelona",
    jobs: "204",
  },
  {
    image: "assets/img/job-board/city/dubai.svg",
    name: "Dubai",
    jobs: "196",
  },
  {
    image: "assets/img/job-board/city/kuala-lumpur.svg",
    name: "Kuala Lumpur",
    jobs: "143",
  },
];

/**
 * Reviews List
 */
 const reviewsData = [
  {
    content: "Eu massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In dui, viverra et ac. Id justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet nec quis vel. Donec ut quisque in lorem sapien luctus pellentesque.",
    image: "assets/img/job-board/company/zalo-lg.png",
    name: "Zalo Tech Company",
    position: "Floyd Miles, Head of HR Department",
  },
  {
    content: "Diam dictumst scelerisque vel, nunc etiam tincidunt senectus ullamcorper. Scel pulvinarnettes luctus pellentesque ultrices congue blandit. Nec, blandit nisi odio donec sagittis dui ornare sodales ultricies. Rhoncus mattis lacus consequat dolor lectus dui cursus orci. Volutpat tortor quam odio sed arcu.",
    image: "assets/img/job-board/company/kibana-lg.png",
    name: "Elastic Kibana",
    position: "Guy Hawkins, Senior HR",
  }
];

export { categoryData, stepsData, promotionData, jobCityData, reviewsData };
