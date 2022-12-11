import React from "react";

const SingleUserPage = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  );
};

export default SingleUserPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: {
      id: "userId-" + userId,
    },
  };
}
