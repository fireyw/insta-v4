import React from "react";
import Stories from "@/components/Stories";
import Posts from "@/components/Posts";

function Feed(props) {
  return (
    <main>
      <section>
        <Stories />
        <Posts />
      </section>
      <section>
        {/*Mini profile*/}
        {/*suggestion*/}
      </section>
    </main>
  );
}

export default Feed;
