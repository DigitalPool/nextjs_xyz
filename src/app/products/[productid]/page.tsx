
import { promises } from 'dns';
import { Metadata } from 'next';


type props = {
  params: Promise<{
    productid: string
  }>;
};

// This is the dynamic route for product details
// The productid is passed as a parameter in the URL
// For example, if the URL is /products/123, then productid will be 123
// This is a server component
// The productid is passed as a parameter in the URL

// //Generate a dynamic metadata function


// export const generateMetadata = ({params} : props): Metadata => {
//   return {
//   title: 
//     `product ${params.productid} details`,
//   };
// };


export const generateMetadata = async (props0: props): Promise<Metadata> => {
  const params = await props0.params;
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productid}`)
    }, 100)
  })
  return {
  title: `product ${title}`,
  };
};


export default async function ProductDetails(props0: props) {
  const params = await props0.params;
  return (
      <h1 className="text-3xl font-bold underline">
        Details about product {params.productid}
      </h1>
  );
};