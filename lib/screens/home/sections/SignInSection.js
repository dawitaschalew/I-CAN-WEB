import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../providers/AuthProvider";
import { Button } from "../../../widgets/Button";
import { InputField } from "../../../widgets/InputField";
import { TabBar, TabBarItem, TabProvider } from "../../../widgets/TabScaffold";

export const SignInSection = ({ toggleSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { user, loading, signIn, error, setError } = useAuth();

  const onSubmit = (data) => {
    data = { username: data.username, password: data.password };
    signIn(data);
  };
  return (
    <div id="auth" className="home__signIn">
      <TabProvider>
        <div className="home__signIn__content">
          <div className="home__signIn__container">
            <div className="home__signIn__container--leading">
              <div>Sign In</div>
              <TabBar>
                <TabBarItem />
                <TabBarItem onTap={() => {}} label="WELCOME BACK TO I-CAN" />
                <TabBarItem />
              </TabBar>
            </div>
            <div className="home__signIn__container--main">
              <div className="signInForm">
                <InputField
                  ref={register("username", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 5,
                      message: "Username must contain atleast 5 characters",
                    },
                  })}
                  error={errors}
                  name="username"
                  label="Username"
                />
                <div style={{ height: "2.4rem" }} />
                <InputField
                  ref={register("password", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Passwords must contain atleast 6 characters",
                    },
                  })}
                  error={errors}
                  name="password"
                  label="Password"
                  type="password"
                />
                <div style={{ height: "4rem" }} />
                <Button onClick={handleSubmit(onSubmit)} color="main"> Sign In </Button>
                <div style={{ height: "4rem" }} />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    alignItems: "center",
                    columnGap: "2.4rem",
                  }}
                >
                  {" "}
                  <p>Don't have an account ?</p>{" "}
                  <Button onClick={toggleSignIn} type="outline" color="main">
                    Sign Up
                  </Button>
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
