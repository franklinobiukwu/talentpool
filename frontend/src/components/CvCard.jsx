import { FaRegEye } from "react-icons/fa";
import CvImage from "../assets/cv.jpg"
import Button from "./Button.jsx";
import { RiDeleteBin6Line } from "react-icons/ri";

const CvCard = (props) => {
    return (
        <div>
            <div className="w-60 overflow-hidden rounded shadow-sm shadow-blue-trans">
                {/* Image */}
                <div >
                    <img src={CvImage} alt="Curriculum Vitae"/>
                </div>
                {/* Content*/}
                <div className="px-5">
                    <div className="mb-3 mt-1">
                        <h1 className="text-blue-primary font-inter font-extrabold capitalize"> Graphic designer{props.role}</h1>
                        <h3 className="text-blue-trans font-roboto font-semibold">ALX SE{props.company}</h3>
                        <p className="font-semibold font-roboto text-blue-primary text-xs">$550/mo{props.amount}</p>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-between mb-5">
                        <div>
                            <Button text="View" icon={<FaRegEye/>} style="default"/>
                        </div>
                        <div>
                            <Button text="Delete" icon={<RiDeleteBin6Line/>} style="transparent"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CvCard
