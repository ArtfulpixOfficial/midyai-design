import BackToTop from "../backToTop";
import CleanupPage from "./index";

export const metadata = {
  title: "MidyAI Design Cleanup",
  description: "MidyAI Design Cleanup",
};

const CleanupLayout = () => {
  return (
    <>
      <CleanupPage />
      <BackToTop />
    </>
  );
};

export default CleanupLayout;
