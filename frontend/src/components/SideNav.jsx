import { IoChatbubblesSharp } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";


const SideNavBtn = (props) => {
    return (
        <Link to={props.link}>
            <div
                className="flex text-white-primary
                            items-center py-1 font-inter font-bold px-8">
                <div className="mr-2">
                    {props.icon} 
                </div>
                <div>
                    {props.text}
                </div>
            </div>
        </Link>
    )
}


const SideNav = () => {
    return (
        <div className="h-screen bg-blue-primary md:pt-5">
            {/*---------Logo--------*/}
            <Link to="/" className="flex items-center md:pb-16 px-8">
                <div className="w-14 overflow-hidden mr-2">
                    <img src={Logo} alt="logo"/>
                </div>
                <p
                    className="font-extrabold font-inter
                                text-white-primary text-xl"
                >
                    TalentPool
                </p>
            </Link>
            {/*----------Navigation------------*/}
            <div>
               <SideNavBtn text="Feed" icon={<IoChatbubblesSharp/>} link="/dashboard"/> 
               <SideNavBtn text="Cvs" icon={<IoDocumentTextOutline/>} link="/dashboard/cvs"/> 
               <SideNavBtn text="Profile" icon={<FaRegUser/>} link="/dashboard/profile"/> 
               <SideNavBtn text="Settings" icon={<HiOutlineCog6Tooth/>} link="/dashboard/settings"/> 
            </div>
        </div>
    )
}

export default SideNav
