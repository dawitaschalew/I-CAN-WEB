import React, { useState, useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { HomeDrawer } from "../../widgets/Drawers";
import { IdsRipple } from "../../widgets/Loading";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { HomeHeading } from "./sections/HomeHeading";
import { SignInSection } from "./sections/SignInSection";
import { SignUpSection } from "./sections/SignUpSection";
import { HomeFooter } from "./widgets/HomeFooter";
import { HomeHeader } from "./widgets/HomeHeader";

const HomeScreen = React.memo(() => {
  const { user, loading } = useAuth();

  const [drawerStat, toggleDrawer] = useState(false);
  const [isSignIn, toggleSignIn] = useState(true);

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

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <IdsRipple />
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home__content">
        <HomeDrawer drawerStatus={drawerStat} toggleDrawer={toggleDrawer}>
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
        </HomeDrawer>
        <div className="home__container">
          <div className="home__container--leading">
            <HomeHeader
              drawerStat={drawerStat}
              toggleDrawer={() => toggleDrawer((prev) => !prev)}
            />
          </div>
          <div className="home__container--main">
            <HomeHeading />
            <AboutSection />
            <ContactSection />
            {user ? (
              <> </>
            ) : isSignIn ? (
              <SignInSection
                toggleSignIn={() => toggleSignIn((prev) => !prev)}
              />
            ) : (
              <SignUpSection
                toggleSignIn={() => toggleSignIn((prev) => !prev)}
              />
            )}
            <HomeFooter />
          </div>
          <div className="home__container--actions"></div>
        </div>
      </div>
    </div>
  );
});

export default HomeScreen;
