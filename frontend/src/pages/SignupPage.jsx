import Header from "../components/Header.jsx";
import SignupForm from "../components/SignupForm.jsx"

const SignupPage = () => {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <h1>Image</h1>
                </div>
                <div className="col-span-6">
                    <SignupForm/>
                </div>
            </div>
        </div>
    )
}
export default SignupPage
