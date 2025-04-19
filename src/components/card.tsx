const Card = ({children }: {children: React.ReactNode}) => {
    const cardStyle = {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        padding: "100px",
        margin: "10px",
        border: "1px solid #ddd",
        display: "flex",
        justcifyContent: "center",
        alignitems: "center",
    };

    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
}
export default Card;