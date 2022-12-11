import React, { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalePage = (props) => {
  const [sales, setSales] = useState(props.sales);
  const URL = "https://ericblog-c56b8-default-rtdb.firebaseio.com/sales.json";
  const fetcher = (url) => {
    return fetch(url).then((response) => response.json());
  };
  const { data, error, loading } = useSWR(URL, fetcher);
  console.log(data);

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          userName: data[key].userName,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://ericblog-c56b8-default-rtdb.firebaseio.com/sales.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = [];
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           userName: data[key].userName,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setData(transformedSales);
  //       setLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>...error</p>;
  }

  return (
    <ul>
      {sales.map((d) => (
        <li key={d.id}>
          <h1>{d.userName}</h1>
          <h2>{d.volume}</h2>
        </li>
      ))}
    </ul>
  );
};

export default LastSalePage;

export async function getStaticProps() {
  return fetch("https://ericblog-c56b8-default-rtdb.firebaseio.com/sales.json")
    .then((response) => response.json())
    .then((data) => {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          userName: data[key].userName,
          volume: data[key].volume,
        });
      }
      return { props: { sales: transformedSales }, revalidate: 10 };
    });
}
