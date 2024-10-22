import { useState } from "react";
import FormSelector from "./FormSelector.jsx";
import FormInputField from "./FormInputField.jsx";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "./Button.jsx";

const AssetForm = () => {
    const [fields, setFields] = useState([
        { inputKey: '', inputType: 'Short Text', inputValue: '' }, // Initial field
    ]);

    const [assetCategory, setAssetCategory] = useState('')
    const [assetName, setAssetName] = useState('')


    const cate = [
        "Professional Summary", "Work Experience", "Education", "Skills", "Certifications & Licenses"
    ];

    const addField = () => {
        setFields([...fields, { inputKey: '', inputValue: '' }]);
    };

    const removeField = (index) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    };

    const updateField = (index, key, value) => {
        const newFields = [...fields];
        newFields[index] = { ...newFields[index], [key]: value };
        setFields(newFields);
    };

    const handleSubmit = () => {
        console.log(assetName, assetCategory, fields)
    }

    return (
        <div className="rounded border shadow-sm px-5 py-5">
            <h3 
                className="text-blue-primary font-inter font-bold text-xl mb-5"
            >New Category Name</h3>
            <form>
                <div>
                    {/*-------- Asset Name and Category Name----------*/}
                    <div className="flex gap-4">
                    {/* Asset Name */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="assetName"
                            className={`font-medium text-md text-blue-primary block mb-1 mr-5`}
                        > Asset Name</label>
                        <input
                            name="assetName"
                            id="assetName"
                            placeholder="Ikoyi, Lagos Address"
                            value={assetName}
                            onChange={(e) => setAssetName(e.target.value)}
                            className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                        />
                    </div>
                    
                    {/* Category Name */}
                    <div>
                        <FormSelector
                            name="category"
                            id="category"
                            options={cate}
                            label="Category"
                            style="flex flex-col"
                            setValue={setAssetCategory}
                        />
                    </div>
                    </div>
                    {/* Dynamic input fields */}
                    {
                        fields.map((field, index) => (
                            <div key={index} className="flex">
                                <div className="mr-2 mt-5 border-red-50 rounded">
                                    <FormInputField
                                        inputKey={field.inputKey}
                                        inputType={field.inputType}
                                        inputValue={field.inputValue}
                                        setInputKey={(value) => updateField(index, 'inputKey', value)}
                                        setInputType={(value) => updateField(index, 'inputType', value)}
                                        setInputValue={(value) => updateField(index, 'inputValue', value)}
                                    />
                                </div>

                                <div className="flex items-end">
                                    {/* Plus/Minus Buttons */}
                                    {index === fields.length - 1 ? (
                                        <button
                                            type="button" onClick={addField}
                                            className="p-1 rounded-full border"
                                        >
                                            <FaPlus 
                                                className="text-blue-primary"
                                            />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => removeField(index)}
                                            className="p-1 rounded-full border"
                                        >
                                            <FaMinus
                                                className="text-blue-primary"
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                    {/* Submit Button */}
                    <div className="mt-5">
                        <Button
                            text="Create"
                            style="solid"
                            onClick={(e) => {e.preventDefault(); handleSubmit() }}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AssetForm;

