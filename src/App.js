import { useState } from 'react';
import Stylesheets from './components/Stylesheets/Stylesheets';
import Canvas from './components/Canvas/Canvas';

import './App.css';

function App() {
    const [loaded, setLoaded] = useState(false);

    return (
        <main className="App">
            <Stylesheets onLoad={() => setLoaded(true)}/>
            {loaded && <Canvas />}
        </main>
    );
}

export default App;
