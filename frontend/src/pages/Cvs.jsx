import CvCard from "../components/CvCard"
import SearchBar from "../components/SearchBar"

const Cvs = () => {
    return (
        <div className="p-10 max-w-full">
            {/* Search Bar */}
            <div className="mb-5">
                <SearchBar
                    placeholder="sales executive"
                />
            </div>
            {/* List of Cvs */}
            <div className="flex gap-4 flex-wrap">
                <CvCard/>
                <CvCard/>
                <CvCard/>
                <CvCard/>
                <CvCard/>
                <CvCard/>
                <CvCard/>
                <CvCard/>
            </div>
        </div>
    )
}
export default Cvs
