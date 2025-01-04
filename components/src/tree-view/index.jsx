import TreeView from './tree';

function Index() {
    const nodes = [
        { id: 'abcd', type: 'file' },
        {
            id: 'xyz', type: 'directory', nodes: [
                { id: 'abcd', type: 'file' },
                {
                    id: 'xyz', type: 'directory', nodes: [

                    ]
                }
            ]
        },
        { id: 'abcd', type: 'file' },
        {
            id: 'xyz', type: 'directory', nodes: [
                { id: 'abcd', type: 'file' },
                {
                    id: 'xyz', type: 'directory', nodes: [

                    ]
                }
            ]
        }
    ]

    return <TreeView root={"/"} nodes={nodes}></TreeView>
}

export default Index;