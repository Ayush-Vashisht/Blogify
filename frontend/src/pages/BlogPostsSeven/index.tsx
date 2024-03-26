import React, { useEffect, useState } from "react";
import { Text, Heading, Img, Button } from "../../components";
import { createPostInput, updatePostInput } from "@ayush-vashisht/common";
import axios from "axios";

export default function BlogPostsSevenPage() {
  const [blogs, setBlog] = useState<createPostInput>([
    {
      id: 1,
      title: "Netflix Break UX Design Principles",
      content: "Lorem Ipsum is simply dummy text of the",
      createdAt: "15 March, 2022",
      img: "images/img_bitmap_236x360.png",
      perImg: "images/img_oval_copy_4_42x42.png",
    },
  ]);

  // useEffect(() => {
  //   const data = async () => {
  //     await axios.get("/api/v1/blog/bulk");
  //   };
  //   setBlog(data);
  // }, []);
  // setBlog([
  //   {
  //     title: "Netflix Break UX Design Principles",
  //     content: "Lorem Ipsum is simply dummy text of the",
  //   },
  // ]);
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
              <div className="flex flex-col items-center justify-start w-full pb-4 gap-4 bg-white-A700 shadow-xs rounded">
                <div className="flex flex-row justify-center w-full">
                  {/* <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row justify-start">
                      <Img
                        src="images/img_bitmap_236x360.png"
                        alt="bitmap_one"
                        className="w-full rounded-tr rounded-tl object-cover"
                      />
                    </div>
                    <Img
                      src="images/img_oval_copy_4_42x42.png"
                      alt="ovalcopyfour"
                      className="h-[42px] w-[42px] mt-[-22px] ml-[26px] rounded-[50%]"
                    />
                  </div> */}
                </div>
                {/* <div className="flex flex-col items-center justify-start w-[81%] gap-2">
                  <Heading as="h2" className="w-[96%]">
                    Netflix Break UX Design Principles
                    <br />
                  </Heading>
                  <Text as="p">Lorem Ipsum is simply dummy text of the</Text>
                </div> */}
              </div>
              {console.log(blogs)}
              {blogs.map(
                (blog: {
                  content: any;
                  id: React.Key;
                  img: string;
                  perImg: string;
                  title: string;
                  subTitle: string;
                }) => (
                  <div
                    key={blog.id}
                    className="flex flex-col items-center justify-start w-full px-6 pb-4 gap-4 bg-white-A700 shadow-xs rounded"
                  >
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row justify-start">
                          <Img
                            src={blog.img}
                            alt="bitmap_one"
                            className="w-full rounded-tr rounded-tl object-cover"
                          />
                        </div>
                        <Img
                          src={blog.perImg}
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
                      <Text as="p">{blog.content.slice(0,50)}</Text>
                      <div className="h-px w-full bg-blue_gray-100_4c" />
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <Text size="xs" as="p" className="!text-blue_gray-900">
                        15 March, 2022
                      </Text>
                      <Button className="min-w-[66px]">UX / UI</Button>
                    </div>
                  </div>
                )
              )}

              <div className="flex flex-col items-start justify-start w-full gap-[11px] p-6 bg-white-A700 shadow-xs rounded">
                <Heading as="h3" className="w-[94%]">
                  UX Writing portfolio as a beginner
                </Heading>
                <div className="flex flex-col items-start justify-start gap-3">
                  <Text as="p">Lorem Ipsum</Text>
                  <div className="h-px w-full bg-blue_gray-100_4c" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Text size="xs" as="p" className="!text-blue_gray-900">
                    15 March, 2022
                  </Text>
                  <Button className="min-w-[66px]">UX / UI</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[49%] pb-4 gap-4 bg-white-A700 shadow-xs rounded">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    src="images/img_bitmap.png"
                    alt="bitmap_three"
                    className="w-full rounded-tr rounded-tl object-cover"
                  />
                  <Img
                    src="images/img_oval_copy_4_1.png"
                    alt="ovalcopyfour"
                    className="h-[42px] w-[42px] mt-[-21px] ml-6 rounded-[50%]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[92%]">
                <Heading as="h4">
                  How to create a UX Writing portfolio as a <br />
                  beginner
                </Heading>
                <Text as="p" className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s.
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
            </div>
            <div className="flex flex-col items-center justify-start w-[24%] gap-[30px]">
              <div className="flex flex-col items-start justify-start w-full gap-[11px] p-6 bg-white-A700 shadow-xs rounded">
                <Heading as="h5" className="w-[94%]">
                  UX Writing portfolio as a beginner
                </Heading>
                <div className="flex flex-col items-start justify-start gap-3">
                  <Text as="p">Lorem Ipsum</Text>
                  <div className="h-px w-full bg-blue_gray-100_4c" />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Text size="xs" as="p" className="!text-blue_gray-900">
                    15 March, 2022
                  </Text>
                  <Button className="min-w-[66px]">UX / UI</Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full pb-4 gap-4 bg-white-A700 shadow-xs rounded">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row justify-start">
                      <Img
                        src="images/img_bitmap_1.png"
                        alt="bitmap_five"
                        className="w-full rounded-tr rounded-tl object-cover"
                      />
                    </div>
                    <Img
                      src="images/img_oval_copy_4_2.png"
                      alt="ovalcopyfour"
                      className="h-[42px] w-[42px] mt-[-22px] ml-[26px] rounded-[50%]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[81%] gap-2">
                  <Heading as="h6" className="w-[96%]">
                    Design Your Site Super-Fast
                  </Heading>
                  <Text as="p">Lorem Ipsum is simply dummy text of the</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
