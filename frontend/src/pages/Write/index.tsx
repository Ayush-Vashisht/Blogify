import React, { useState } from "react";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import { createPostInput, updatePostInput } from "@ayush-vashisht/common";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ContentArea({ onChange, value }) {
  const [text, setText] = useState("");

  const handleChange = (event: {
    target: {
      value: React.SetStateAction<string>;
      style: { height: string };
      scrollHeight: any;
    };
  }) => {
    setText(event.target.value);
    event.target.style.height = "auto"; // Reset the height to auto
    event.target.style.height = `${event.target.scrollHeight}px`; // Set the height based on content
  };

  return (
    <textarea
      className="block p-2.5 w-full text-sm text-gray-900  rounded-lg"
      style={{ minHeight: "250px" }} // Set a minimum height
      value={value}
      onChange={onChange}
      placeholder="Type something..."
    />
  );
}
export default function BlogDetailsPage() {
  const [open, setOpen] = useState(false);
  const [blog, setBlog] = useState<createPostInput>({
    title: "",
    content: "",
    img: "",
  });
  const [photoLink, setPhotoLink] = useState("");

  const today = new Date();
  const options: {
    day: number | string;
    month: string;
    year: string | number;
  } = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/v1/blog", { blog });
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpload = (e) => {
    // const files = e.target.files;
    // setBlog({
    //   ...blog,
    //   img:files
    // });
  };
  async function addPhotoByLink(ev) {
    ev.preventDefault();
    setBlog({
      ...blog,
      img: photoLink,
    });
  }
  console.log(blog);
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
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
                    className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
                  >
                    Home
                  </Heading>
                </Link>
              </div>
              <Link to="/podcast">
                <Heading
                  as="h6"
                  className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
                >
                  Podcast
                </Heading>
              </Link>
              <Link to="/blog">
                <Heading
                  as="h6"
                  className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
                >
                  Blog
                </Heading>
              </Link>
              <Link to="/contactus">
                <Heading
                  as="h6"
                  className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
                >
                  Contact
                </Heading>
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
        <div className="flex flex-col items-center justify-start w-full mt-10 gap-[15px] max-w-[1356px]">
          <div className="flex flex-col items-center justify-start w-[99%]">
            <div className="flex flex-col items-center justify-start w-full gap-[46px]">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="items-center justify-center w-full">
                    {blog.img ? (
                      <Img
                        // src="images/img_rectangle_20.png"
                        src={blog.img}
                        alt="image_one"
                        className="w-full h-[400px] object-cover rounded-[25px]"
                      />
                    ) : (
                      <div className="  w-full h-[400px] flex flex-col gap-1  bg-gray-200 items-center justify-center rounded-[25px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="gray"
                          className="w-[40px] h-[40px] "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <div className="flex gap-1">
                          <input
                            type="text"
                            placeholder="add using link...jpg"
                            value={photoLink}
                            onChange={(ev) => {
                              setPhotoLink(ev.target.value);
                            }}
                          />
                          <button
                            onClick={addPhotoByLink}
                            className="bg-gray-500 px-4 py-1 rounded-2xl"
                          >
                            Add&nbsp;Link
                          </button>
                        </div>

                        <div className="mt-2">
                          <input
                            type="file"
                            multiple
                            className=""
                            onChange={handleUpload}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-start justify-center w-[84%] mt-[-132px] p-12 bg-white-A700 shadow-lg rounded-[25px]">
                    <Heading
                      size="2xl"
                      as="h1"
                      className="w-[97%] mt-[25px] ml-4 tracking-[0.12px] !font-merriweather italic"
                    >
                      <input
                        type="text"
                        placeholder="Title"
                        value={blog.title}
                        onChange={(e) => {
                          setBlog({
                            ...blog,
                            title: e.currentTarget.value,
                          });
                        }}
                        className="font-light"
                      />
                    </Heading>
                    <div className="flex flex-row justify-between items-center w-[97%] mt-12 ml-4">
                      <div className="flex flex-row justify-start items-center w-[31%] gap-3.5">
                        <Img
                          src="images/img_ellipse_5.png"
                          alt="circleimage"
                          className="h-[70px] w-[70px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%] gap-0.5">
                          <Heading
                            size="lg"
                            as="h2"
                            className="!text-blue_gray-600 !font-semibold"
                          >
                            By Jhone Leonardo
                            {/* {user.name} */}
                          </Heading>
                          <Text size="xs" as="p" className="text-center">
                            {formattedDate}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[74%]">
                <div className="flex flex-grow w-full">
                  <ContentArea
                    onChange={(e: { target: { value: any } }) =>
                      setBlog({
                        ...blog,
                        content: e.target.value,
                      })
                    }
                    value={blog.content}
                  />
                </div>
                <Button
                  color="indigo_900_01"
                  size="sm"
                  shape="round"
                  className="!text-white-A700 min-w-[100px] "
                  onClick={handleSubmit}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[100px] p-[33px] bg-gray-600_01" />
      </div>
    </>
  );
}
