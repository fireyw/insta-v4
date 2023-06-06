import React from "react";
import Image from "next/image";

function Header(props) {
  return (
    <div>
      {/*left*/}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden sm:inline-grid">
          <Image
            width="100"
            height="80"
            className="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative sm:hidden">
          <Image
            width="100"
            height="80"
            className="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
          />
        </div>
        <span>right</span>
      </div>
      {/*middle*/}

      {/*    right*/}
    </div>
  );
}

export default Header;
