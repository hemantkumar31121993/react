import Typeahead from "./typeahead.jsx"
import {useState} from "react"

function TypeaheadPage() {
    const [elements, setElements] = useState(["abcd", "def", "xyz"])
    const options = ["abcd", "def", "xyz", "1234", "567", "901901"]
    const displayFunc = x => x
    const constructorFunc = x => x
    return (
        <div>
            some label
            <Typeahead
                value={elements}
                options={options}
                onChange={setElements}
                displayFunc={displayFunc}
                constructorFunc={constructorFunc}
            />
            <div>
                {JSON.stringify(elements, null, 2)}
            </div>
        </div>
    )
}

export default TypeaheadPage