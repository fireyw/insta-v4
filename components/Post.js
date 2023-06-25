import React from "react";
{
}
function Post({ img, userImg, caption, username, id }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/*{Post Header}*/}
      <div className="flex items-center p-5 ">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        {/*flex-1 모든 여백을 차지한다*/}
        <p className="font-bold flex-1 ">{username}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>

      {/*Post image*/}

      <img className="object-cover w-full" src={img} alt="" />
    </div>
  );
}

export default Post;
