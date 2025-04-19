// import Notifications from "./@notifications/page";
// import RevenueMetrics from "./@revenue/page";
// import UsersAnalytics from "./@users/page";

// export default function DashboardLayout({children} : {
//     children: React.ReactNode
// }) {
//     return (
//         <>
//         <div> {children} </div>
//         <UsersAnalytics />
//         <RevenueMetrics />
//         <Notifications />
//         </>
//     );
// }


export default function DashboardLayout({children, users, revenue, notifications, login,} : {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = false;
    return isLoggedIn ? (
        <div>
            <div> {children} </div>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display: "flex", flex: 1}}>{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
}

//technically, note that the children prop is equivalent to complex-dashboard/@children/page.tsx
//slots allow for subnavigation in routes and independent routes handling