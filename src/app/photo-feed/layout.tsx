import "./styles.css";

export default function PhotoFeed(props:{
    modal: React.ReactNode,
    children: React.ReactNode}) {
    return (
        <>
            {props.modal}
            {props.children}
        </>
    );
}