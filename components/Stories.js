"use client";
import React, { useEffect, useState } from "react";
import Story from "./Story";
import { faker } from "@faker-js/faker";
function Stories(props) {
  const [storyUsers, setStoryUsers] = useState([]);
  const [current, setCurrent] = useState(false);

  useEffect(() => {
    // const storyUsers = minifaker.array(20, (i) => ({
    //   // username: minifaker.username({ locale: "en" }),
    //   username: "y",
    //   img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
    //   id: i,
    // }));
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
    <div>
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
