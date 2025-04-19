"use client";

import { notFound } from "next/navigation";
import { use } from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail( { params

 } : { 
  params: { 
    reviewid: string;
    productid: string;
  } }) {
    if (getRandomInt(2) === 1) {
      throw new Error("Error in Review Id");
    }
  // Check if the reviewid is a number > 1000
  const reviewid = parseInt(params.reviewid);
  if (reviewid > 1000)
      notFound();
  return (
      <h1 className="text-3xl font-bold underline">
        Review {params.reviewid} of the product {params.productid}
      </h1>
  )
}