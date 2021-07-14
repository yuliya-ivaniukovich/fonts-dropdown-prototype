import { useEffect, useState } from 'react';

import stylesheets, { fetchStylesheets } from '../../domain/stylesheets';

function Stylesheets({ onLoad }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchStylesheets().then(() => {
            setLoaded(true);
            onLoad && onLoad();
        })
    }, [onLoad]);

    return loaded && (stylesheets.map(({ href, content }) => (
        <style key={href} dangerouslySetInnerHTML={{ __html: content }} />
    )));
}

export default Stylesheets;
