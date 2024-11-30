import BackToTop from "../backToTop";
import SigninPage from "./index";

export const metadata = {
  title: "MidyAI Design Sign In",
  description: "MidyAI Design Sign In",
};

const SigninLayout = () => {
  return (
    <>
      <SigninPage />
      <BackToTop />
    </>
  );
};

export default SigninLayout;
