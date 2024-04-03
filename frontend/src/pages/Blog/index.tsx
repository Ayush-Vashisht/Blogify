import React, { useEffect, useState } from "react";
import { Text, Img, Heading, Button, Input } from "../../components";
import BlogPostsSevenPage from "pages/BlogPostsSeven";
import { Link, useLocation } from "react-router-dom";
import { createPostInput, updatePostInput } from "@ayush-vashisht/common";
import axios from "axios";
import Header from "components/Header";

interface BlogsProps {
  content: string;
  title: string;
  id: string;
  img?: string;

  author: {
    name: string;
    perImg?: string;
  };
}
const Blog = () => {
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
        <Header />
        <div className="flex flex-col items-center justify-start w-full gap-[99px] max-w-[1111px]">
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-col justify-start items-start w-full gap-[29px]">
              <div className="flex flex-col justify-start w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start  gap-[30px]">
                  {blogs.map((blog: BlogsProps) => (
                    <Link
                      to={`/blogss/${blog.id}`}
                      key={blog.id}
                      className="flex  items-center justify-between w-full pb-4 gap-4 h-[200px] bg-white-A700 shadow-xs rounded"
                    >
                      <div className="flex flex-col items-start justify-start w-[81%] gap-1 ml-[26px]   ">
                        <div className="flex  items-center justify-center gap-2 ">
                          <div>
                            {blog.author.perImg ? (
                              <Img
                                // src="images/img_oval_copy_4_42x42.png"
                                src={blog.author.perImg}
                                alt="ovalcopyfour"
                                className="h-[42px] w-[42px] mt-[-22px] rounded-[50%]"
                              />
                            ) : (
                              <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <span className="font-medium text-gray-600 dark:text-gray-300">
                                  {blog.author.name[0]}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col items-start justify-center h-[42px]">
                            <Text size="s" className="text-blue_gray-900 ">
                              {/* John doe */}
                              {blog.author.name}
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
                          {/* How to create a UX Writing portfolio as a beginner */}
                          {blog.title}
                        </Heading>
                        <Text as="p">
                          {/* Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s. */}
                          {blog.content}
                        </Text>
                        <div className="flex flex-row justify-start w-[40%] gap-3">
                          <div className="flex flex-row justify-start ">
                            <Button className="w-full text-xs">
                              UX DESIGN
                            </Button>
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
