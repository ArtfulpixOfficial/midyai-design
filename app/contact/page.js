import BackToTop from "../backToTop";
import ContactPage from "./index";

export const metadata = {
  title: "MidyAI Design Contact",
  description: "MidyAI Design Contact",
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

const ContactLayout = () => {
  return (
    <>
      <ContactPage />
      <BackToTop />
    </>
  );
};

export default ContactLayout;
