'use client';
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react"
import { 
    RiArrowDropDownLine,
    RiCheckboxCircleFill, 
    RiCloseLine, 
    RiMenu3Line, 
    RiMoneyDollarCircleLine, 
    RiSunFill
} from "react-icons/ri";

interface Props {
    open: boolean,
    setOpen: any
}

const DashboardHeader : FC<Props> = ({ open, setOpen }) : JSX.Element => {
    const [show, setShow] = useState<Boolean>(false);
    const [showAccount, setShowAccount] = useState<Boolean>(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) { // You can adjust the scroll threshold
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`p-header ${isFixed ? 'p-fixed' : ''}`}>
            <button 
                className="p-menu-btn" 
                aria-label="Toggle"
                onClick={() => setOpen(!open)}
            >
                { open ? <RiCloseLine /> : <RiMenu3Line />}
            </button>

            <ul className="p-header-list">
                <li>
                    <span className="text-lg">
                        $0.00
                    </span>
                    Balance
                </li>
                <li>
                    <span className="text-lg">
                        $0.00
                    </span>
                    Spent
                </li>
                <li>
                    <span className="text-lg">
                        New
                    </span>
                    User rank
                </li>
                <li>
                    <span className="text-lg">
                        251388
                    </span>
                    Total order
                </li>
            </ul>

            <div className="p-header-group">
                <button className="mode">
                    <RiSunFill className="text-amber-300 text-xl" />
                </button>
                
                <div className="currency relative">
                    <button 
                        className="currency-btn"
                        onClick={() => setShow(!show)}
                    >
                        <RiMoneyDollarCircleLine className="text-xl text-[#121212]" />
                    </button>
                    {show && (
                        <ul className="currency-list">
                            <li>
                                USD $
                            </li>
                            <li>
                                BRL R$  
                            </li>
                            <li>
                                CNY ¥
                            </li>
                            <li>
                                EGP £
                            </li>
                            <li>
                                EUR €
                            </li>
                            <li>
                                INR ₹
                            </li>
                            <li>
                                KRW ₩
                            </li>
                            <li>
                                KWD KD
                            </li>
                            <li>
                                NGN ₦
                            </li>
                            <li>
                                PHP ₱
                            </li>
                            <li>
                                PKR Rs
                            </li>
                            <li>
                                RUB ₽
                            </li>
                            <li>
                                SAR ر.س
                            </li>
                            <li>
                                THB ฿
                            </li>
                            <li>
                                TRY ₺
                            </li>
                            <li>
                                VND ₫
                            </li>
                        </ul>
                    )}
                </div>

                <div className="p-profile" onClick={() => setShowAccount(!showAccount)}>
                    <Image
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" 
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    {/* <UserButton /> */}
                    <div className="p-profile-username">
                        <span className="text-sm text-[#8b98b8] flex items-center justify-center gap-1">
                            John Doe
                            <RiCheckboxCircleFill 
                                className="text-[#0083ff]"
                            />
                        </span>
                        <span className="text-xs text-[#dddddd] font-normal">
                            See Details
                        </span>
                    </div>

                    <RiArrowDropDownLine
                        className="text-lg"
                    />

                    {showAccount && (
                        <ul className="account-info">
                            <li
                                className="px-2 py-2.5"
                            >
                                <Link
                                    href={'/dashboard/account'}
                                >
                                    Account
                                </Link>
                            </li>
                            <li
                                className="px-2 py-2.5"
                            >
                                <Link
                                    href={'/dashboard/Terms'}
                                >
                                    Terms
                                </Link>
                            </li>
                            <li className="divider">
                                <hr 
                                    className="p-0 border-[#121212]"
                                />
                            </li>
                            <li
                                className="px-2 py-2.5"
                            >
                                <Link
                                    href={'/logout'}
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader;