import React from "react";
import Link from "next/link";
// initial page on Next Js
// Kyoungjae
const HomePage = () => {
  return (
    <div>
      <h1>The home Pages</h1>
      <ul>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <Link href="/blog/32">Blog</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
