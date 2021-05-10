import React, { useState, useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { HomeDrawer } from "../../widgets/Drawers";
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

  useEffect(() => {}, [user]);

  if (loading) {
    return (
      <div>
        <GooeyLoading />
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home__content">
        <HomeDrawer drawerStatus={drawerStat} toggleDrawer={toggleDrawer} />
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
            {isSignIn ? <SignInSection toggleSignIn={() => toggleSignIn( prev => !prev)} /> : <SignUpSection toggleSignIn={() => toggleSignIn( prev => !prev)} />}
            <HomeFooter />
          </div>
          <div className="home__container--actions"></div>
        </div>
      </div>
    </div>
  );
});

export default HomeScreen;
