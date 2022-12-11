import React from "react";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
// * next js pre rendered => if there is no dynamic data.
// * User can see all the SEO.

const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((data) => {
          return (
            <Link href={`/${data.id}`}>
              <li key={data.id}>{data.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps(context) {
  console.log("RE-generated");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true }; // return 404 page => when failed to fetch the data.
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // ISR => will be re-generated on every 10s
  };
}

export default HomePage;
