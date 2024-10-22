import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div>
            <h1>Hey wena!</h1>
            <p>An unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message }</i>
            </p>
        </div>
    )
}
export default ErrorPage
