"use client";

import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Sample() {
  const { data, error } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <Image src={data.message} alt={"dog"} fill />
      </div>
      <p>{data.status}</p>
    </div>
  );
}

export default Sample;
