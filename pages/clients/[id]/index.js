import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>The projects of a given Client</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default ClientProjectPage;
