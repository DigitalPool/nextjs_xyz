// This works, but you can also use the header that nextjs provides

// import { type NextRequest } from "next/server";

// export async function GET( request: NextRequest) {

//     const requestHeaders = new Headers(request.headers);
//     console.log(requestHeaders.get("Authorization"));
//     return new Response('Profile API data');
// }

import { type NextRequest } from "next/server";
import {headers, cookies } from "next/headers";  

export async function GET( request: NextRequest) {

    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    const headerList = await headers();
    //we can read the cookie here
    const theme = request.cookies.get("theme");
    console.log(theme);

    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");
    console.log(cookieStore.get("resultsPerPage"));

    return new Response('<h1> Profile API data </h1>', {
        status: 200,
        headers: {
            "Content-Type": "text/html",
            "set-Cookie": "theme=dark",
        },
    });
}

