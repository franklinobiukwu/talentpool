import Avatar from "../assets/avatar.png"


const InfoCard = (props) => {
    return (
        <div>
            <div className="flex items-center shadow-sm shadow-blue-trans px-5 py-2.5 rounded">
                <div className="w-24 rounded-full overflow-hidden mr-5">
                    <img src={ !props.profileImage && Avatar } alt="profile image"/>
                </div>
                {/* Details */}
                <div>
                    <h3 className="font-inter font-bold text-sm text-blue-primary">Franklin Obiukwu{props.name}</h3>
                    <p className="font-roboto text-sm text-blue-primary">obiukwuchibuisi@gmail.com {props.email}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
