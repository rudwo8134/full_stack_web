import React from "react";

const UserProfilePage = (props) => {
  // stock data => frequently it changed. out-dated
  // highly user specific data. => online shop.
  // partial data => data that's only used on a part of an page.

  return (
    <div>
      <h1>{props.userName}</h1>
    </div>
  );
};

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log("Server Side code");

  return {
    props: {
      userName: "Max",
    },
  };
}
