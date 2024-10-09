import { useState } from "react"

const FormInputField = (props) => {

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
            {/* Asset Title */}
            <div className="flex gap-4">
                <div>
                    <label
                        htmlFor="inputKey"
                        className="mr-2 font-medium text-md text-blue-primary block mb-1"
                    >
                            Field
                    </label>
                    <input
                        type="text"
                        name="inputKey"
                        id="inputKey"
                        placeholder={props.keySample}
                        value={props.inputKey}
                        onChange={(e) => props.setInputKey(e.target.value)}
                        className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                    />
                </div>
                {/* Asset Subtitle */}
                <div>
                    <label
                        htmlFor="inputValue"
                        className="mr-2 font-medium text-md text-blue-primary block mb-1"
                    >
                            Value
                    </label>
                    <input
                        type="text"
                         name="inputValue"
                        id="inputValue"
                        placeholder={props.valueSample}
                        value={props.inputValue}
                        onChange={(e) => props.setInputValue(e.target.value)}
                        className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                    />
                </div>
            </div>

        </div>
    )
}
export default FormInputField
