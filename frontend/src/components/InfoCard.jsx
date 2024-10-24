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
                    <h3 className="font-inter font-bold text-sm text-blue-primary">
                        {props.user.firstname} {props?.user?.lastname}
                    </h3>
                    <p className="font-roboto text-sm text-blue-primary">
                        {props?.user?.email}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
