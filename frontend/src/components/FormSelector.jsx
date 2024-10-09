const FormSelector = (props) => {

    return (
        <div className={props.style}>
            <label
                htmlFor={props.name}
                className={`font-medium text-md text-blue-primary block mb-1 ${props.style && 'mr-5'}`}
            >{props.label}</label>
            <select 
                name={props.name} 
                id={props.name} 
                onChange={(e)=>props.setValue(e.target.value)}
                className="rounded border px-2 py-0.5 w-52"
            >
                <option value="" disabled selected> Select {props.label}</option>
                {
                    props.options.map(
                        (option) => (
                            <option
                                key={option.isoCode ? option.isoCode : option}
                                value={option.name ? option.name : option}
                            >
                                {option.name ? option.name : option}
                            </option>
                        ))
                }
            </select>
        </div>
    )
}
export default FormSelector
