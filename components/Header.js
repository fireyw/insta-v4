import React from "react";
import Image from "next/image";
import { ServerIcon } from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { HomeIcon, PlusCircleIcon } from "@heroicons/react/20/solid";

function Header(props) {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/*left*/}
      <div className="cursor-pointer h-24 w-24 relative hidden sm:inline-grid">
        <Image
          layout="fill"
          className="object-contain "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative sm:hidden">
        <Image
          layout="fill"
          className="object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
        />
      </div>
      {/*middle*/}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>
      {/*<Plus-cirle />*/}
      <div className="flex space-x-4 items-center">
        <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <PlusCircleIcon className="h-6 w-6 text-blue-500" />
        <img
          src="data:image/jpeg;base64,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"
          alt="user-image"
          className="h-10 rounded-full"
        />
      </div>

      {/*right*/}
      {/*<span>right</span>*/}
    </div>
  );
}

export default Header;
