import { Puff } from "react-loader-spinner";

const SubmitButton = (props) => {
    
    const transparent = `px-4 py-1.5 border border-blue-primary 
                            rounded text-blue-primary font-bold
                            font-inter flex items-center`;

    const solid = `px-4 py-1.5 bg-blue-primary text-white-primary
                        rounded border border-blue-primary font-bold font-inter flex items-center
                    ${(props.disabled || props.isLoading)&&'bg-blue-trans border-none'}`;
    return (
        <button
            type={props.type || "button"}
            onClick={props.onClick}
            disabled={props.disabled || props.isLoading}
            className={props.style && (props.style == 'transparent' ? transparent : solid)}
        >
        {props.isLoading? 
            (<Puff
                visible={true}
                color="#fafafa"
                height="25"
                width="40"
                radius={"110"}
                ariaLabel="rings-loading"
                />):
            (props.text)
        }
        </button>
    )
}
export default SubmitButton
