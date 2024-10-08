import ListCardBtnIcon from "./ListCardBtnIcon"

const SkillsCard = (props) => {
    return (
        <div className="rounded shadow-sm shadow-blue-trans">
            <div className="flex items-center justify-between py-2.5 px-5">
                <h3 className="font-roboto text-blue-primary">Sales{props.skill}</h3>
                <div className="flex items-center">
                    <div className="mr-2">
                        <ListCardBtnIcon />
                    </div>
                    <div>
                        <ListCardBtnIcon delete="true"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillsCard
