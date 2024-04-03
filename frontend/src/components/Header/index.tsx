import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { UserContext } from "contexts/UserContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const {user}=useContext(UserContext);
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[95px] bg-white-A700">
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
                  className="!text-indigo-900_01 tracking-[0.12px] text-center"
                >
                  Home
                </Heading>
              </Link>
              <div className="h-px w-full bg-indigo-900_01" />
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

          <Link to={user?"/":"/login"}>
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
    </div>
  );
};

export default Header;
