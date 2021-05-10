import React from "react";

export const HomeHeading = () => {
  return (
    <div className="home__heading">
      <div className="home__heading__content">
        <div className="home__heading__container">
          <div className="home__heading__container--leading"></div>
          <div className="home__heading__container--main">
            <div>
              <div>CAN Job Creation</div>
              <div>
                “Having more than 50 million of unemployed young generation is
                not a curse rather a blessing “
              </div>
            </div>
            <div>
            <img
                src="../../../images/Heading_Illustration.png"
                alt="heading shape"
              />
            </div>
          </div>
          <div className="home__heading__container--actions">
            <div>
              <img
                src="../../../images/Heading_Shape.png"
                alt="heading shape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
