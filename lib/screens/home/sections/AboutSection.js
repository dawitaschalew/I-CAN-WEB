import React from "react";
import { TabBar, TabBarItem, TabBuilder, TabProvider } from "../../../widgets/TabScaffold";

export const AboutSection = () => {
  return (
    <div id="about" className="home__about">
      <TabProvider>
        <div className="home__about__content">
          <div className="home__about__container">
            <div className="home__about__container--leading">
              <div>About Us</div>
              <TabBar>
                <TabBarItem
                  onTap={() => {}}
                  activeColor="#0CBFAE"
                  label="VISION"
                />
                <TabBarItem
                  onTap={() => {}}
                  activeColor="#0CBFAE"
                  label="MISSION"
                />
                <TabBarItem
                  onTap={() => {}}
                  activeColor="#0CBFAE"
                  label="GOAL"
                />
              </TabBar>
            </div>
            <div className="home__about__container--main">
                <TabBuilder>
                    { (currIndex) => {
                        switch (currIndex) {
                            case 0:
                                return <Vision />
                                break;
                            case 1:
                                return <Mission />
                                break;
                            case 2:
                                return <Goal />
                                break;
                        
                            default:
                                return <Vision />
                                break;
                        }
                    } }
                </TabBuilder>
            </div>
            <div className="home__about__container--actions"></div>
          </div>
        </div>
      </TabProvider>
    </div>
  );
};

export const Vision = () => {
    return (
        <div>
            Providing labor force and related data at different level with various content and detail to fill the gap in data requirement for the purpose of planning, monitoring and evaluation.
        </div>
    )
}
export const Mission = () => {
    return (
        <div>
            Mission
        </div>
    )
}
export const Goal = () => {
    return (
        <div>
            Goal
        </div>
    )
}

