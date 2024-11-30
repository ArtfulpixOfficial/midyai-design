import BackToTop from "../backToTop";
import SignupPage from "./index";

export const metadata = {
  title: "MidyAI Design Sign Up",
  description: "MidyAI Design Sign Up",
};

const SignupLayout = () => {
  return (
    <>
      <SignupPage />
      <BackToTop />
    </>
  );
};

export default SignupLayout;
