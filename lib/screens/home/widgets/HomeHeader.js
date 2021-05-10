import React, { useEffect, useState } from "react";
import { useAuth } from "../../../providers/AuthProvider";
import { CloseIcon, MenuIcon, PersonIcon } from "../../../widgets/Icons";

export const HomeHeader = ({ drawerStat, toggleDrawer }) => {
  const { user, loading } = useAuth();

  const [activeLink, setActiveLink] = useState("heading");

  useEffect(() => {
    const handleScroll = (_) => {
      // mine algorithm
      if (window.pageYOffset < window.innerHeight) {
        setActiveLink("heading");
      }
      if (
        window.pageYOffset >= window.innerHeight &&
        window.pageYOffset < 2 * window.innerHeight
      ) {
        setActiveLink("about");
      }
      if (
        window.pageYOffset >= 2 * window.innerHeight &&
        window.pageYOffset < 3 * window.innerHeight
      ) {
        setActiveLink("contact");
      }
      if (window.pageYOffset >= 3 * window.innerHeight) {
        setActiveLink("auth");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header__home">
      <div className="header__home__content">
        <div className="header__home__container">
          <div className="header__home__container--leading">
            {drawerStat ? (
              <CloseIcon onClick={toggleDrawer} />
            ) : (
              <MenuIcon onClick={toggleDrawer} />
            )}
            <div className="logo">
              <img src="../../images/I-CAN.png" alt="I-CAN Logo" />
            </div>
          </div>
          <div className="header__home__container--main"></div>
          <div className="header__home__container--actions">
            <div
              onClick={() => {
                var elmnt = document.getElementById("heading");
                elmnt.scrollIntoView();
              }}
              className={
                activeLink == "heading" ? "header-links active" : "header-links"
              }
            >
              Home
            </div>
            <div
              onClick={() => {
                var elmnt = document.getElementById("about");
                elmnt.scrollIntoView();
              }}
              className={
                activeLink == "about" ? "header-links active" : "header-links"
              }
            >
              About Us
            </div>
            <div
              onClick={() => {
                var elmnt = document.getElementById("contact");
                elmnt.scrollIntoView();
              }}
              className={
                activeLink == "contact" ? "header-links active" : "header-links"
              }
            >
              Contact
            </div>
            {user ? (
              <>
                {" "}
                <PersonIcon /> <div> {" " + user.name} </div>{" "}
              </>
            ) : (
              <div
                onClick={() => {
                  var elmnt = document.getElementById("auth");
                  elmnt.scrollIntoView();
                }}
                className={
                  activeLink == "auth" ? "header-links active" : "header-links"
                }
              >
                {" "}
                Sign In{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
