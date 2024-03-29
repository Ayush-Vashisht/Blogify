import React, { useState } from "react";
import { Button, TextArea, Input, Text, Img, Heading } from "../../components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[105px] bg-white-A700">
      <header className="flex flex-row justify-between items-center w-full p-6 bg-white-A700">
          <div className="flex flex-row justify-between items-center w-[55%] ml-[139px]">
            <Link to="/">
              <Img
                src="images/img_group_150.svg"
                alt="image"
                className="h-[24px]"
              />
            </Link>
            <div className="flex flex-row justify-between items-center w-[53%]">
              <div className="flex flex-col items-center justify-start w-[13%] gap-0.5">
                <Link to="/">
                  <Heading
                    as="h6"
                    className="!text-indigo-200_01 tracking-[0.12px] text-center"
                  >
                    Home
                  </Heading>
                </Link>
                
              </div>
              <Link to="/podcast">
                <Heading
                  as="h6"
                  className="!text-indigo-200_01 tracking-[0.12px] text-center"
                >
                  Podcast
                </Heading>
              </Link>
              <Link to="/blogs">
                <Heading
                  as="h6"
                  className="!text-indigo-200_01 tracking-[0.12px] text-center"
                >
                  Blog
                </Heading>
              </Link>
              <Link to="/contactus">
                <Heading
                  as="h6"
                  className="!text-indigo-900_01 tracking-[0.12px] text-center"
                >
                  Contact
                </Heading>
                <div className="h-px w-full bg-indigo-900_01" />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-[10px] mr-[50px]">
            {open ? (
              <div className="flex items-center justify-center border border-solid rounded-[5px] text-gray-500">
                <input className=" px-1 py-1 text-sm  " placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => setOpen(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ) : (
              <Img
                src="images/img_search.svg"
                alt="search_one"
                onClick={() => setOpen(!open)}
                className="h-[30px] w-[30px] "
              />
            )}

            <Link to="/write" className="flex  items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="darkblue"
                className="h-[30px] w-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg> 
            </Link>

            <Link to="/register">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="darkblue"
                className="h-[35px] w-[35px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>
          </div>
        </header>
        <div className="flex flex-row justify-center w-full max-w-[1103px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Heading size="xl" as="h1" className="!text-blue_gray-600">
                Contact us
              </Heading>
              <Text as="p" className="mt-[5px]">
                Complete the form to contact us
              </Text>
              <div className="flex flex-row justify-start items-start w-full mt-[39px] gap-[29px]">
                <div className="flex flex-col items-start justify-start w-[29%] gap-[19px]">
                  <Heading size="xl" as="h2" className="!text-blue_gray-600">
                    Info
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                    <div className="flex flex-row justify-start items-center gap-2.5">
                      <Img
                        src="images/img_vector_blue_gray_600.svg"
                        alt="vector_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Text as="p">+91-XXXXXXXXXX</Text>
                    </div>
                    <div className="flex flex-row justify-start items-center ml-[3px] gap-2.5">
                      <Img
                        src="images/img_mail_1.svg"
                        alt="mailone_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Text as="p">XXXXX@gmail.com</Text>
                    </div>
                    <div className="flex flex-row justify-start items-start ml-[3px] gap-[9px]">
                      <Img
                        src="images/img_pin_1.svg"
                        alt="pinone_one"
                        className="h-[20px] mt-[5px]"
                      />
                      <Text as="p" className="w-[92%] leading-[30px]">
                        XXXXXXXXXXXXXXXXXX, YYYY, ZZ 800XX
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[69%] mt-2 p-[26px] bg-white-A700 shadow-xl rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-full gap-[30px] my-[17px]">
                    <div className="flex flex-row justify-start gap-[25px]">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-[49%] font-light"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-[49%] font-light"
                      />
                    </div>
                    <Input
                      name="your_subject"
                      placeholder="Your Subject"
                      className="w-full font-light"
                    />
                    <TextArea
                      name="description"
                      placeholder="Description"
                      className="w-full text-gray-400 font-light"
                    />
                    <Button
                      color="indigo_900_01"
                      size="5xl"
                      shape="round"
                      className="!text-white-A700 min-w-[190px]"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
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
