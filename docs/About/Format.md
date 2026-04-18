---
sidebar_label: Format
sidebar_position: 3
title: Format
--- 

> This project is built on [Docusaurus](https://docusaurus.io) and deployed on [GitHub Pages](https://github.com/davidwenxuanzhang/Art-of-Derivation). Below are detailed format information.

## Document Format and Storage Structure

- All documents are stored as Markdown files and use either the `.md` or `.mdx` extension.
- All document file names are capitalized and connected using hyphens (`-`).
- All documents are stored under the `docs` directory, organized by `sidebars.js`.
- All referenced images (such as `.jpg`, `.png`, `.svg`) are stored in the `static/img` directory.

## Markdown Format

- All documents start with the [front matter](https://docusaurus.io/docs/markdown-features#front-matter) to ensure the consistent format and navigation. 
- More additional details, refer to [Markdown Features | Docusaurus](https://docusaurus.io/docs/markdown-features).

## Math Format

- All mathematical expressions are rendered using KaTeX with `remark-math` and follow standard $\LaTeX$ syntax. 

### <span className="math-keyword">Derivation</span> Format

- All <span className="math-keyword">Derivation</span> processes are placed in collapsible blocks, implemented using `<details>`+`<summary>`.
- All <span className="math-keyword">Derivation</span> processes are organized using the `align*` enviornment.
- All <span className="math-keyword">Derivation</span> processes are completed with `\blacksquare` ($\blacksquare$), indicating Q.E.D. (_quod erat demonstrandum_), meaning "that which was to be demonstrated".

### Admonition Format

:::note Note
The Gray Admonition provides extra and unnecessary notes and information.
:::

:::tip Definition
The Green Admonition provides definition about the given topic.  
:::

:::info Property, Identity, Solution...
The Blue Admonition provides Properties, Identities, Solutions, and so on that is **NOT** designed to show the collapsable <span className="math-keyword">Derivation</span> process.
:::

<details>
<summary><span className="math-keyword">Derivation</span></summary>

The collapsable Admonition provides detailed process for <span className="math-keyword">Derivation</span>
</details>

:::warning Question
The Orange Admonition highlights the question for examples. 
:::

:::danger Warning
The Red Admonition provides information that is important to know. 
:::

## Theme Format

- The theme color of this project is <span style={{ color: '#4b0082' }}>**Indigo**</span> (`#4b0082`) in light mode and <span style={{ color: '#ff61ff' }}>**Magenta**</span> (`#ff61ff`) in dark mode.  
- The theme color is exclusively reserved for <span className="math-keyword">Derivation</span> and its related concepts, rather than decorative styling.  

## Favicon

The idea of the favicon came from $\because$ (`$\because$`) and $\therefore$ (`$\therefore$`).
