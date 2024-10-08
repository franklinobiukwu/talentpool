import Header from "../components/Header.jsx";
import HeroImg from "../assets/hero.png"
import HeroText from "../components/HeroText.jsx"

const LandingPage = () => {

    return (
        <div>
            <div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${HeroImg})`}}>
                <Header/>
                <div className="grid grid-cols-12">
                    <div className="col-start-8 col-end-13 mt-20">
                        <HeroText/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
