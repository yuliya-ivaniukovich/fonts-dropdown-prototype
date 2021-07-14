const stylesheets = [{
    href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    content: null,
}, {
    href: 'https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap',
    content: null,
}];

export async function fetchStylesheets() {
    const promises = stylesheets.map((stylesheet) => (
        fetch(stylesheet.href)
            .then((response) => response.text())
            .then((content) => {
                stylesheet.content = content;
            })
    ));
    await Promise.all(promises);
}

export default stylesheets;
