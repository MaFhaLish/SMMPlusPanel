import Image from "next/image";
import { FC } from "react";

const Welcome : FC = () : JSX.Element => {
    return (
        <section className="welcome">
            <h1 className="welcome-title">
                Welcome, John Doe !
            </h1>
            <p className="welcome-text">We are here to give you the best service.</p>
        </section>
    )
}

export default Welcome;