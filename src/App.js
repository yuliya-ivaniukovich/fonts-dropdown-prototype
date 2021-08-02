import { useEffect, useState } from 'react';
import Stylesheets from './components/Stylesheets/Stylesheets';
import Canvas from './components/Canvas/Canvas';

import { fetchFonts } from './api/fonts';
import stylesheets from './domain/stylesheets';
import { scanStylesheet } from './domain/fonts';

import './App.css';

function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchFonts().then((apiFonts) => {
            console.log('apiFonts', apiFonts);
        });

        if (loaded) {
            scanStylesheet(stylesheets[0].content).then((result) => {
                console.log(result);
            });
        }
    }, [loaded]);

    return (
        <main className="App">
            <Stylesheets onLoad={() => setLoaded(true)}/>
            {loaded && <Canvas />}
        </main>
    );
}

export default App;
