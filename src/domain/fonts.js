import postcss from 'postcss';

const postcssFontFaceDetector = () => ({
    postcssPlugin: 'postcss-font-face-detector',
    Once(root, { result }) {
        root.walkAtRules('font-face', (rule) => {
            rule.walkDecls('font-family', (decl) => {
                console.log('font-family: ', decl.value);
            });
        });

        result.messages.push({
            type: 'font-family',
            plugin: 'postcss-font-face-detector',
            fonts: null,
        });
    },
});

postcssFontFaceDetector.postcss = true;

export const scanStylesheet = (content) => postcss([postcssFontFaceDetector()]).process(content, { from: undefined });
