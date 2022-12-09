import React from "react";
import { useRouter } from "next/router";


const PortfolioDetailPage = (props) => {
  const router = useRouter();
  const portfolioId = router.query.id // ! send request with id
  console.log(router.pathname) 


  return (
    <div>
      <span>Portfolio Detail Page</span>
      <span>Id: {portfolioId}</span>
    </div>
  );
};

export default PortfolioDetailPage;
