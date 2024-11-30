import BackToTop from "../backToTop";
import ProfileDetailsPage from "./index";

export const metadata = {
  title: "MidyAI Design Profile Details",
  description: "MidyAI Design Profile Details",
};

const ProfileDetailsLayout = () => {
  return (
    <>
      <ProfileDetailsPage />
      <BackToTop />
    </>
  );
};

export default ProfileDetailsLayout;
