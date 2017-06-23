import markdownIt from 'markdown-it'
import mdItHljs from 'markdown-it-highlightjs'
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

  md.use(mdItHljs)

	return md.render(source)
}
