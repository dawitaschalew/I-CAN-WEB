import React, { useState } from "react";
import { Button } from "../../../widgets/Button";
import Link from "next/link";
import { InputField } from "../../../widgets/InputField";
import { TabBar, TabBarItem, TabProvider } from "../../../widgets/TabScaffold";
import { useForm } from "react-hook-form";

export const ContactSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const [submitClicked, setSubmitClicked] = useState(false);
  const [emailHref, setEmailHref] = useState(
    "mailto:someone@example.com?subject=Comment from &body=${comment}"
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  console.log(!errors["comment"], !errors["email"], !errors["name"]);

  return (
    <div id="contact" className="home__contact">
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
                        name="name"
                        placeholder="Your Name"
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
                        name="email"
                        error={errors}
                        placeholder="Your Email Address"
                      />
                      <textarea
                        {...register("comment", {
                          required: "Field is required",
                        })}
                        placeholder="Your Message"
                        style={{
                          marginTop: "2.4rem",
                          width: "100%",
                          borderRadius: "0.6rem",
                          borderColor: "#eee",
                          padding: "1.2rem",
                        }}
                      ></textarea>
                    </div>
                    <div className="contact__container--actions">
                      {!errors["comment"] &&
                      !errors["email"] &&
                      !errors["name"] &&
                      submitClicked ? (
                        <Link
                          href={
                            "mailto:someone@example.com?subject=Comment from " +
                            watch("name") +
                            "&body=" +
                            watch("comment")
                          }
                        >
                          <a style={{ textDecoration: "none" }}>
                            <Button onClick={() => {}} color="main">
                              Submit
                            </Button>
                          </a>
                        </Link>
                      ) : (
                        <Button
                          onClick={() => {
                            setSubmitClicked(true);
                            handleSubmit(onSubmit)();
                          }}
                          color="main"
                        >
                          Submit
                        </Button>
                      )}
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
