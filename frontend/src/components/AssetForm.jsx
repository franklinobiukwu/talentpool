import { useState } from "react"
import '@mdxeditor/editor/style.css'
import { Editor } from "./editor"
import Button from "./Button"
import { useMutation } from "@tanstack/react-query"
import { postData } from "../hooks/useFetchPost"
import SubmitButton from "./SubmitButton"
import FormSelector from "./FormSelector"

const AssetForm = () => {
    const [hasStartDate, setHasStartDate] = useState(false)
    const [hasEndDate, setHasEndDate] = useState(false)

    const [assetCategory, setAssetCategory] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')

    const categories = [
        "Professional Summary", "Work Experience",
        "Education", "Skills", "Certifications & Licenses",
        "Contact Information", "Projects", "Awards and Honors",
        "Publications", "Professional Affiliations", "Languages",
        "Volunteer Experiences", "Hobbies and Interests", "References"
    ];


    const {mutate, isPending, isError, error} =useMutation({
        mutationKey: ['asset'],
        mutationFn: postData,
        onSuccess: (data) => {
            console.log(`Success creating asset`, data.data)
            setStartDate('')
            setEndDate('')
            setTitle('')
            setSubtitle('')
            setDescription('')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(isPending, "is Pending")
        console.log(startDate, endDate, title, subtitle,description, "Raw form data")
        if (assetCategory==='' || (title==='' && subtitle === ''&& description === '')){
            alert('Form must not be blank')
            return
        }
        const formData = {assetCategory, startDate, endDate, title, subtitle, description}
        const cleanedFormData = Object.fromEntries(
            Object.entries(formData).filter(([_, value]) => value !== "")
        );
        console.log(cleanedFormData)
        /* === Post to Backend====*/
        mutate({endpoint: '/assets', data: cleanedFormData})
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-red-50">
                <div>
                {/* === Select Category ===*/}
                <div>
                    <FormSelector
                        name="category"
                        id="category"
                        options={categories}
                        label="Category"
                        style="flex flex-col"
                        setValue={setAssetCategory}
                    />
                </div>

                {/* ==== Has Start Date ==== */}
                <div>
                    <div className="flex">
                        <label
                            htmlFor="has-start-date"
                            className="mr-2"
                        >
                            Has Start Date
                        </label>
                        <input
                            type="checkbox"
                            name="has-start-date"
                            id="has-start-date"
                            value={hasStartDate}
                            onChange={(e) => setHasStartDate(e.target.checked)}
                        />
                    </div>
                    {hasStartDate && (
                        <input
                            type="date"
                            name="start-date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                        />
                    )}
                </div>
                {/* ==== Has End Date ==== */}
                <div>
                    <div className="flex">
                        <label
                            htmlFor="has-end-date"
                            className="mr-2"
                        >
                            Has End Date
                        </label>
                        <input
                            type="checkbox"
                            name="has-end-date"
                            id="has-end-date"
                            value={hasEndDate}
                            onChange={(e) => setHasEndDate(e.target.checked)}
                        />
                    </div>
                    {hasEndDate && (
                        <input
                            type="date"
                            name="start-date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                        />
                    )}
                </div>
                </div>
                {/* ==== Title and Subtitle ==== */}
                <div>
                    {/* ==== Title ==== */}
                    <div>
                        <label
                            htmlFor="title"
                            className="mr-2 font-medium text-md text-blue-primary block mb-1"
                        >
                                Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder={"title"}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                        />
                    </div>
                    
                    {/* ==== Subtitle ==== */}
                    <div>
                        <label
                            htmlFor="subtitle"
                            className="mr-2 font-medium text-md text-blue-primary block mb-1"
                        >
                                Subtitle
                        </label>
                        <input
                            type="text"
                            name="subtitle"
                            id="subtitle"
                            placeholder={"subtitle"}
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                        />
                    </div>
                </div>
                {/* ==== Description ==== */}
                <div>
                    <Editor
                        onChange={(e) => setDescription(e)}
                        value={description}
                    />
                </div>
                {/* ==== Submit ====*/}
                <div>
                    <SubmitButton
                        type="submit"
                        text="Create"
                        style="solid"
                        disabled={isPending}
                        isLoading={isPending}        
                    />
                </div>
                {isError && <div className="text-red-300 bg-red-50 border border-red-300 px-2 mt-5">{error.message}</div>}
            </form>
        </div>
    )
}
export default AssetForm
