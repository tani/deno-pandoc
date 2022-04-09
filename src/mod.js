import MarkdownIt from "markdown-it"
import Pandoc from "markdown-it-pfm"

const options = { html: true }
const md = MarkdownIt(options).use(Pandoc)
/**
 * @param  {string} markdown
 * @return {string} html
 */
export default markdown => md.render(markdown)
