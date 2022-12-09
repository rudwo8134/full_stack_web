import React from "react";
import Link from "next/link";

// * todo:
const PortfolioPage = () => {
  return (
    <div>
      <span>Portfolio Page</span>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/portfolio/32",
              query: {
                id: 32,
              },
            }}
          >
            go to name
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioPage;
