import { useState } from "react"
import { 
    MDXEditor, headingsPlugin, listsPlugin,
    quotePlugin, thematicBreakPlugin } from "@mdxeditor/editor"
import '@mdxeditor/editor/style.css'

const AssetForm = () => {
    const [hasStartDate, setHasStartDate] = useState(false)
    const [hasEndDate, setHasEndDate] = useState(false)

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div>
            <form>
                <div className="flex">
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
                    <MDXEditor
                        markdown="#helloworld"
                        plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin()]}
                    />
                </div>
            </form>
        </div>
    )
}
export default AssetForm
