import React, { useEffect, useState } from "react";
import { Text, Heading, Img, Button } from "../../components";
import { createPostInput, updatePostInput } from "@ayush-vashisht/common";
import axios from "axios";
import { Link } from "react-router-dom";

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

export default function BlogPostsSevenPage() {
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
  const filteredBlogs = blogs.slice(0, 5);
  console.log(filteredBlogs);

  return (
    <>
      <div className="flex flex-row justify-center w-full px-14 py-[12px] ">
        <div className="flex flex-col items-center justify-start w-full mt-1 gap-[52px] mx-[9px] max-w-[1141px]">
          <div className="flex flex-col items-center justify-start w-[66%] gap-3">
            <Heading size="xl" as="h1" className="text-center">
              Latest Posts
            </Heading>
            <Text size="md" as="p" className="text-center">
              Adwords Keyword research for beginners when you embark on your
              first PPC journey, you need to keep a small number of keywords at
              first.
            </Text>
          </div>
          <div className="flex flex-row justify-start w-full gap-[30px]">
            <div className="flex flex-col items-center justify-start w-[24%] gap-[30px]">
              <Link
                to={`/blogss/${filteredBlogs[1]?.id}`}
                className="flex flex-col items-center justify-start w-full pb-4 gap-4 bg-white-A700 shadow-xs rounded"
              >
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row justify-start">
                      <Img
                        src="images/img_bitmap_236x360.png"
                        // src={filteredBlogs[0]?.img}
                        alt="bitmap_one"
                        className="w-full rounded-tr rounded-tl object-cover"
                      />
                    </div>
                    {filteredBlogs[1]?.author?.perImg ? (
                      <Img
                        // src="images/img_oval_copy_4_42x42.png"
                        src={filteredBlogs[1].author.perImg}
                        alt="ovalcopyfour"
                        className="h-[42px] w-[42px] mt-[-22px] rounded-[50%]"
                      />
                    ) : (
                      <div className="relative inline-flex items-center justify-center h-[30px] w-[30px] mt-[-15px] ml-[5px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">
                          {filteredBlogs[1]?.author?.name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[81%] gap-2">
                  <Heading as="h2" className="w-[96%]">
                    {/* Netflix Break UX Design Principles */}
                    {filteredBlogs[1]?.title}
                    <br />
                  </Heading>
                  <Text as="p">
                    {filteredBlogs[1]?.content.slice(0, 20)}...
                  </Text>
                </div>
              </Link>

              <Link
                to={`/blogss/${filteredBlogs[2]?.id}`}
                className="flex flex-col items-start justify-start w-full gap-[11px] p-6 bg-white-A700 shadow-xs rounded"
              >
                <Heading as="h3" className="w-[94%]">
                  {/* UX Writing portfolio as a beginner */}
                  {filteredBlogs[2]?.title}
                </Heading>
                <div className="flex flex-col items-start justify-start gap-3">
                  <Text as="p">
                    {filteredBlogs[2]?.content.slice(0, 10)}...
                  </Text>

                  <div className="h-px w-full bg-blue_gray-100_4c" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Text size="xs" as="p" className="!text-blue_gray-900">
                    15 March, 2022
                  </Text>
                  <Button className="min-w-[66px]">UX / UI</Button>
                </div>
              </Link>
            </div>
            <Link
              to={`/blogss/${filteredBlogs[0]?.id}`}
              className="flex flex-col items-center justify-start w-[49%] pb-4 gap-4 bg-white-A700 shadow-xs rounded"
            >
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    src="images/img_bitmap.png"
                    // src={filteredBlogs[0]?.img}
                    alt="bitmap_three"
                    className="w-full rounded-tr rounded-tl object-cover"
                  />
                  {filteredBlogs[0]?.author?.perImg ? (
                    <Img
                      // src="images/img_oval_copy_4_1.png"
                      src={filteredBlogs[0]?.author.perImg}
                      alt="ovalcopyfour"
                      className="h-[42px] w-[42px] mt-[-21px] ml-6 rounded-[50%]"
                    />
                  ) : (
                    <div className="relative inline-flex items-center justify-center h-[42px] w-[42px] mt-[-21px] ml-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {filteredBlogs[1]?.author?.name[0]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[92%]">
                <Heading as="h4">
                  {/* How to create a UX Writing portfolio as a <br />
                  beginner */}
                  {filteredBlogs[0]?.title}
                </Heading>
                <Text as="p" className="mt-2">
                  {/* Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s. */}
                  {filteredBlogs[0]?.content.slice(0, 30)}
                </Text>
                <div className="h-px w-full mt-4 bg-blue_gray-100_4c" />
                <div className="flex flex-row justify-between items-center w-full mt-4">
                  <Text size="xs" as="p" className="!text-blue_gray-900">
                    15 March, 2022
                  </Text>
                  <div className="flex flex-row justify-start w-[40%] gap-3">
                    <div className="flex flex-row justify-start w-[47%]">
                      <Button className="w-full">UX DESIGN</Button>
                    </div>
                    <div className="flex flex-row justify-start w-[47%]">
                      <Button color="red_700_19" className="w-full">
                        UI DESIGN
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex flex-col items-center justify-start w-[24%] gap-[30px]">
              <Link
                to={`/blogss/${filteredBlogs[3]?.id}`}
                className="flex flex-col items-start justify-start w-full gap-[11px] p-6 bg-white-A700 shadow-xs rounded"
              >
                <Heading as="h5" className="w-[94%]">
                  {/* UX Writing portfolio as a beginner */}
                  {filteredBlogs[3]?.title}
                </Heading>
                <div className="flex flex-col items-start justify-start gap-3">
                  <Text as="p">
                    {filteredBlogs[3]?.content.slice(0, 10)}...
                  </Text>
                  <div className="h-px w-full bg-blue_gray-100_4c" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Text size="xs" as="p" className="!text-blue_gray-900">
                    15 March, 2022
                  </Text>
                  <Button className="min-w-[66px]">UX / UI</Button>
                </div>
              </Link>
              {filteredBlogs[4] && (
                <Link
                  to={`/blogss/${filteredBlogs[4]?.id}`}
                  className="flex flex-col items-center justify-start w-full pb-4 gap-4 bg-white-A700 shadow-xs rounded"
                >
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row justify-start">
                        <Img
                          src="images/img_bitmap_1.png"
                          // src={filteredBlogs[4]?.img}
                          alt="bitmap_five"
                          className="w-full rounded-tr rounded-tl object-cover"
                        />
                      </div>
                      {filteredBlogs[4]?.author?.perImg ? (
                        <Img
                          // src="images/img_oval_copy_4_2.png"
                          src={filteredBlogs[4]?.author?.perImg}
                          alt="ovalcopyfour"
                          className="h-[42px] w-[42px] mt-[-22px] ml-[26px] rounded-[50%]"
                        />
                      ) : (
                        <div className="relative inline-flex items-center justify-center h-[42px] w-[42px] mt-[-21px] ml-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                          <span className="font-medium text-gray-600 dark:text-gray-300">
                            {filteredBlogs[4]?.author?.name[0]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[81%] gap-2">
                    <Heading as="h6" className="w-[96%]">
                      {filteredBlogs[4]?.title}
                    </Heading>
                    <Text as="p">
                      {filteredBlogs[4]?.content.slice(0, 20)}...
                    </Text>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
