import { Puff } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Button = (props) => {
    const transparent = `px-4 py-1.5 border border-blue-primary 
                            rounded text-blue-primary font-bold
                            font-inter flex items-center text-sm`;

    const solid = `px-4 py-1.5 bg-blue-primary text-white-primary
                        rounded border border-blue-primary font-bold font-inter flex items-center text-sm`;

    return (
        <button
            onClick={props.onClick&&props.onClick}
            disabled={props.disabled&&props.disabled}
            type="button"
        >
        <Link to={props.path}>
        {props.isLoading?(
            <Puff
                visible={true}
                color="#fafafa"
                height="25"
                width="40"
                radius={"110"}
                ariaLabel="ring-loading"
            />
        ):
            <div className={props.style && (props.style == 'transparent' ? transparent : solid)}>
                {props.icon &&

                    <div className="mr-2">
                        {props.icon}
                    </div>
                }
                <div>
                    {props.text}
                </div>
            </div>
        }
        </Link>
        </button>
    )

}

export default Button
