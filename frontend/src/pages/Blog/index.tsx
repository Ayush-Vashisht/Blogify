import React, { useEffect, useState } from "react";
import { Text, Img, Heading, Button, Input } from "../../components";
import BlogPostsSevenPage from "pages/BlogPostsSeven";
import { Link } from "react-router-dom";
import { createPostInput, updatePostInput } from "@ayush-vashisht/common";
import axios from "axios";

interface BlogsProps {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}
const Blog = () => {
  const [open, setOpen] = useState(false);
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get("/api/v1/blog/bulk", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setBlogs(response.data.blogs);
    };
    getBlogs();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[90px] bg-white-A700">
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
                  className="!text-indigo-900_01 tracking-[0.12px] text-center"
                >
                  Blog
                </Heading>
                <div className="h-px w-full bg-indigo-900_01" />
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
        <div className="flex flex-col items-center justify-start w-full gap-[99px] max-w-[1111px]">
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-col justify-start items-start w-full gap-[29px]">
              {/* <BlogPostsSevenPage />
               */}
              <div className="flex flex-col justify-start w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start  gap-[30px]">
                  <div className="flex  items-center justify-between w-full pb-4 gap-4 h-[280px] bg-white-A700 shadow-xs rounded">
                    <div className="flex flex-col items-start justify-start w-[81%] gap-1 ml-[26px]   ">
                      <div className="flex  items-center justify-center gap-1 ">
                        <div>
                          <Img
                            src="images/img_oval_copy_4_42x42.png"
                            alt="ovalcopyfour"
                            className="h-[42px] w-[42px] mt-[-22px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center h-[42px]">
                          <Text size="s" className="text-blue_gray-900 ">
                            John doe
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-900"
                          >
                            15 March, 2022
                          </Text>
                        </div>
                      </div>
                      <div className="h-px w-full mt-4 bg-blue_gray-100_4c" />
                      <Heading as="h2" className="w-full">
                        How to create a UX Writing portfolio as a beginner
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s.
                      </Text>
                      <div className="flex flex-row justify-start w-[40%] gap-3">
                        <div className="flex flex-row justify-start ">
                          <Button className="w-full text-xs">UX DESIGN</Button>
                        </div>
                        <div className="flex flex-row justify-start  ">
                          <Button color="red_50" className="w-full text-xs">
                            UI DESIGN
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center w-[15%]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row justify-start mr-[26px]">
                          <Img
                            src="images/img_bitmap.png"
                            alt="bitmap_three"
                            className="w-full rounded-tr rounded-tl object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center justify-between w-full pb-4 gap-4 h-[280px] bg-white-A700 shadow-xs rounded">
                    <div className="flex flex-col items-start justify-start w-[81%] gap-1 ml-[26px]   ">
                      <div className="flex  items-center justify-center gap-1 ">
                        <div>
                          <Img
                            src="images/img_oval_copy_4_42x42.png"
                            alt="ovalcopyfour"
                            className="h-[42px] w-[42px] mt-[-22px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center h-[42px]">
                          <Text size="s" className="text-blue_gray-900 ">
                            John doe
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-900"
                          >
                            15 March, 2022
                          </Text>
                        </div>
                      </div>
                      <div className="h-px w-full mt-4 bg-blue_gray-100_4c" />
                      <Heading as="h2" className="w-full">
                        How to create a UX Writing portfolio as a beginner
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s.
                      </Text>
                      <div className="flex flex-row justify-start w-[40%] gap-3">
                        <div className="flex flex-row justify-start ">
                          <Button className="w-full text-xs">UX DESIGN</Button>
                        </div>
                        <div className="flex flex-row justify-start  ">
                          <Button color="red_50" className="w-full text-xs">
                            UI DESIGN
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center w-[15%]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row justify-start mr-[26px]">
                          <Img
                            src="images/img_bitmap.png"
                            alt="bitmap_three"
                            className="w-full rounded-tr rounded-tl object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center justify-between w-full pb-4 gap-4 h-[280px] bg-white-A700 shadow-xs rounded">
                    <div className="flex flex-col items-start justify-start w-[81%] gap-1 ml-[26px]   ">
                      <div className="flex  items-center justify-center gap-1 ">
                        <div>
                          <Img
                            src="images/img_oval_copy_4_42x42.png"
                            alt="ovalcopyfour"
                            className="h-[42px] w-[42px] mt-[-22px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center h-[42px]">
                          <Text size="s" className="text-blue_gray-900 ">
                            John doe
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-900"
                          >
                            15 March, 2022
                          </Text>
                        </div>
                      </div>
                      <div className="h-px w-full mt-4 bg-blue_gray-100_4c" />
                      <Heading as="h2" className="w-full">
                        How to create a UX Writing portfolio as a beginner
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s.
                      </Text>
                      <div className="flex flex-row justify-start w-[40%] gap-3">
                        <div className="flex flex-row justify-start ">
                          <Button className="w-full text-xs">UX DESIGN</Button>
                        </div>
                        <div className="flex flex-row justify-start  ">
                          <Button color="red_50" className="w-full text-xs">
                            UI DESIGN
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center w-[15%]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row justify-start mr-[26px]">
                          <Img
                            src="images/img_bitmap.png"
                            alt="bitmap_three"
                            className="w-full rounded-tr rounded-tl object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center justify-between w-full pb-4 gap-4 h-[280px] bg-white-A700 shadow-xs rounded">
                    <div className="flex flex-col items-start justify-start w-[81%] gap-1 ml-[26px]   ">
                      <div className="flex  items-center justify-center gap-1 ">
                        <div>
                          <Img
                            src="images/img_oval_copy_4_42x42.png"
                            alt="ovalcopyfour"
                            className="h-[42px] w-[42px] mt-[-22px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center h-[42px]">
                          <Text size="s" className="text-blue_gray-900 ">
                            John doe
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-900"
                          >
                            15 March, 2022
                          </Text>
                        </div>
                      </div>
                      <div className="h-px w-full mt-4 bg-blue_gray-100_4c" />
                      <Heading as="h2" className="w-full">
                        How to create a UX Writing portfolio as a beginner
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s.
                      </Text>
                      <div className="flex flex-row justify-start w-[40%] gap-3">
                        <div className="flex flex-row justify-start ">
                          <Button className="w-full text-xs">UX DESIGN</Button>
                        </div>
                        <div className="flex flex-row justify-start  ">
                          <Button color="red_50" className="w-full text-xs">
                            UI DESIGN
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center w-[15%]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row justify-start mr-[26px]">
                          <Img
                            src="images/img_bitmap.png"
                            alt="bitmap_three"
                            className="w-full rounded-tr rounded-tl object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {blogs.map((blog: BlogsProps) => (
                    <Link
                      to={`/blogss/${blog.id}`}
                      key={blog.id}
                      className="flex flex-col items-center justify-start w-full px-6 pb-4 gap-4 bg-white-A700 shadow-xs rounded"
                    >
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row justify-start">
                            <Img
                              // src={blog.img}
                              alt="bitmap_one"
                              className="w-full rounded-tr rounded-tl object-cover"
                            />
                          </div>
                          <Img
                            // src={blog.perImg}
                            alt="ovalcopyfour"
                            className="h-[42px] w-[42px] mt-[-22px] ml-[26px] rounded-[50%]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[81%] gap-2">
                        <Heading as="h2" className="w-[96%]">
                          {blog.title}
                          <br />
                        </Heading>
                        <Text as="p">{blog.content.slice(0, 50)}</Text>
                        <div className="h-px w-full bg-blue_gray-100_4c" />
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <Text size="xs" as="p" className="!text-blue_gray-900">
                          15 March, 2022
                        </Text>
                        <Button className="min-w-[66px]">UX / UI</Button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row justify-evenly items-center w-[78%] mb-[30px] mt-[60px] gap-[53px] py-[5px] bg-green-50 rounded-[5px]">
            <div className="flex flex-col items-start justify-start w-[46%]">
              <Text as="p" className="!text-indigo-900_01">
                NEWSLETTER
              </Text>
              <Heading
                size="xl"
                as="h1"
                className="mt-1 !font-merriweather !font-black"
              >
                Subscribe to our website newsletter to receive news and updates.
              </Heading>
              <Text as="p" className="mt-5 !text-blue_gray-900">
                Get special offers directly to your email every week!
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-[40%] mt-8 gap-[7px]">
              <div className="flex flex-col items-start justify-start w-full gap-5">
                <Input
                  color="white_A700"
                  size="sm"
                  variant="fill"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full font-bold border-indigo-900_01"
                />
                <Button
                  color="indigo_900_01"
                  size="2xl"
                  shape="round"
                  className="!text-white-A700 font-semibold min-w-[137px]"
                >
                  Subscribe
                </Button>
              </div>
              <Button
                color="pink_300"
                size="7xl"
                className="w-[77px] mr-[77px] rounded-[38px]"
              >
                <Img src="images/img_newspaper_1.svg" />
              </Button>
            </div>
          </div>
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
};

export default Blog;
