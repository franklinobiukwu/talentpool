import { useState } from "react";
import FormSelector from "./FormSelector.jsx";
import FormInputField from "./FormInputField.jsx";
import { FaMinus, FaPlus } from "react-icons/fa";

const AssetForm = () => {
    const [fields, setFields] = useState([
        { inputKey: '', inputValue: '' }, // Initial field
    ]);

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

    return (
        <div>
            <h3>New Category Name</h3>
            <form>
                <div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <FormSelector
                            name="category"
                            id="category"
                            options={cate}
                            label="Work Experience"
                        />
                    </div>
                    
                    {/* Dynamic input fields */}
                    {
                        fields.map((field, index) => (
                            <div key={index} className="flex">
                                <FormInputField
                                    inputKey={field.inputKey}
                                    inputValue={field.inputValue}
                                    setInputKey={(value) => updateField(index, 'inputKey', value)}
                                    setInputValue={(value) => updateField(index, 'inputValue', value)}
                                />

                                {/* Plus/Minus Buttons */}
                                {index === fields.length - 1 ? (
                                    <button type="button" onClick={addField}>
                                        <FaPlus />
                                    </button>
                                ) : (
                                    <button type="button" onClick={() => removeField(index)}>
                                        <FaMinus />
                                    </button>
                                )}
                            </div>
                        ))
                    }
                </div>
            </form>
        </div>
    );
};

export default AssetForm;

