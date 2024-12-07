import HomePage from "./index";

export const metadata = {
  title: "MidyAI Design Home",
  description: "MidyAI Design Home",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo/icon-light.ico",
        href: "/images/logo/icon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo/icon-dark.ico",
        href: "/images/logo/icon-dark.ico",
      },
    ],
  },
};

const HomePageLayout = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default HomePageLayout;
