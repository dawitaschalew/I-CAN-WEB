import React, { useEffect, useState } from "react";
import {
  TabBar,
  TabBarItem,
  TabBuilder,
  TabProvider,
} from "../../../widgets/TabScaffold";

import axios from "../../../utils/Axios";

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
                  activeColor="#ffd500"
                  label="VISION"
                />
                <TabBarItem
                  onTap={() => {}}
                  activeColor="#ffd500"
                  label="MISSION"
                />
                <TabBarItem
                  onTap={() => {}}
                  activeColor="#ffd500"
                  label="GOAL"
                />
              </TabBar>
            </div>
            <div className="home__about__container--main">
              <TabBuilder>
                {(currIndex) => {
                  switch (currIndex) {
                    case 0:
                      return <Vision />;
                      break;
                    case 1:
                      return <Mission />;
                      break;
                    case 2:
                      return <Goal />;
                      break;

                    default:
                      return <Vision />;
                      break;
                  }
                }}
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
  const [vision, setVision] = useState();
  useEffect(() => {
    const getVision = async () => {
      const _vision = await axios.get("/res/vision");
      setVision(_vision.data.vision);
    };

    getVision();
  }, [vision]);

  return <div>{vision}</div>;
};

export const Mission = () => {
  const [mission, setMission] = useState();
  useEffect(() => {
    const getMission = async () => {
      const _mission = await axios.get("/res/mission");
      setMission(_mission.data.mission);
    };

    getMission();
  }, [mission]);

  return <div>{mission}</div>;
};

export const Goal = () => {
  const [goal, setGoal] = useState();
  useEffect(() => {
    const getGoal = async () => {
      const _goal = await axios.get("/res/goal");
      setGoal(_goal.data.goal);
    };

    getGoal();
  }, [goal]);

  return <div>{goal}</div>;
};
