import React, { useEffect, useState } from "react";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import { signupInput } from "@ayush-vashisht/common";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface BlogProp {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}
export default function BlogDetailsPage() {
  const [open, setOpen] = useState(false);
  const [blog, setBlog] = useState<BlogProp>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getBlog = async () => {
      const response = await axios.get(`/api/v1/blog/${id}`);
      setBlog(response.data.blog);
      setLoading(false);
      console.log(blog);
      const { title, content, author } = blog;
      console.log({ title, content, author });
    };
    getBlog();
  }, [id]);
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
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
                    className="!text-indigo-200_01 tracking-[0.12px] text-center"
                  >
                    Contact
                  </Heading>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-[10px] mr-[50px]">
              {open ? (
                <div className="flex items-center justify-center border border-solid rounded-[5px] text-gray-500">
                  <input
                    className=" px-1 py-1 text-sm  "
                    placeholder="Search"
                  />
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
          <div className="flex flex-col items-center justify-start w-full mt-10 gap-[150px] max-w-[1356px]">
            <div className="flex flex-col items-center justify-start w-[99%]">
              <div className="flex flex-col items-center justify-start w-full gap-[46px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_rectangle_20.png"
                      // src="{blog.img}"
                      alt="image_one"
                      className="w-full object-cover rounded-[25px]"
                    />
                    <div className="flex flex-col items-start justify-center w-[84%] mt-[-132px] p-12 bg-white-A700 shadow-lg rounded-[25px]">
                      <Heading
                        size="2xl"
                        as="h1"
                        className="w-[97%] mt-[25px] ml-4 tracking-[0.12px] !font-merriweather italic"
                      >
                        {/* How to write a book properly and correctly by paying
                        attention to various parts to support the story */}
                        {blog.title}
                      </Heading>
                      <div className="flex flex-row justify-between items-center w-[97%] mt-12 ml-4">
                        <div className="flex flex-row justify-start items-center w-[31%] gap-3.5">
                          <Img
                            src="images/img_ellipse_5.png"
                            // src={author.img}
                            alt="circleimage"
                            className="h-[70px] w-[70px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start justify-start w-[72%] gap-0.5">
                            <Heading
                              size="lg"
                              as="h2"
                              className="!text-blue_gray-600 !font-semibold"
                            >
                              {/* By Jhone Leonardo */}
                              {blog.author.name}
                            </Heading>
                            <Text size="xs" as="p" className="text-center">
                              12 September, 2020
                              {/* {blog.datePosted} */}
                            </Text>
                          </div>
                        </div>
                        <Button
                          color="white_A700"
                          size="3xl"
                          shape="round"
                          leftIcon={
                            <Img
                              src="images/img_share_1_1.svg"
                              alt="share (1) 1"
                            />
                          }
                          className="gap-2.5 font-medium border-pink-300 border border-solid min-w-[191px]"
                        >
                          Share Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[74%]">
                  <Text as="p" className="leading-[35px]">
                    {/* Did you come here for something in particular or just general
                    Riker-bashing? And blowing into maximum warp speed, you
                    appeared for an instant to be in two places at once. We have a
                    saboteur aboard. We know you’re dealing in stolen ore. But I
                    wanna talk about the assassination attempt on Lieutenant Worf.
                    Could someone survive inside a transporter buffer for 75
                    years? Fate. It protects fools, little children, and ships
                    named “Enterprise.” */}
                    {blog.content}
                  </Text>

                  <Text as="p" className="mt-2.5 leading-[35px]">
                    {/* Did you come here for something in particular or just general
                    Riker-bashing? And blowing into maximum warp speed, you
                    appeared for an instant to be in two places at once. We have a
                    saboteur aboard. */}
                  </Text>
                  <Text as="p" className="mt-2.5 leading-[35px]">
                    {/* Could someone survive inside a transporter buffer for 75
                    years? Fate. It protects fools, little children, and ships
                    named “Enterprise.” */}
                  </Text>
                  <Text as="p" className="mt-5 leading-[35px]">
                    {/* Did you come here for something in particular or just general
                    Riker-bashing? And blowing into maximum warp speed, you
                    appeared for an instant to be in two places at once. We have a
                    saboteur aboard. We know you’re dealing in stolen ore. But I
                    wanna talk about the assassination attempt on Lieutenant Worf.
                    Could someone survive inside a transporter buffer for 75
                    years? Fate. It protects fools, little children, and ships
                    named “Enterprise.” */}
                  </Text>
                  {/* <Text as="p" className="mt-[50px] leading-[35px]">
                    What’s a knock-out like you doing in a computer-generated gin
                    joint like this? But the probability of making a six is no
                    greater than that of rolling a seven. I guess it’s better to
                    be lucky than good.
                  </Text>   
                  <Text as="p" className="mt-2.5 leading-[35px]">
                    Damage report! I’ve had twelve years to think about it. And if
                    I had it to do over again, I would have grabbed the phaser and
                    pointed it at you instead of them. Some days you get the bear,
                    and some days the bear gets you. Ensign Babyface! I’m afraid I
                    still don’t understand, sir. Mr. Crusher, ready a collision
                    course with the Borg ship. Yesterday I did not know how to eat
                    gagh. You’re going to be an interesting companion.
                  </Text>
                  <Text as="p" className="mt-[26px] leading-[35px]">
                    Could someone survive inside a transporter buffer for 75
                    years? Fate. It protects fools, little children, and ships
                    named “Enterprise.”
                  </Text> */}
                  <Text size="lg" as="p" className="mt-[51px] !font-medium">
                    Tags
                  </Text>

                  <div className="flex flex-row justify-start mt-3 gap-[15px]">
                    {/* {blog.tags.map(tag=>{
                    <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[96px]"
                  >
                    {tag}
                  </Button>
                  })} */}
                    <Button
                      color="gray_200"
                      size="md"
                      shape="round"
                      className="font-thin min-w-[96px]"
                    >
                      Writing
                    </Button>
                    <Button
                      color="gray_200"
                      size="md"
                      shape="round"
                      className="font-thin min-w-[97px]"
                    >
                      Tutorial
                    </Button>
                    <Button
                      color="gray_200"
                      size="md"
                      shape="round"
                      className="font-thin min-w-[93px]"
                    >
                      How to
                    </Button>
                    <Button
                      color="gray_200"
                      size="md"
                      shape="round"
                      className="font-thin min-w-[77px]"
                    >
                      Book
                    </Button>
                    <Button
                      color="gray_200"
                      size="md"
                      shape="round"
                      className="font-thin min-w-[77px]"
                    >
                      2020
                    </Button>
                  </div>
                  {/* <div className="flex flex-row justify-start w-[64%] mt-[57px] ml-[153px]">
                    <div className="flex flex-col items-end justify-start w-full gap-[30px]">
                      <div className="h-[163px] w-full relative">
                        <Img
                          src="images/img_right_quotation_sign_blue_50_01.svg"
                          alt="rightquotation"
                          className="h-[103px] w-[103px] left-0 top-0 m-auto absolute"
                        />
                        <Text
                          size="lg"
                          as="p"
                          className="w-[92%] bottom-0 right-0 m-auto text-center !font-light leading-10 absolute"
                        >
                          Increase your knowledge by reading new things and I will
                          share whatever I know for you, as long as I enjoy it
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[38%] mr-[168px] gap-[15px]">
                        <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                          <Img
                            src="images/img_ellipse_5_60x60.png"
                            alt="circleimage_one"
                            className="h-[60px] w-[60px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[68%] gap-[3px]">
                          <Heading
                            as="h5"
                            className="!text-blue_gray-600 text-center !font-semibold"
                          >
                            By Jhone Leonardo
                          </Heading>
                          <Text size="xs" as="p" className="text-center">
                            Podcaster & Blogger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[10px] px-[10px]">
              <Heading
                size="lg"
                as="h2"
                className="!font-merriweather  !font-black"
              >
                Related Posts{" "}
              </Heading>
              <div className="flex flex-row w-full gap-[27px]">
                <div className="h-[273px] w-[32%] relative">
                  <Img
                    src="images/img_rectangle_25.png"
                    alt="image"
                    className="justify-center h-[273px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] gap-[23px] bottom-[11%] left-[6%] m-auto absolute">
                    <Heading
                      size="lg"
                      as="h2"
                      className="ml-px !text-white-A700 !font-merriweather italic"
                    >
                      Consistent way of working to train yourself
                    </Heading>
                    <Text as="p" className="!text-white-A700">
                      5 minutes ago
                    </Text>
                  </div>
                </div>
                <div className="h-[273px] w-[32%] relative">
                  <Img
                    src="images/img_rectangle_26.png"
                    alt="image"
                    className="justify-center h-[273px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] gap-[23px] bottom-[11%] left-[6%] m-auto absolute">
                    <Heading
                      size="lg"
                      as="h3"
                      className="!text-white-A700 !font-merriweather italic"
                    >
                      Consistent way of working to train yourself
                    </Heading>
                    <Text as="p" className="!text-white-A700">
                      5 minutes ago
                    </Text>
                  </div>
                </div>
                <div className="h-[273px] w-[32%] relative">
                  <Img
                    src="images/img_rectangle_26_273x433.png"
                    alt="image"
                    className="justify-center h-[273px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] gap-[23px] bottom-[11%] left-[6%] m-auto absolute">
                    <Heading
                      size="lg"
                      as="h4"
                      className="!text-white-A700 !font-merriweather italic"
                    >
                      Consistent way of working to train yourself
                    </Heading>
                    <Text as="p" className="!text-white-A700">
                      5 minutes ago
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex justify-center items-center w-full mt-[100px] p-[33px] bg-gray-600_01" />
        </div>
      )}
    </>
  );
}
