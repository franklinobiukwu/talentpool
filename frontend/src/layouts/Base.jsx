import { Outlet } from "react-router-dom";

const Base = () => {
    return (
        <div>
            <div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Base
