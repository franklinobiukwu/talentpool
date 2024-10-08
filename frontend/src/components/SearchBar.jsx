import { FaSearch } from "react-icons/fa";


const SearchBar = (props) => {
    return (
        <div>
            <div>
                <form 
                    className="max-w-96 grid grid-cols-12
                                rounded-full overflow-hidden">
                    <input type="search" placeholder={props.placeholder} 
                        className="col-start-1 col-span-11 text-blue-trans
                                    focus:outline-none py-2 pl-4 bg-[#032c482e] text-lg"/>
                    <button type="submit" className="col-end-13 bg-[#032c482e]">
                        <FaSearch className="text-blue-primary"/>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default SearchBar
