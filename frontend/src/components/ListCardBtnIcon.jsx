import { FaEdit } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"

const ListCardBtnIcon = (props) => {
    const del = <RiDeleteBin6Line className="text-[#B45454]"/>
    const edit = <FaEdit className="text-[#145E7D]"/>
    return (
        <div>
            <button>
                {props.delete ? del : edit}
            </button>
        </div>
    )
}

export default ListCardBtnIcon
