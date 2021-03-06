import prism from 'prismjs';
import markdownit from 'markdown-it';
import implicitFigures from 'markdown-it-implicit-figures';
import loadPrismLanguage from './load-prism-language'

export function renderMarkdown(markdown) {
    const md = markdownit({
        html: true,
        highlight: (code, lang) => {
            if (!prism.languages[lang]) {
                try {
                    loadPrismLanguage(lang)
                } catch (e) {
                    let message = '';

                    if (lang == 'none') {
                        return code
                    }

                    message = `unable to find prism language '${lang}' for parsing`;
                    return code
                }
            }

            const grammar = prism.languages[lang];
            const highlightedCode = prism.highlight(code, grammar, lang)
            return highlightedCode
        }
    })

    md.use(implicitFigures)
    const result = md.render(markdown)
    return result
}

export default async function markdownToHtml(markdown) {
    return renderMarkdown(markdown)
}