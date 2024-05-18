'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react"
import { 
    RiCustomerService2Line,
    RiDashboard2Line, 
    RiDashboardHorizontalLine, 
    RiExchange2Line, 
    RiFile3Line, 
    RiListCheck3, 
    RiQuestionnaireLine, 
    RiRefreshLine, 
    RiShoppingBasket2Line, 
    RiStarSmileLine, 
    RiStore3Line 
} from "react-icons/ri";

interface Props {
    open: boolean
}

const Sidebar : FC<Props> = ({ open }) : JSX.Element => {
    const route = usePathname();
    return (
        <aside className="sidebar">
            <Link href="/">
                <h1 className="my-6 text-center text-2xl md:text-1xl lg:text-2xl uppercase cursor-pointer font-bold tracking-tighter">
                    Buzz Blasters
                </h1>
            </Link>

            <div className="ps-wrapper">
                <ul className="ps-menu">
                    <li className={`${route === '/dashboard' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiDashboard2Line 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            New Order
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/order-history' ? 'active' : ''}`}>
                        <Link href="/dashboard/order-history" className="psLink">
                            <span>
                                <RiShoppingBasket2Line
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            Orders History
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/add-funds' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiExchange2Line 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            Add Funds
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/tutorial' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiFile3Line 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            Tutorial
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/services' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiListCheck3 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            Services
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/faq' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiQuestionnaireLine 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            FAQ
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/updates' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiRefreshLine 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            Updates
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/resell' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiStore3Line 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            Resell Services
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/affiliates' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiStarSmileLine 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            Affiliates
                        </Link>
                    </li>
                    <li className={`${route === '/dashboard/mass-order' ? 'active' : ''}`}>
                        <Link href="/dashboard" className="psLink">
                            <span>
                                <RiDashboardHorizontalLine 
                                    className="text-lg md:text-xl"
                                />
                            </span>
                            Mass Order
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="p-support">
                <Link
                    href={"/dashboard/support"}
                    className="psSupportLink"
                >
                    <span className="psSupportIcon">
                        <RiCustomerService2Line />
                    </span>
                    Support
                </Link>
            </div>

        </aside>
    )
}

export default Sidebar;