import markdownIt from 'markdown-it'
import hljs from 'highlight.js'

export default function parser(source){
	const md = new markdownIt({
		html: true,
		linkify: true,
		highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) { console.error(err.stack); } // eslint-disable-line no-console
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) { console.error(err.stack); } // eslint-disable-line no-console

      return ''
    },
	})

	return md.render(source)
}
