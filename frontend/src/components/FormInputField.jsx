import { useState } from "react"

const FormInputField = (props) => {

    const fieldTypes = ['Short Text', 'Date', 'Tel', 'URL', 'Email', 'Long Text']

        const keySample = [
                        "Job Title", "Company Name", "Location",
                        "Degree", "Technical Skill", "Project Title"
                        ]
    const valueSample = [
                            "Virtual Assistant", "Google Inc.", "Port Harcourt, Nigeria",
                            "BSc.", "Microsoft Office", "Design of Automatic Food Dispenser"
                        ]

    const sampleIndex = Math.floor(Math.random() * keySample.length)


    return (
        <div>
            {/* Asset Field */}
            <div className="flex gap-4">
                {/* Asset Type*/}
                <div>
                    <label
                        htmlFor="fieldType"
                        className="mr-2 font-medium text-md text-blue-primary block mb-1"
                    >Value Type</label>
                    <select
                        name="fieldType"
                        id="fieldType"
                        value={props.inputType}
                        onChange={(e) => props.setInputType(e.target.value)}
                        className="rounded border px-2 py-0.5 text-blue-primary"
                    >
                        {fieldTypes.map((fieldType, id) => (
                            <option key={id}>{fieldType}</option>
                        ))}
                    </select>
                </div>
                {/* Asset Value */}
                { props.inputType === 'Long Text'?
                    (<div>
                        {/* Textarea*/}
                        <label
                            htmlFor="inputValue"
                            className="mr-2 font-medium text-md text-blue-primary block mb-1"
                        >
                                Value
                        </label>
                        <textarea
                            type="text"
                            name="inputValue"
                            id="inputValue"
                            placeholder={props.valueSample}
                            value={props.inputValue}
                            onChange={(e) => props.setInputValue(e.target.value)}
                            className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                        ></textarea>
                    </div>)
                        :
                    (<div>
                        {/* Input Field */}
                        <label
                            htmlFor="inputValue"
                            className="mr-2 font-medium text-md text-blue-primary block mb-1"
                        >
                            Value
                        </label>
                        <input
                            type={`${props.inputType?props.inputType.toLowerCase():'text'}`}
                            name="inputValue"
                            id="inputValue"
                            placeholder={props.valueSample}
                            value={props.inputValue}
                            onChange={(e) => props.setInputValue(e.target.value)}
                            className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                        />
                    </div>)
                }

            </div>

        </div>
    )
}
export default FormInputField
