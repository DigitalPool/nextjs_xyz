import { notFound } from "next/navigation";


export default function ReviewDetails( { params

 } : { 
  params: { 
    reviewid: string;
    productid: string;
  } }) {
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