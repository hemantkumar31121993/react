import {useRef, useState} from "react";
import './typeahead.css';

function TypeaheadElement({element, index, displayFunc, onClose}) {
    return (
        <span className="typeahead-element">
            <span className="typeahead-element-content">{displayFunc(element)}</span>
            <button onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onClose(index)
            }}>
                X
            </button>
        </span>
    )
}

function Typeahead({
                       value: elements,
                       options = [],
                       displayFunc = (x => x),
                       constructorFunc = (x => x),
                       onChange: setElements
                   }) {
    // const [elements, setElements] = useState(value);
    const ref = useRef(null);

    const [focused, setFocused] = useState(false);

    function onOptionSelection(option) {
        console.log(option)
        setElements(p => [...p, option])
        setFocused(false);
    }

    function handleKeyEnter(e) {
        if (e.key === 'Enter' && e.target.value !== '') {
            const newValue = constructorFunc(e.target.value);
            setElements(p => [...p, newValue]);
            if (ref.current) {
                ref.current.value = '';
            }
        } else if (e.target.value === '' && e.key === 'Backspace') {
            setElements(p => [...p.slice(0, -1)]);
        }
    }

    function removeElement(i) {
        setElements(p => [...p.slice(0, i), ...p.slice(i + 1)]);
    }

    return (
        <div className="typeahead">
            <div className="typeahead-container" onClick={() => ref.current && ref.current.focus()}>
                <span className="typeahead-elements">
                    {elements.map((e, i) =>
                        <TypeaheadElement
                            key={i}
                            element={e}
                            index={i}
                            displayFunc={displayFunc}
                            onClose={removeElement}>
                        </TypeaheadElement>)
                    }
                    <input className="typeahead-input" ref={ref} onKeyDown={handleKeyEnter}
                           onFocus={() => setFocused(true)}
                           onBlur={() => setTimeout(() => setFocused(false), 500)}></input>
                </span>
            </div>
            {focused && <div className="typeahead-options-container">
                {options.map((option, i) => (
                    <div className="typeahead-option"
                         onClick={() => onOptionSelection(option)}>{displayFunc(option)}</div>
                ))}
            </div>}
        </div>
    )
}

export default Typeahead;