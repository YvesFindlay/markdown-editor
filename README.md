# Markdown editor

This project is an emulation of minified markdown editor built in React. This project uses the context api as it's component-wide state management tool. The context api tracks and updates the changes to the input and renders the subsequent output.

## Functionality

Supports general functonality of markdown file types e.g: headings, subheadings etc.

## Libraries and Plugins

### React-markdown

The Markdown editor uses the react-markdown plugin to parse markdown commands.

### remarkGfm

Which adds support for strikethrough, tables, tasklists and URLs directly.

## Tools

React, React context API, Javascript, Styled components, React-markdown

## Installation

To run this project, install it locally using npm:

```
downoad or clone markdown-editor
$ cd ../markdown-editor
$ npm install
$ npm start

```

## Commands

'# + space' - Biggest Heading

'## + space' - Subheading

'### + space' - Sub subheading

'enter' - next line

'&nbsp (with semi colon here) + space + space + enter' - new line

'\*\*' - emphasis (or bold text)

'~some-text~' - strikethrough
