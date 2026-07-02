# Beginning Python — From Blocks to Code with Monty

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/learning-python/)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Read the book at: **[https://dmccreary.github.io/learning-python/](https://dmccreary.github.io/learning-python/)**

## Overview

**Beginning Python — From Blocks to Code with Monty** is an interactive, AI-generated
intelligent textbook for students ages 10–13 who are ready to move from block-based
programming (like Scratch) into real, text-based Python.

Every lesson is built around inline, in-browser coding powered by **Skulpt**, a
JavaScript implementation of Python. Students can read a short working program,
click **Run** to see it execute instantly (no install, no account), and then modify
it — a color, a number, a direction — and run it again. Skulpt's built-in turtle
graphics give immediate visual feedback, so students see shapes, spirals, and
patterns appear the moment their code runs. Before most labs, a friendly mascot
named Monty asks students to *predict* what the code will do before they click Run —
a habit that builds real reasoning skills, not just copy-and-run familiarity.

The book covers 38 chapters spanning 450 concepts, validated against a full
concept-dependency learning graph so that every idea builds on what came before it.
Content, quizzes, glossary entries, and MicroSims are generated and curated with
Claude AI skills, making this a Level 2+ intelligent textbook with interactive,
hands-on elements throughout.

## Site Status and Metrics

| Metric | Count |
|--------|-------|
| Concepts in Learning Graph | 450 |
| Chapters | 38 |
| MicroSims | 31 |
| Glossary Terms | 338 |
| FAQ Questions | 83 |
| Quiz Questions | 380 |
| References | 380 |
| Total Words | 260,425 |
| Equivalent Pages | 1,057 |

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dmccreary/learning-python.git
cd learning-python
```

### Install Dependencies

This project uses MkDocs with the Material theme:

```bash
pip install mkdocs
pip install mkdocs-material
```

### Build and Serve Locally

Serve locally for development (with live reload):

```bash
mkdocs serve
```

Then open your browser to `http://localhost:8000`.

Build the static site:

```bash
mkdocs build
```

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch.

### Using the Book

- Use the left sidebar to browse chapters, or the search icon to search all content.
- Every chapter includes one or more inline Skulpt labs — read the code, predict what it
  will do, click **Run**, then modify it and run it again.
- Each chapter ends with a quiz and a list of annotated references.
- Explore the [Turtle Graphics Gallery](docs/turtle-graphics-gallery) and
  [MicroSims](docs/sims) for standalone interactive examples.

## Repository Structure

```
learning-python/
├── docs/                          # MkDocs documentation source
│   ├── chapters/                  # 38 chapters, each with content, quiz, references
│   │   ├── 01-welcome-to-python/
│   │   │   ├── index.md          # Chapter content with Skulpt labs
│   │   │   ├── quiz.md           # Chapter quiz
│   │   │   └── references.md     # Annotated references
│   │   └── ...
│   ├── sims/                      # Interactive p5.js and Skulpt MicroSims
│   ├── turtle-graphics-gallery/   # Turtle graphics example gallery
│   ├── learning-graph/            # Concept dependency graph and book metrics
│   ├── js/                        # Skulpt/CodeMirror lab runtime
│   ├── glossary.md                # ISO 11179-compliant term definitions
│   ├── faq.md                     # Frequently asked questions
│   └── license.md                 # License details
├── mkdocs.yml                     # MkDocs configuration
└── README.md                      # This file
```

## Reporting Issues

Found a bug, typo, or have a suggestion for improvement? Please report it:

[GitHub Issues](https://github.com/dmccreary/learning-python/issues)

When reporting issues, please include a description of the problem, steps to
reproduce (for bugs), and screenshots if applicable.

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**

- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit with a link to the original
- **NonCommercial** — No commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

See [docs/license.md](docs/license.md) for full details, including commercial licensing inquiries.

## Acknowledgements

This project is built on the shoulders of giants in the open source community:

- **[MkDocs](https://www.mkdocs.org/)** — Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** — Beautiful, responsive theme
- **[Skulpt](https://skulpt.org/)** — In-browser Python implementation powering every coding lab
- **[p5.js](https://p5js.org/)** — Creative coding library from NYU ITP, used in several MicroSims
- **[Claude AI](https://claude.ai)** by Anthropic — AI-assisted content generation
- **[GitHub Pages](https://pages.github.com/)** — Free hosting for open source projects

## Contact

**Dan McCreary**

- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)

Questions, suggestions, or collaboration opportunities? Feel free to connect on LinkedIn or open an issue on GitHub.
