import Link from "next/link";
import wondersImages from "./wonders";
import Image from "next/image";
import "./styles.css";

export default function Home() {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4 text-blue-500">
                New Wonders of the World
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {wondersImages.map(({id, src, name}) => (
                    <Link key={id} href={`/photo-feed/${id}`} >
                        <Image alt="{name}" src={src} width={200} height={200} className="w-full object-cover aspect-square">
                        </Image>
                    </Link>
                ))}
            </div>
        </main>
    );
}