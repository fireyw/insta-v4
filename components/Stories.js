"use client";
import React, { useEffect, useState } from "react";
import Story from "./Story";
import { faker } from "@faker-js/faker";
function Stories(props) {
  const [storyUsers, setStoryUsers] = useState([]);
  const [current, setCurrent] = useState(false);

  useEffect(() => {
    const storyUsers = [];
    for (let i = 0; i < 20; i++) {
      let user = {
        username: faker.person.firstName(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        id: i,
      };
      storyUsers.push(user);
    }
    setStoryUsers(storyUsers);
    setCurrent(true);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-auto rounded-sm scrollbar-none">
      {storyUsers.map(
        (user) =>
          current && (
            <Story key={user.id} img={user.img} username={user.username} />
          )
      )}
    </div>
  );
}

export default Stories;
