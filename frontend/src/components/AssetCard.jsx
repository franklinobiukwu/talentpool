import Markdown from "react-markdown"

const AssetCard = (props) => {

    const convertDate = (date) => {
        const dateObj = new Date(date)
        const formattedDate = dateObj.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
        console.log(formattedDate)
        return formattedDate
    }

    return (
        <div>
            <div className="rounded px-4 py-4 overflow-hidden shadow-sm shadow-blue-trans">
                {/* === Start and End Dates === */}
                <div>
                    {props.asset.startDate && <span>{convertDate(props.asset.startDate)}</span>}
                    {props.asset.endDate && <span> - {convertDate(props.asset.endDate)}</span>}
                </div>
                {/* === Title and Subtitle === */}
                <div>
                    {props.asset.title && (
                        <h1 className="font-bold text-lg text-blue-primary">{props.asset.title}</h1>
                    )}
                    {props.asset.subtitle && (
                        <h3 className="font-semibold mb-2 text-blue-trans">{props.asset.subtitle}</h3>
                    )}
                </div>
                {/* === Description === */}
                <div>
                    {props.asset.description && (
                        <div className="mb-2">
                        <Markdown>
                            {props.asset.description}
                        </Markdown> 
                        </div>
                    )}
                </div>
                {/* === Category Name === */}
                <div
                    className="flex"
                >
                    <div className="rounded bg-blue-50 px-2 text-sm font-semibold text-blue-primary">
                    {props.asset.assetCategory}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AssetCard
