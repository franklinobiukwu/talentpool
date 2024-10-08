import { FaEdit } from "react-icons/fa"
import Button from "./Button"

const AboutMeForm = () => {
    return (
        <div>
            <div className="shadow-sm shadow-blue-trans rounded pb-2">
                <form className="px-5">
                    <div className="mb-2">
                        <label
                            className="text-blue-primary font-inter
                                        font-semibold text-md"
                            htmlFor="about"
                            >
                                About me
                        </label>
                    </div>
                    <textarea type="text" placeholder="I'm a hardworking..."
                        className="font-robotoMono text-blue-primary
                                    placeholder:text-blue-trans2 w-full
                                    focus:outline-blue-trans resize-none
                                    border rounded px-2 py-1"
                        name="about" id="about" maxLength={500} rows="4"></textarea>
                    <div className="flex justify-center items-center my-5">
                        <Button text="Edit" icon={<FaEdit/>} style="default"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AboutMeForm
