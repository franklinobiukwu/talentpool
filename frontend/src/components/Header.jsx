import Button from "./Button"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {

    const user = localStorage.getItem('user')

    return (
        <div>
            <div className="flex w-full justify-between py-5 px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <div className="w-14 overflow-hidden">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <p className="font-extrabold font-inter text-blue-primary text-xl">TalentPool</p>
                </Link>

                {/* Login and Signup Buttons*/}
                <div className="flex items-center">
                    <div className="mr-4">
                       <Button text="Login" style="transparent" path="/login"/>
                    </div>
                    <div>
                        <Button text="Sign up" style="solid" path="/signup"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
