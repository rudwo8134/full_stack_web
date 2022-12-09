import React from "react";
import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <span>The project page for specific</span>
      <h2>{router.query.id}</h2>
      <h3>{router.query.clientProject}</h3>
    </div>
  );
};

export default SelectedClientProjectPage;
