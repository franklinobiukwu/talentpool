import ListImg from "../assets/books.png"
import ListCardBtnIcon from "./ListCardBtnIcon"

const ListCard = (props) => {
    return(
        <div
            className="rounded shadow-sm shadow-blue-trans
                flex items-center justify-between px-5 py-2.5">
            <div className="flex items-center">
                <div className="w-14 h-14 mr-4 rounded overflow-hidden">
                    <img src={ListImg} alt="list"/>
                </div>
                <div>
                    <h3 className="font-roboto text-blue-primary text-sm">
                        High School Cert{props.qualification}
                    </h3>
                    {/* School and Country */}
                    <div className="font-roboto font-medium text-blue-primary text-sm flex">
                        <h4>
                            Premium High{props.institution}
                        </h4>
                        <p className="mx-2">•</p>
                        <h4>
                            Nigeria{props.country}
                        </h4>
                    </div>
                    {/* Duration of Studies */}
                    <p className="text-blue-trans font-roboto text-sm">2011 - 2021{props.duration}</p>
                </div>
            </div>
            {/* Buttons */}
            <div className="flex">
                <div className="mr-2">
                    <ListCardBtnIcon />
                </div>
                <div>
                    <ListCardBtnIcon delete="delete"/>
                </div>
            </div>
        </div>
    )
}
export default ListCard
