import Link from "next/link";
import {MdHomeFilled} from "react-icons/md";
import {FaBell} from "react-icons/fa";
import {FaPersonRunning} from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";


export default function Bottomnav() {
    return (
        <div>
            <div className="flex justify-center">
                <nav className="fixed bottom-0 w-96 bg-slate-100 p-4 shadow-lg flex justify-around rounded-t-3xl">
                    <Link href="/home" className="flex flex-col items-center text-gray-500">
                        <MdHomeFilled className="text-xl"/>
                        <span className="text-xs">Home</span>
                    </Link>

                    <Link href="/shop" className="flex flex-col items-center text-gray-500">
                        <FaBasketShopping className="text-xl"/>
                        <span className="text-xs">Shop</span>
                    </Link>

                    <Link href="/reminder" className="flex flex-col items-center text-gray-500">
                        <FaBell className="text-xl"/>
                        <span className="text-xs">Reminders</span>
                    </Link>
                    <Link href="/tracking" className="flex flex-col items-center text-gray-500">
                        <FaPersonRunning className="text-xl"/>
                        <span className="text-xs">Tracking</span>
                    </Link>


                </nav>
            </div>
        </div>
    );
}

