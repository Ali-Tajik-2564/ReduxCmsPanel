import React from 'react';
import { useParams } from 'react-router-dom';

export default function MainHeader() {
  return (
    <div className="w-full h-[80px] flex flex-row-reverse items-center justify-between bg-white py-[11px] px-[17px]">
      <div className="w-1/2 flex flex-row-reverse   items-center">
        <div className="relative w-[74px] h-[58px]  rounded-full ml-4">
          <img
            src=".././profile.jpg"
            alt=""
            className=" w-[58px] h-[58px] rounded-full "
          />
          <span className="bg-primaryGreen w-4 h-4 rounded-full absolute bottom-0 right-4"></span>
        </div>
        <div className=" flex  flex-row-reverse ">
          <span className="relative flex items-center  ml-4 cursor-pointer group">
            <p className="text-sm text-primaryTitle font-normal px-1">Inbox</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-primaryTitle">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>

            <div
              id="messageBox"
              className="hidden group-hover:flex absolute  flex-col items-end justify-start p-2 w-56 h-44 rounded-md bottom-[-180px] right-0 bg-primaryInput text-primaryTitle text-sm font-semibold space-y-2  shadow-md border-solid border-b-4 border-b-primaryButton ">
              {/* messgeItem */}

              <p className="w-full p-1 border-solid border-b border-b-gray-400 mb-1">
                i love you
              </p>
              {/* messgeItem */}
            </div>
          </span>
          <span className="cursor-pointer">
            <p className="text-sm text-primaryTitle font-normal">Help guides</p>
          </span>
        </div>
      </div>
      <div>
        <p className="text-primaryTitle text-base font-normal">
          Dashboard overview
        </p>
      </div>
    </div>
  );
}
