import React from "react";
import { Button } from "../../../widgets/Button";
import { InputField } from "../../../widgets/InputField";
import { TabBar, TabBarItem, TabProvider } from "../../../widgets/TabScaffold";

export const SignInSection = ({toggleSignIn}) => {
  return (
    <div className="home__signIn">
      <TabProvider>
        <div className="home__signIn__content">
          <div className="home__signIn__container">
            <div className="home__signIn__container--leading">
              <div>Sign In</div>
              <TabBar>
                <TabBarItem />
                <TabBarItem
                  onTap={() => {}}
                  label="WELCOME BACK TO I-CAN"
                />
                <TabBarItem />
              </TabBar>
            </div>
            <div className="home__signIn__container--main">
              <div className="signInForm">
                <InputField label="Username" />
                <div style={{ height: "2.4rem" }} />
                <InputField label="Password" />
                <div style={{ height: "4rem" }} />
                <Button color="main"> Sign In </Button>
                <div style={{ height: "4rem" }} />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    alignItems: "center",
                    columnGap: "2.4rem"
                  }}
                >
                  {" "}
                  <p>Don't have an account ?</p> <Button onClick={toggleSignIn} type="outline" color="main" >Sign Up</Button>
                </div>
              </div>
            </div>
            <div className="home__signIn__container--actions"></div>
          </div>
        </div>
      </TabProvider>
    </div>
  );
};