import React from "react";
import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>...loading</p>;
  }

  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  // pre-generate by default
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const filteredData = data.products.find(
    (product) => product.id === productId
  );
  if (!filteredData) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: filteredData,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: params,
    fallback: true,
  };
}

export default ProductDetailPage;
