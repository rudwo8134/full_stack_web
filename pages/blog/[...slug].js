import React from "react";
import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);
//  * we can get the all data with [...slug]. it means catch every query with array.
  return <div>Blog Page</div>;
};

export default BlogPage;
