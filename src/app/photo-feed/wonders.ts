import { StaticImageData } from "next/image";
import photo1 from "./photos/1.webp";
import photo2 from "./photos/2.jpeg";
import photo3 from "./photos/3.jpeg";
import photo4 from "./photos/4.jpeg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpeg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Great Wall of China",
        src: photo1,
        photographer: "John Doe",
        location: "China"
    },
    {
        id: "2",
        name: "Machu Picchu",
        src: photo2,
        photographer: "Jane Smith",
        location: "Peru"
    },
    {
        id: "3",
        name: "Christ the Redeemer",
        src: photo3,
        photographer: "Alice Johnson",
        location: "Brazil"
    },
    {
        id: "4",
        name: "Colosseum",
        src: photo4,
        photographer: "Bob Brown",
        location: "Italy"
    },
    {
        id: "5",
        name: "Taj Mahal",
        src: photo5,
        photographer: "Charlie Davis",
        location: "India"
    },
    {
        id: "6",
        name: "Petra",
        src: photo6,
        photographer: "Diana Evans",
        location: "Jordan"
    },
    {
        id: "7",
        name: "Chichen Itza",
        src: photo7,
        photographer: "Ethan Wilson",
        location: "Mexico"
    }
]

export default wondersImages;