import React from 'react';
import {Container} from 'reactstrap';
//import ReactMarkdown from 'react-markdown';
import program from '../content/program.js';

//import markdown_it_collapsible from 'markdown-it-collapsible';
import ReactHtmlParser from 'react-html-parser';
//import rehypeRaw from 'rehype-raw';
//import remarkGfm from 'remark-gfm';
//import collapse from 'remark-collapse';
const markdown_it = require("markdown-it");
const markdown_it_collapsible = require("markdown-it-collapsible");
const md = markdown_it().use(markdown_it_collapsible);
var result = md.render(program);
export function Program() {
  return (
    <Container>
      {/*<ReactMarkdown remarkPlugins={[collapse]} source={program} className="content"/>*/}
      {ReactHtmlParser(result)}
    </Container>
  );
}
