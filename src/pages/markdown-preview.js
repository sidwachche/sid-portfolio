import React, { useState } from "react";
import "./markdown-preview.css";
import Layout from "../Components/Layout";
import marked from "marked";
import SEO from "../Components/SEO";
import GitLink from '../Components/GitLink';

const iniText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const options = { breaks: true };

function Preview({ text }) {
	return (
		<div
			id="preview"
			dangerouslySetInnerHTML={{
				__html: marked(text, options),
			}}
		/>
	);
}

function MarkdownPreview() {
	const [text, setText] = useState(iniText);

	return (
		<>
			<SEO title="Markdown Preview App"
				description="Freecodecamp Frontend library project. Markdown Preview App built with React.">
			</SEO>
			<GitLink link="https://codepen.io/sidwachche/pen/zYrPBag" />
			<section className="markdown-grid">
				<section className="markdown-input">
					<h2>Markdown</h2>
					<hr style={{ width: "100%" }}></hr>
					<textarea
						name="write"
						id="editor"
						cols="30"
						rows="10"
						className="markdown-textarea"
						onChange={(e) => setText(e.target.value)}
						value={text}
					></textarea>
				</section>
				<section className="preview-section">
					<h2>Preview</h2>
					<hr></hr>
					<Preview text={text} />
				</section>
			</section>
		</>
	);
}
function App() {
	return (
		<Layout>
			<MarkdownPreview />
		</Layout>
	)
}
export default App;
