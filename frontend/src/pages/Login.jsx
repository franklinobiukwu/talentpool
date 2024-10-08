import Header from "../components/Header.jsx"
import LoginForm from "../components/LoginForm.jsx"

const Login = () => {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-12">
                {/* Side Image*/}
                <div className="col-span-6">
                </div>
                {/* Login Form */}
                <div className="col-span-6 bg-white-primary shadow-sm rounded px-5 py-10">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}
export default Login
