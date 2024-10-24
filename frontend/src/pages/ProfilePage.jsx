import AboutMeForm from "../components/AboutMeForm"
import InfoCard from "../components/InfoCard"
import ListCardHeading from "../components/ListCardHeading"
import PersonalInfo from "../components/PersonalInfoForm"

const ProfilePage = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    return (
        <div className="lg:grid grid-cols-12 gap-4 p-10">
            <div className="col-span-6">
                {/* User Name and Email*/}
                <div className="mb-4">
                    <InfoCard
                        user={user}
                    />
                </div>
                {/* About Me */}
                <div className="mb-8">
                    <AboutMeForm/>
                </div>
                {/* Education */}
                <div className="md:mb-8">
                    <ListCardHeading/>
                </div>
            </div>
            {/* Personal Info Form */}
            <div className="col-span-6">
                {/* Personal Info Form */}
                <div className="mb-8">
                    <PersonalInfo/>
                </div>
                {/* Skills */}
                <div>
                    <ListCardHeading/>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage
