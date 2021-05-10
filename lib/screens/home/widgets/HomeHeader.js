import React from "react";
import { useAuth } from "../../../providers/AuthProvider";
import { CloseIcon, MenuIcon, PersonIcon } from "../../../widgets/Icons";

export const HomeHeader = ({ drawerStat, toggleDrawer }) => {
  const { user, loading } = useAuth();

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
              <div className="">
                  Home
              </div>
              <div className="">
                  About Us
              </div>
              <div className="">
                  Contact
              </div>
            {user ? (
              <>
                {" "}
                <PersonIcon /> <div> {" " + user.name} </div>{" "}
              </>
            ) : (
              <div> Sign In </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
