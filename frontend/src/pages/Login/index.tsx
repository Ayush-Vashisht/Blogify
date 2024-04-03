import React, { useContext, useState } from "react";
import { Button, TextArea, Input, Text, Img, Heading } from "../../components";
import { signinInput } from "@ayush-vashisht/common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "contexts/UserContext";
import Header from "components/Header";

export default function Register() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const { setUser, user } = useContext(UserContext);

  const [signInInput, setSignInInput] = useState<signinInput>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    ``;
    try {
      const { username, password } = signInInput;
      const { data } = await axios.post("/api/v1/user/signin", {
        username,
        password,
      });
      setUser({ username: data.email, name: data.name });
      const { token } = data;
      localStorage.setItem("token", token);
      setReady(true);
      alert("login successfull");
    } catch (error) {
      alert("Incorrect credentials");
      console.error(error);
    }
  };
  if (ready) navigate("/");
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[105px] bg-white-A700">
        <Header />
        <div className="flex flex-row justify-center w-full max-w-[1103px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Heading size="xl" as="h1" className="!text-blue_gray-600">
                Sign In
              </Heading>
              <Text as="p" className="mt-[5px]">
                Complete the form to Login into your Account
              </Text>
              <div className="flex flex-row justify-center items-start w-full mt-[39px] gap-[29px]">
                <div className="flex flex-row justify-center w-[60%] mt-2 p-[26px] bg-white-A700 shadow-xl rounded-[10px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px] my-[17px]">
                    <div className="flex flex-col justify-start gap-[25px] ">
                      <div className="w-full font-light border border-2  rounded-md px-4 py-2">
                        <input
                          type="email"
                          name="email"
                          value={signInInput.username}
                          onChange={(e) => {
                            setSignInInput({
                              ...signInInput,
                              username: e.target.value,
                            });
                          }}
                          placeholder="Your Email"
                          className="text-gray-500"
                        />
                      </div>
                      <div className="w-full font-light border border-2  rounded-md px-4 py-2">
                        <input
                          type="password"
                          name="password"
                          value={signInInput.password}
                          onChange={(e) => {
                            setSignInInput({
                              ...signInInput,
                              password: e.target.value,
                            });
                          }}
                          placeholder="Your Password"
                          className="text-gray-500"
                        />
                      </div>
                    </div>

                    <Button
                      color="indigo_900_01"
                      size="sm"
                      shape="round"
                      className="!text-white-A700 min-w-[190px]"
                      onClick={handleSubmit}
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-[39px] w-full !text-blue_gray-600 gap-1">
                Create an account!
                <Link
                  to="/register"
                  className="text-gray-600_01 hover:underline underline-offset-4"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row justify-end w-full ">
            <div className="flex flex-row justify-center w-full p-[33px] bg-gray-600_01">
              <div className="flex flex-col items-center justify-start w-[81%] mt-[30px] gap-[66px] mx-[132px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start w-[15%] gap-2">
                    <div className="flex flex-row justify-start items-start gap-3.5">
                      <Img
                        src="images/img_dashicons_welcome_write_blog.svg"
                        alt="dashicons_one"
                        className="h-[24px] w-[24px] mt-[3px]"
                      />
                      <Heading
                        size="lg"
                        as="h4"
                        className="!text-white-A700 !font-nunitosans uppercase text-center !font-extrabold"
                      >
                        Blogsly
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2.5">
                      <Img
                        src="images/img_heart_3_1.svg"
                        alt="heart3one_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Text as="p" className="!text-white-A700 !font-medium">
                        Build with heart
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-auto gap-[50px]">
                    <Link to="/">
                      <Text as="p" className="!text-white-A700">
                        Home
                      </Text>
                    </Link>
                    <Link to="/podcast">
                      <Text as="p" className="!text-white-A700">
                        Podcast
                      </Text>
                    </Link>
                    <Link to="/blogs">
                      <Text as="p" className="!text-white-A700">
                        Blog
                      </Text>
                    </Link>
                    {/* <Link to="/">
                      <Text as="p" className="!text-white-A700">
                        About
                      </Text>
                    </Link> */}
                    <Link to="/contactus">
                      <Text as="p" className="!text-white-A700">
                        Contact
                      </Text>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[11%] gap-[19px]">
                    <Heading as="h6" className="!text-white-A700 text-center">
                      Follow Me on
                    </Heading>
                    <div className="flex flex-row justify-between w-full">
                      <Img
                        src="images/img_instagram_3_1.svg"
                        alt="instagram3one"
                        className="h-[25px] w-[25px]"
                      />
                      <Img
                        src="images/img_whatsapp_2_1.svg"
                        alt="whatsapp2one"
                        className="h-[25px] w-[25px]"
                      />
                      <Img
                        src="images/img_linkedin_2_1.svg"
                        alt="linkedin2one"
                        className="h-[25px] w-[25px]"
                      />
                    </div>
                  </div>
                </div>
                <Text size="xs" as="p" className="!text-white-A700">
                  Powered by Blogsly
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
