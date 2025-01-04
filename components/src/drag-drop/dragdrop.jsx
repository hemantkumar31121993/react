import React, { useState } from 'react'

function Tool({ tag, className, text, onDrag }) {
    return React.createElement(
        tag,
        {
            className: className,
            draggable: true,
            onDrag: onDrag,
        },
        text
    )
}

function Implemetation({ tag, className, text, onClose }) {
    return React.createElement(
        tag,
        {
            className: `${className} d-flex`,
        },
        <div className="flex-fill">{text}</div>,
        <div>
            <button
                className="border-0 bg-transparent px-4 font-monospace"
                onClick={onClose}
            >
                x
            </button>
        </div>
    )
}

function DragDrop({ props }) {
    const tools = [
        {
            tag: 'div',
            className: 'bg-danger rounded text-center py-4 text-light',
            text: 'Red',
        },
        {
            tag: 'div',
            className: 'bg-primary rounded text-center py-2 text-light',
            text: 'Blue',
        },
        {
            tag: 'div',
            className: 'bg-warning rounded text-center py-1',
            text: 'Yellow',
        },
        {
            tag: 'div',
            className: 'bg-danger-subtle rounded text-center py-4',
            text: 'Pink',
        },
        {
            tag: 'div',
            className: 'bg-primary-subtle rounded text-center py-2',
            text: 'Light Blue',
        },
        {
            tag: 'div',
            className: 'bg-warning-subtle rounded text-center py-1',
            text: 'Light Yellow',
        },
    ]

    const [draggedElement, setDraggedElement] = useState(null)
    const [implemenations, setImplemenations] = useState([])

    function handleOnDrop(e) {
        setImplemenations((p) => [...p, draggedElement])
    }

    return (
        <div className="row border rounded">
            <div className="col-3 py-1 border-end d-flex flex-column gap-1">
                {tools.map((tool) => (
                    <Tool {...tool} onDrag={() => setDraggedElement(tool)} />
                ))}
                <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => setImplemenations([])}
                >
                    Clear
                </button>
            </div>
            <div
                className="col-9 py-1 d-flex flex-column gap-1"
                onDragEnter={(e) => {
                    e.preventDefault()
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleOnDrop}
            >
                {implemenations.map((impl, i) => (
                    <Implemetation
                        {...impl}
                        onClose={() =>
                            setImplemenations((p) => [
                                ...p.slice(0, i),
                                ...p.slice(i + 1),
                            ])
                        }
                    />
                ))}
            </div>
        </div>
    )
}

export default DragDrop
