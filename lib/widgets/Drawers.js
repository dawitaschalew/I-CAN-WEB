import React from "react";
import { Backdrop } from "./Backdrops";
import { CloseIcon } from "./Icons";

export const HomeDrawer = ({ drawerStatus, toggleDrawer }) => {
  return (
    <>
      {drawerStatus && <Backdrop callback={toggleDrawer} />}
      <div className={drawerStatus ? "homeDrawer show" : "homeDrawer"}>
        <div className="homeDrawer__content">
          <div className="homeDrawer__container">
            <div className="homeDrawer__container--leading">
              <div className="logo">
                <img src="../../images/I-CAN.png" alt="I-CAN Logo" />
              </div>
              <CloseIcon onClick={() => toggleDrawer()} />
            </div>
            <div className="homeDrawer__container--main"></div>
            <div className="homeDrawer__container--actions"></div>
          </div>
        </div>
      </div>
    </>
  );
};
