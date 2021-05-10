import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../widgets/Button";
import { DropDown } from "../../../widgets/DropDown";
import { InputField } from "../../../widgets/InputField";
import { TabBar, TabBarItem, TabProvider } from "../../../widgets/TabScaffold";

export const SignUpSection = ({ toggleSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [sex, setSex] = useState();

  const onSubmit = (data) => {
    if (!sex) {
      alert("Please select sex");
      return;
    }
    data = {...data, sex: sex.value}
    console.log(data);
  };

  return (
    <div id="auth" className="home__signUp">
      <TabProvider>
        <div className="home__signUp__content">
          <div className="home__signUp__container">
            <div className="home__signUp__container--leading">
              <div>Sign Up</div>
              <TabBar>
                <TabBarItem />
                <TabBarItem onTap={() => {}} label="BECOME A MEMBER" />
                <TabBarItem />
              </TabBar>
            </div>
            <div className="home__signUp__container--main">
              <div className="signUpForm">
                <div style={{ width: "100%", gridColumn: "span 2" }}>
                  <InputField
                    ref={register("name", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                      minLength: {
                        value: 2,
                        message: "Name must contain atleast 2 characters",
                      },
                    })}
                    error={errors}
                    label="Name"
                  />
                </div>
                <InputField
                  ref={register("age", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    valueAsNumber: "Age must be a number",
                  })}
                  type="number"
                  error={errors}
                  label="Age"
                />
                <div style={{ width: "100%", gridColumn: "span 2" }}>
                  <InputField
                    ref={register("mothersName", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                      minLength: {
                        value: 2,
                        message: "Name must contain atleast 2 characters",
                      },
                    })}
                    error={errors}
                    name="mothersName"
                    label="Mother's Name"
                  />
                </div>
                <DropDown
                  type="outline"
                  label="Sex"
                  value={sex}
                  onChanged={(v) => setSex(v)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </DropDown>
                <InputField
                  ref={register("region", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 2,
                      message: "Name must contain atleast 2 characters",
                    },
                  })}
                  error={errors}
                  label="Region"
                />
                <InputField
                  ref={register("town", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 2,
                      message: "Name must contain atleast 2 characters",
                    },
                  })}
                  error={errors}
                  label="Town"
                />
                <InputField
                  type="number"
                  ref={register("woreda", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    valueAsNumber: "Woreda must be a valid number",
                  })}
                  error={errors}
                  label="Woreda"
                />
                <InputField
                  ref={register("phone", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    validate: (value) =>
                      value.match(/^\d{10}$/) || "Invalid phone number",
                  })}
                  error={errors}
                  label="Phone"
                />
                <InputField
                  ref={register("email", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    validate: (value) =>
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                        value
                      ) || "Invalid email address",
                  })}
                  type="email"
                  error={errors}
                  label="Email"
                />
                <InputField
                  ref={register("placeOfBirth", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 2,
                      message: "Places must contain atleast 2 characters",
                    },
                  })}
                  error={errors}
                  name="placeOfBirth"
                  label="Place of birth"
                />
                <InputField
                  type="date"
                  ref={register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                  })}
                  error={errors}
                  name="dateOfBirth"
                  label="Date of birth"
                />
                <InputField
                  ref={register("fieldOfStudy", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 2,
                      message:
                        "Field of study must contain atleast 2 characters",
                    },
                  })}
                  error={errors}
                  name="fieldOfStudy"
                  label="Field of study"
                />
                <InputField
                  type="number"
                  ref={register("yearOfGraduation", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    valueAsNumber: "Year must be a valid number",
                  })}
                  error={errors}
                  name="yearOfGraduation"
                  label="Year of graduation"
                />
                <div style={{ width: "100%", gridColumn: "span 3" }}>
                  <InputField
                    ref={register("typeOfWorkYouWant", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                      minLength: {
                        value: 2,
                        message: "Too sort",
                      },
                    })}
                    error={errors}
                    name="typeOfWorkYouWant"
                    label="Type of work you want"
                  />
                </div>
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
                />

                <InputField
                  ref={register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Passwords must contain atleast 6 characters",
                    },
                    validate: (value) =>
                      watch("password") == value || "Passwords did not match",
                  })}
                  error={errors}
                  name="confirmPassword"
                  label="Confirm Password"
                />
                <Button onClick={handleSubmit(onSubmit)} color="main">
                  {" "}
                  Sign Up{" "}
                </Button>
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
                  <p>Already have an account ?</p>{" "}
                  <Button onClick={toggleSignIn} type="outline" color="main">
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
            <div className="home__signUp__container--actions"></div>
          </div>
        </div>
      </TabProvider>
    </div>
  );
};
