import React from "react";
import { Button } from "../../../widgets/Button";
import { InputField } from "../../../widgets/InputField";
import { TabBar, TabBarItem, TabProvider } from "../../../widgets/TabScaffold";

export const ContactSection = () => {
  return (
    <div className="home__contact">
      <TabProvider>
        <div className="home__contact__content">
          <div className="home__contact__container">
            <div className="home__contact__container--leading">
              <div>Contact Us</div>
              <TabBar>
                <TabBarItem />
                <TabBarItem onTap={() => {}} label="Lets keep in touch" />
                <TabBarItem />
              </TabBar>
            </div>
            <div className="home__contact__container--main">
              <div className="map">
                <img src="../../../images/map.png" alt="Map" />
              </div>
              <div className="contact">
                <div className="contact__content">
                  <div className="contact__container">
                    <div className="contact__container--leading">
                      <div> Get in Touch </div>
                    </div>
                    <div className="contact__container--main">
                      <InputField placeholder="Your Name" />
                      <InputField placeholder="Your Email Address" />
                      <textarea
                      placeholder="Your Message"
                        style={{
                          marginTop: "2.4rem",
                          width: "100%",
                          borderRadius: "0.6rem",
                          borderColor: "#eee",
                          padding: "1.2rem"
                        }}
                      ></textarea>
                    </div>
                    <div className="contact__container--actions">
                      <Button color="main">Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__contact__container--actions"></div>
          </div>
        </div>
      </TabProvider>
    </div>
  );
};
