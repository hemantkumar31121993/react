import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TreeViewPage from './tree-view'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import TypeaheadPage from './typeahead'
import DragDropPage from './drag-drop/index.jsx'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/react/tree-view" className="me-2">
                    Tree View
                </Link>
                <Link to="/react/typeahead" className="me-2">
                    Typeahead
                </Link>
                <Link to="/react/drag-n-drop" className="me-2">
                    Drag-n-Drop
                </Link>
            </div>
            <div className="p-2">
                <Routes>
                    <Route path="/react/tree-view" element={<TreeViewPage />} />
                    <Route
                        path="/react/typeahead"
                        element={<TypeaheadPage />}
                    />
                    <Route
                        path="/react/drag-n-drop"
                        element={<DragDropPage />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
