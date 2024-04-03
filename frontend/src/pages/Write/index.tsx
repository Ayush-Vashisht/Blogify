import React, { useContext, useState } from "react";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import { createPostInput, updatePostInput } from "@ayush-vashisht/common";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "contexts/UserContext";
import Header from "components/Header";

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
    // img: "",
  });
  const [photoLink, setPhotoLink] = useState("");
  const { user } = useContext(UserContext);
  const today = new Date();
  const options: {
    day: string;
    month: string;
    year: string;
  } = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);
  const handleSubmit = async () => {
    try {
      const { title, content } = blog;
      const { data } = await axios.post("/api/v1/blog", {
        title,
        content,
        authorId: "d1e7e5cf-3dea-45c2-9da0-3d768bfc92a2",
      });
      console.log(data);
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
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header />
        <div className="flex flex-col items-center justify-start w-full mt-10 gap-[15px] max-w-[1356px]">
          <div className="flex flex-col items-center justify-start w-[99%]">
            <div className="flex flex-col items-center justify-start w-full gap-[46px]">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="items-center justify-center w-full">
                    <Img
                      src="images/img_rectangle_20.png"
                      // src={blog.img}
                      alt="image_one"
                      className="w-full h-[400px] object-cover rounded-[25px]"
                    />
                    {/* {blog.img ? (
                      <Img
                        src="images/img_rectangle_20.png"
                        // src={blog.img}
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
                    )} */}
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
                          // src={user.img}
                          alt="circleimage"
                          className="h-[70px] w-[70px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%] gap-0.5">
                          <Heading
                            size="lg"
                            as="h2"
                            className="!text-blue_gray-600 !font-semibold"
                          >
                            {user.name}
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
