import React, { useState } from "react";
import { getCookie, setCookie, removeCookie} from "typescript-cookie";
import md5 from "md5";

type EnvDataType = Record<string, string | boolean | undefined>;
interface HeaderProps {
  envInfo: EnvDataType;
}
const Header: React.FC<HeaderProps> = ({ envInfo }) => {
  const [sessionId, setSessionId] = useState<string | undefined | boolean>(
    getCookie("sessionId"),
  );
  const authenticated = sessionId !== undefined ? true : false;
  const [, setIsAuthenticated] = useState(authenticated);
  //condition
  const clearSession = (): void => {
    setIsAuthenticated(false);
  };
  const userName = getCookie("fullName");
  const userEmail = getCookie("userEmail");
  const profImage =
    userEmail != null
      ? `http://www.gravatar.com/avatar/${md5(userEmail)}?d=404`
      : "";

  // const searchInput = useRef<HTMLInputElement>(null);
  const [showProfile, setShowProfile] = useState("none");
  const [logoutURL, setLogoutURL] = useState("");
  const [userImage, setUserImage] = useState(profImage);


   if (sessionId !== undefined && sessionId !== null) {
    setCookie("currentPKCPage", "");
  } else {
    setCookie("currentPKCPage", window.location.href);
  }

  interface LogoutPropType {
    [key: string]:
    | string
    | boolean
    | undefined
    | number
    | (() => string)
    | symbol;
    preventDefault: () => string;
  }
const idpLoginURL = `${envInfo.PUBLIC_IDP_URL !== undefined ? envInfo.PUBLIC_IDP_URL : ''}/auth/realms/Medigy/protocol/openid-connect/auth?client_id=medigy&redirect_uri=${envInfo.PUBLIC_LOGIN_REDIRECT_URL !== undefined ? envInfo.PUBLIC_LOGIN_REDIRECT_URL : ''}login-social-pre-authorization/&state=${envInfo.PUBLIC_AUTH_BASE_TOKEN !== undefined ? envInfo.PUBLIC_AUTH_BASE_TOKEN : ''}&response_mode=fragment&response_type=code&scope=openid`;
  const logOut = (e: LogoutPropType): void => {
    e.preventDefault();
    const cookies: string[] = document.cookie.split(";");
    localStorage.clear();
    for (let i = 0; i < cookies.length; i++) {
      const cookieName: string = cookies[i]?.split("=")[0] ?? "";
      removeCookie(cookieName);
      document.cookie =
        cookieName + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;";
      // document.cookie =
      //   cookieName + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
    }
    setSessionId(false);
    clearSession();
    setLogoutURL(
      `${envInfo.PUBLIC_IDP_URL as string
      }/auth/realms/Medigy/protocol/openid-connect/logout`,
    );
    window.location.href=`${envInfo.PUBLIC_IDP_URL as string}/auth/realms/Medigy/protocol/openid-connect/logout?redirect_uri=${envInfo.PUBLIC_LOGIN_REDIRECT_URL as string}`;
    setTimeout(() => {
      console.log(`${envInfo.PUBLIC_IDP_URL as string
      }/auth/realms/Medigy/protocol/openid-connect/logout?redirect_uri=${envInfo.PUBLIC_IDP_LOGIN_URL as string}`);
      setLogoutURL("");
    }, 5000);
    // window.location.reload();

  };
  return (
  <div className="relative ml-4 flex-shrink-0">
  <div>
    <button
      type="button"
      className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"

     data-dropdown-toggle="dropdownDivider"
    >
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full"
        alt="Profile Image"
        id="profileImage-navbar"
        src={userImage}
        onError={() => {
          setUserImage(
            `${envInfo.PUBLIC_LOGIN_REDIRECT_URL !== undefined ? envInfo.PUBLIC_LOGIN_REDIRECT_URL : '/'}assets/native/images/avatar-no-image.jpg`,
          );
        }}
        title={userName}
        onClick={() => {
          setShowProfile(
            showProfile === "none" ? "block" : "none",
          );
        }}
      />
    </button>
    {sessionId !== undefined && sessionId !== null ?(
    <div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" style={{
      position: "absolute",
      top: "calc(100% + 12px)",
      right: "-12px",
      display: `${showProfile}`,
    }}>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="user-menu-button">
        <li id="userlogout">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                          onClick={
                                            logOut as unknown as React.MouseEventHandler<HTMLElement>
                                          }
          >Sign out</a>
        </li>
      </ul>
  </div>
):
<div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" style={{
      position: "absolute",
      top: "calc(100% + 12px)",
      right: "-12px",
      display: `${showProfile}`,
    }}>
<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="user-menu-button">
  <li>
    <a href={idpLoginURL} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</a>
  </li>
</ul>
</div>
}

  </div>
  <iframe
        className="hidden"
        id="logoutScreen"
        title="idpLogout"
        src={logoutURL}
      ></iframe>
  </div>

  );
};

export default Header;