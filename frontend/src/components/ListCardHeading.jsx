import { FaPlus } from "react-icons/fa"

const ListCardHeading = (props) => {
    return (
        <div className="rounded shadow-sm shadow-blue-trans">
            <div className="flex justify-between items-center px-5 py-2.5">
                <h2
                    className="text-blue-primary font-roboto font-medium"
                >Skills{props.heading}</h2>
                <FaPlus className="text-blue-primary"/>
            </div>
        </div>
    )
}
export default ListCardHeading
