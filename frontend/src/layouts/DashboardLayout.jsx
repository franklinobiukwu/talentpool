import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav.jsx";

const DashboardLayout = () =>
{
    return (
        <div>
            <div className="grid grid-cols-12">
                {/*---------SideNav-------------*/}
                <div className="md:col-span-2 col-span-3 fixed">
                    <SideNav/>
                </div>
                {/*---------Main Content--------*/}
                <div className="md:col-span-10 md:col-start-4 col-span-9">
                    <Outlet/>
                </div>
            </div>
        </div>
    )    
}
export default DashboardLayout
