import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();
  const onClick = () => {
    // ? load data ...
    router.push({
      pathname: "/clients/1000",
      query: { id: "max", clientProjectName: "ProjectA" },
    });
  };
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          <Link href="/clients/max">Maximilian</Link>
        </li>
        <li>
          <Link href="/clients/manual">Manual</Link>
        </li>
      </ul>
      <button onClick={onClick}>Load Project A</button>
    </div>
  );
};

export default ClientPage;
