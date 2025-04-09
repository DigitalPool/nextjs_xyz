export default function ProductDetails( { params } : { params: { productid: string } }) {
  return (
      <h1 className="text-3xl font-bold underline">
        Details about product {params.productid}
      </h1>
  )
}