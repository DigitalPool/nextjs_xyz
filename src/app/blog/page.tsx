import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  // title: {
  //   absolute: "Blog",
  // }
  //absolute overides the template metadata of this page
};

export default function Blog() {
  return (
      <h1 className="text-3xl font-bold underline">
        Welcome to our Blog!
      </h1>
  )
}