const projects = [
  {
    id: 1,
    title: "SUBSCRIPTION",
    description:
      "It allows users to create tasks, manage groups, assign tasks, and track progress. It also includes a notification system to keep users updated on task status.",
    image: "project/subscription.png",
    date: "Aug 2024",
    website: "https://subscription-app-client.vercel.app/",
  },
  {
    id: 2,
    title: "SHAREME WEB",
    description:
      "Fully Responsive, Masonry layout-based web app with Sanity as a content manager and Google based login system where one can contribute or can explore various creations.",
    image: "project/shareme.png",
    date: "Mar 2024",
    website: "https://shareme-dun-alpha.vercel.app/",
  },
  {
    id: 3,
    title: "TRAVEL ADVISOR",
    description:
      "Google Map Platform for fetching the nearby Restaurants, Hotels and Attractions using Rapid API. Helps you in finding the best thing around the globe.",
    image: "project/travel-advisor.png",
    date: "Jan 2024",
    website: "https://aj-travel-advisor.netlify.app/",
  },
  {
    id: 4,
    title: "CRYPTOVERSE",
    description:
      "A cyrpto hub where one can explore the various cryptocurrencies like current trends, news, current market value etc.",
    image: "project/cryptoverse.png",
    date: "Aug 2023",
    website: "https://aj-cryptoverse.netlify.app/",
  },
  {
    id: 5,
    title: "AUDIOMART",
    description:
      "Electronics product-based ecommerce website with Stripe Payment Gateway Integration. Best speakers, headphones, ear pods etc avalaible here.",
    image: "project/audiomart.png",
    date: "Feb 2023",
    website:
      "https://ecommerce-react-sanity-rk2f-2j1aur57p-anujistwal.vercel.app/",
  },
];

const resume_download_link =
  "https://drive.google.com/uc?export=download&id=1XeMUxrg1gzYQkt9xZWv-pl4ZbHlaG3Zw";

const phoneNumber = "918968059548";
const message = encodeURIComponent("Hello Anuj!");
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

export { projects, resume_download_link, whatsappLink };
