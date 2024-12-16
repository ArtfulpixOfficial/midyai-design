import Image from "next/image";
import Link from "next/link";

import avatar from "../../public/images/team/team-01sm.jpg";
import UserMenuItems from "./HeaderProps/UserMenuItem";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { signOutUser } from "@/utilities/supabaseAuth";
const UserMenu = () => {
  const { isAuthenticated, userData, userDetails } = useAuthContext();
  const router = useRouter();
  const onSignOut = async () => {
    console.log("hello from logout");
    await signOutUser();
  };
  console.log(userDetails);
  return (
    <>
      <div className="inner">
        {userDetails.user_metadata.displayName && (
          <div className="rbt-admin-profile">
            <div className="admin-thumbnail">
              <Image src={avatar} width={31} height={31} alt="User Images" />
            </div>
            <div className="admin-info">
              <span className="name">
                {(userData && userData.displayName) ||
                  userDetails.user_metadata.displayName}
              </span>
              <Link
                className="rbt-btn-link color-primary"
                href="/profile-details"
              >
                View Profile
              </Link>
            </div>
          </div>
        )}
        <UserMenuItems parentClass="user-list-wrapper user-nav" />
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper user-nav">
          {/* <li>
            <Link href="/privacy-policy">
              <i className="fa-solid fa-comments-question"></i>
              <span>Help Center</span>
            </Link>
          </li> */}
          <li>
            <Link href="/profile-details">
              <i className="fa-sharp fa-solid fa-gears"></i>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper">
          <li>
            <a
              onClick={onSignOut}
              style={{
                cursor: "pointer",
              }}
            >
              <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
