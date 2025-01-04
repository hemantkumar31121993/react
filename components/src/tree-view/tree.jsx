import File from "./file";
import './tree.css';
import {useState} from "react";

function TreeView({root, nodes}) {
    const [showChildren, setShowChildren] = useState(false)
    return <div className="node-container">
        <div className="node" onClick={() => setShowChildren(p => !p)}>
            {root}
        </div>
        {showChildren && <div className="node-children">
            {nodes.map(node => {
                switch (node.type) {
                    case 'file':
                        return <File key={node.id} id={node.id}></File>
                    case 'directory':
                        return <TreeView key={node.id} root={node.id} nodes={node.nodes}/>
                    default:
                }
            })}
        </div>}
    </div>
}

export default TreeView