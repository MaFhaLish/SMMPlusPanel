import { FC } from "react";
import Welcome from "@/Components/dashboard/new-order/Welcome";
import ServicesQuality from "@/Components/dashboard/new-order/ServicesQuality";
import Order from "@/Components/dashboard/new-order/Order";
import OrderDetail from "@/Components/dashboard/new-order/OrderDetail";

const newOrder : FC = () : JSX.Element => {
    return (
        <div className="page">
            <Welcome />

            <ServicesQuality />

            <div className="page-container">
                <Order />
                <OrderDetail />
            </div>

        </div>
    )
}

export default newOrder;