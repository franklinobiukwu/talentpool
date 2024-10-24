import { FaEdit, FaPen, FaRegSave } from "react-icons/fa"
import Button from "./Button"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../hooks/useFetchPost.jsx";

const AboutMeForm = () => {
    const [edit, setEdit] = useState(false)

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['aboutme'],
        queryFn: fetchData('/user/about')
    })

    return (
        <div>
            <div className="shadow-sm shadow-blue-trans rounded pb-2">
                <form className="px-5">
                    <div className="mb-2">
                        <label
                            className="text-blue-primary font-inter
                                        font-semibold text-md"
                            htmlFor="about"
                            >
                                About me
                        </label>
                    </div>
                    <textarea type="text" placeholder="I'm a hardworking..."
                        className="font-robotoMono text-blue-primary
                                    placeholder:text-blue-trans2 w-full
                                    focus:outline-blue-trans resize-none
                                    border rounded px-2 py-1"
                        name="about" id="about" maxLength={500} rows="4"></textarea>
                    {/* == Buttons ==*/}
                    <div className="flex justify-center items-center my-5">
                        <div className="flex items-center justify-center">
                            {edit && (
                                <div className="mr-2">
                                    <Button
                                        text="Cancel"
                                        icon={<MdOutlineCancel/>}
                                        style="transparent"
                                        onClick={() => setEdit(!edit)}
                                    />
                                 </div>
                            )}

                            <Button
                                text={edit?'Save' : 'Edit'}
                                style={edit? 'solid':'transparent'}
                                icon={edit? (<FaRegSave/>) : (<FaPen/>)}
                                onClick={edit? () => {
                                handleSave()
                                } : () => {
                                handleEdit()
                                }}
                            isLoading={isPending}
                            disabled={isPending}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AboutMeForm
