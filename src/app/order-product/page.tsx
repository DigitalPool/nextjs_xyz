"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/");
        // router.replace("/"); // replaces the current history
        // router.back(); // goes back to the previous page
        // router.forward(); // goes forward to the next page
        // router.prefetch("/"); // prefetches the page in the background
        // router.refresh(); // refreshes the current page
        // router.replace("/products"); // replaces the current history
        }
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={(handleClick)}>Place Order</button>
        </>
    );
}