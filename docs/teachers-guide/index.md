# Python Programming Teacher's Guide

Welcome to the teacher's guide for *Learning Python: Resources for teaching Python to 5th graders and beyond, from beginning programmers to experienced developers.* This guide explains every feature of the textbook, how to use it in your classroom, and how to customize it for your students. No prior technical knowledge is assumed — every technical term is defined before it is used.

## About This Interactive Intelligent Textbook

### What is an Intelligent Textbook?

An **intelligent textbook** is a digital textbook that goes beyond static text and images. It includes interactive simulations, self-grading quizzes, a searchable glossary, and a structured map of how concepts relate to each other. The goal is to give students a richer, more engaging learning experience than a traditional printed textbook.

### The Five Levels of Intelligent Textbooks

Not all digital textbooks are created equal. We categorize intelligent textbooks into five levels based on how interactive and adaptive they are:

<iframe src="https://dmccreary.github.io/intelligent-textbooks/sims/book-levels/main.html" height="500px" scrolling="no"
  style="overflow: hidden;"></iframe>

| Level | Name | Description | Example Features |
|-------|------|-------------|-----------------|
| **Level 1** | Static Digital | A PDF or basic web version of a print textbook | Text and images only, no interactivity |
| **Level 2** | Interactive | Adds interactive elements like simulations, quizzes, and searchable glossaries | Skulpt labs, self-check quizzes, concept search |
| **Level 3** | Adaptive | Adjusts content based on student performance | Personalized learning paths, difficulty adjustment |
| **Level 4** | AI-Assisted | Includes an AI tutor that can answer student questions | Chatbot integration, automated feedback |
| **Level 5** | Fully Adaptive AI | Continuously learns from student interactions and optimizes the experience | Real-time content generation, predictive analytics |

**This textbook is a Level 2 Intelligent Textbook.** Students can run and modify Python code directly in their browser — no installation, no account — using Skulpt-powered interactive labs embedded in every chapter.

### What Makes This Textbook Different

- **Skulpt interactive labs** let students write and run Python code instantly in the browser — no software installation required
- **Turtle graphics** makes programming visual and immediately rewarding — students see their code draw shapes, patterns, and animations in real time
- **"See it, run it, modify it" framing** — every lesson is built around this cycle rather than passive reading
- **Predict before you run** — students form a hypothesis before executing code, building the habit of reasoning through programs
- **Learning graph** — a visual map showing how all 450 concepts connect and build on each other
- **Monty the Python** — a friendly mascot character who guides students through each chapter with tips, encouragement, and key insights
- **Completely free and open source** — licensed under Creative Commons for non-commercial use

## Adding Custom Python Labs

Teachers can add new interactive Python labs to the textbook using several different execution environments — from the zero-install Skulpt browser runner to full Docker containers.

**[Read the full guide: Adding Custom Python Labs](adding-custom-python-labs.md)**

That guide covers:

- **The Skulpt Lab skill** — for in-browser Python labs with turtle graphics (recommended for chapters 1–18)
- **The Docker Python Lab skill** — for running real Python in a sandboxed container
- **Nine execution environments** — a comparison table from Skulpt to Thonny to VS Code to Jupyter, with guidance on when to use each
- **A decision guide** — a flowchart for choosing the right lab type for your teaching context

## Using the Chapters

### Chapter Structure

The textbook contains **38 chapters** organized in a deliberate sequence. Each chapter builds on concepts from previous chapters, so students should work through them in order:

| Chapters | Topic Area |
|----------|-----------|
| 1–2 | Foundations (Welcome to Python, code structure, the Skulpt environment) |
| 3–5 | Core Concepts (variables, functions, turtle graphics) |
| 6–9 | Building Blocks (math, for loops, strings, if/else decisions) |
| 10–12 | Control Flow and Art (while loops, function parameters, colors and turtle art) |
| 13–18 | Data and Modules (user input, string methods, lists, modules, random numbers, math module) |
| 19–25 | Intermediate Python (booleans, tuples, sets, dictionaries, advanced collections, error handling, recursion, OOP) |
| 26–31 | Python in Practice (file I/O, standard library, JSON, dev tools, text processing, algorithms) |
| 32–35 | Applied Python (data visualization, NumPy, image processing, advanced turtle and events) |
| 36–38 | Advanced Topics (computational thinking, machine learning foundations, neural networks and MNIST) |

### What Each Chapter Contains

Every chapter follows a consistent structure:

1. **YAML front matter** — Metadata at the top of each chapter file (title, description, reading level, version). Students don't see this; it's used by search engines and the website builder.
2. **Summary** — A brief overview of what the chapter covers and what students will learn.
3. **Concepts covered** — A numbered list of the specific concepts addressed in the chapter, drawn from the learning graph.
4. **Prerequisites** — Links to prior chapters that should be completed first.
5. **Welcome from Monty** — A mascot admonition that introduces the chapter topic in Monty's friendly voice.
6. **Main content** — The core instructional material, written at a Grade 5–8 reading level. Includes tables, real-world examples, and embedded Skulpt labs.
7. **Predict before you run** — Before every Skulpt lab, Monty asks students to predict what the code will do. This is placed immediately above the lab so students form a hypothesis first.
8. **Skulpt labs** — Interactive Python programs embedded directly in the page. Students read the code, predict its output, run it, and then modify it.
9. **Learning checks** — Labs where a program is missing one key line (student adds it) or contains a small deliberate bug (student finds and fixes it).
10. **Monty admonitions** — Throughout the chapter, Monty appears 5–6 times to highlight key insights, offer tips, and warn about common mistakes.
11. **Key takeaways** — A numbered summary of the most important concepts, preceded by a celebration from Monty.

### Suggested Classroom Use

- **Before class**: Assign the chapter as reading homework. The Skulpt labs keep students engaged during independent reading — they can run every example without any setup.
- **During class**: Open the chapter on a projector. Read the "predict before you run" prompt aloud, let students discuss their predictions, then run the code together.
- **After class**: Assign the practice questions and learning checks. Use the quiz (separate page) for a quick formative assessment.
- **Pacing**: Each chapter is designed for approximately 2–3 class periods (90–135 minutes of instruction). Chapters with more Skulpt labs or complex topics (recursion, OOP, machine learning) may take longer.

## Using the Skulpt Interactive Labs

### What is a Skulpt Lab?

**Skulpt** is a Python interpreter compiled to JavaScript — meaning it runs entirely inside the student's web browser with no server, no installation, and no account required. Students can read a working Python program, run it instantly, change a number or a color, and run it again.

This "see it, run it, modify it" cycle is the primary teaching tool in chapters 1–18.

### How Skulpt Labs Work

Each Skulpt lab appears in the chapter text as an interactive area with:

- A **code editor** (a text area where students can modify the program)
- A **Run button** that executes the code immediately
- A **canvas** where turtle graphics renders inline next to the code
- A **Reset button** that restores the original program

Students don't need to install Python, open a terminal, or create any account. They can be writing and running Python within 30 seconds of opening the page.

### The Predict Before You Run Habit

Before every Skulpt lab, Monty asks students a specific, answerable question — "How many sides will the turtle draw?" or "What color do you think the output will be?" — before they click Run.

This habit of pausing to reason through code before executing it is one of the most valuable skills a beginning programmer can build. Encourage students to write down their prediction, not just think it.

### Learning Checks

Some labs are **learning checks** where:

- The program is almost complete but is missing one key line the student must add, OR
- The program contains a small, deliberate bug the student must find and fix

Learning checks labeled with Monty's "thinking" icon ask students to add a missing line. Those labeled with Monty's "warning" icon ask students to find and fix a bug.

### Tips for Using Skulpt Labs in Class

1. **Project them on a screen** — The canvas renders on any projector. Ask students to predict what shape will be drawn before you run it.
2. **Let students experiment** — After seeing the expected output, encourage students to change one number or color and predict the new result.
3. **Use the Reset button** — If a student's edits break the program, Reset restores the original in one click.
4. **No troubleshooting needed** — Because Skulpt runs in the browser, there is no Python installation to debug, no PATH to fix, and no version mismatch between students.

### Adding New Skulpt Labs

Any teacher can add new Skulpt labs to the textbook. See the [Adding Custom Python Labs](adding-custom-python-labs.md) guide for instructions, including the exact HTML block format and available execution environments.

## Using the Glossary

### What is the Glossary?

The **glossary** is an alphabetical list of all key terms used in the textbook, each with a precise, concise definition. It serves as a quick-reference dictionary for students encountering unfamiliar vocabulary.

### How to Access the Glossary

- Click **"Glossary"** in the left navigation sidebar from any page
- Use the browser's built-in search (Ctrl+F on Windows/Linux, Cmd+F on Mac) to find a specific term on the glossary page
- Use the site-wide **search bar** at the top of any page to search for a term across the entire textbook

### Tips for Using the Glossary in Class

- **Vocabulary preview** — Before starting a new chapter, have students look up the key terms in the glossary to build familiarity.
- **Definition matching** — Create a warm-up activity where students match glossary definitions to terms from the current chapter.
- **Student-generated definitions** — After reading a chapter, have students write their own definitions, then compare with the glossary.
- **Glossary quizzes** — Use glossary terms for quick formative assessments (flash cards, quiz games, etc.).

## Using the FAQ

### What is the FAQ?

The **FAQ** (Frequently Asked Questions) is a curated list of common questions students ask about Python programming, organized by topic. Each question includes a clear, concise answer written at the same reading level as the chapters.

### How the FAQ is Organized

The FAQ covers questions across all 38 chapters. Questions are grouped by topic area to make browsing easy.

### Tips for Using the FAQ in Class

- **Discussion starters** — Pick 2–3 FAQ questions at the start of class and have students discuss before revealing the answer.
- **Homework support** — Point students to the FAQ when they have questions outside of class hours.
- **Extension reading** — The FAQ often covers angles not addressed in the main chapter text, making it good supplementary material.
- **Test review** — Students can use the FAQ as a study guide before assessments.

## Using the Quizzes

### What Are the Quizzes?

Each chapter has an accompanying **quiz page** with multiple-choice questions designed for self-assessment. Quizzes test understanding of the concepts covered in that chapter and are aligned to specific items from the learning graph.

### How Quizzes Work

- Quizzes are accessed by clicking the **"Quiz"** link under each chapter in the left navigation
- Each quiz contains multiple-choice questions at varying Bloom's Taxonomy levels
- Questions are presented as expandable sections — students can click to reveal the answer and explanation after attempting the question
- Quizzes are **not graded automatically** — they are designed as formative self-check tools, not summative assessments

### Tips for Using Quizzes in Class

- **Exit tickets** — Have students complete the quiz at the end of a class period as a quick check for understanding.
- **Pre-reading check** — Assign the quiz before the chapter to see what students already know (diagnostic assessment).
- **Post-reading review** — Use the quiz after reading to identify concepts that need re-teaching.
- **Collaborative quiz** — Have students work in pairs to discuss each question before revealing the answer.
- **Custom assessments** — Use the quiz questions as a bank to create your own tests. The questions are openly licensed (see "Understanding the License" below).

### Bloom's Taxonomy Levels

Each quiz question is tagged with a **Bloom's Taxonomy** level. Bloom's Taxonomy is a framework that classifies thinking skills from simple to complex:

| Level | Name | What It Means | Example Verb |
|-------|------|--------------|-------------|
| L1 | Remember | Recall facts and definitions | Define, list, name |
| L2 | Understand | Explain concepts in your own words | Explain, describe, compare |
| L3 | Apply | Use concepts to solve problems | Write, demonstrate, trace |
| L4 | Analyze | Break down and examine relationships | Differentiate, organize, predict |
| L5 | Evaluate | Make judgments based on criteria | Assess, argue, justify |
| L6 | Create | Produce original work or solutions | Design, build, write a program |

A well-balanced assessment includes questions across multiple levels. The quizzes in this textbook primarily target levels L1–L4, with the learning checks and turtle graphics projects targeting L5–L6.

## Using the References

### What Are the References?

Each chapter has an accompanying **references page** with a curated list of approximately 10 high-quality sources that students can use for further reading. References prioritize Wikipedia articles for accessibility and reliability, supplemented by authoritative Python documentation and books.

### How References Are Organized

Each reference includes:

- **Title** — The name of the source
- **URL** — A clickable link to the source
- **Relevance** — A brief description of why this source is useful and how it connects to the chapter content

### A Note About Link Rot

**Link rot** is when a web link (URL) stops working because the page has been moved, renamed, or deleted. If you or your students encounter a broken link:

1. Try searching for the article title on the source website
2. Use the [Wayback Machine](https://web.archive.org/) to find archived versions of the page
3. Report the broken link using GitHub Issues (see "Feedback" below)

## Feedback

### Reporting Issues and Suggestions

This textbook is an open-source project hosted on **GitHub**, a website where software and content projects are developed collaboratively. You don't need to understand programming to report a problem or suggest an improvement.

### What is a GitHub Issue?

A **GitHub Issue** is like a support ticket — it's a way to report a bug, suggest an improvement, or ask a question. Each issue gets a unique number and can be discussed by the project team and community.

### How to Submit Feedback

1. Go to the textbook's GitHub repository: [dmccreary/learning-python](https://github.com/dmccreary/learning-python)
2. Click the **"Issues"** tab at the top of the page
3. Click the green **"New issue"** button
4. Give your issue a clear title (e.g., "Broken link in Chapter 5 references" or "Suggestion: Add lab for topic X")
5. In the description, provide as much detail as possible:
    - Which page or chapter has the problem
    - What you expected to see vs. what you actually see
    - Your browser and device (if relevant)
6. Click **"Submit new issue"**

You will need a free GitHub account to submit issues. If you prefer not to create an account, you can email feedback to the author using the contact page.

### Types of Feedback Welcome

- **Typos and errors** — factual mistakes, spelling errors, broken formatting
- **Broken links** — URLs that no longer work
- **Skulpt lab bugs** — programs that don't run or produce unexpected output
- **Content suggestions** — topics that should be covered, examples that could be improved
- **Accessibility issues** — content that is difficult to read or navigate for students with disabilities

## Understanding the License

### What is a Creative Commons License?

A **license** is a legal document that explains what others are allowed to do with a piece of work. A **Creative Commons (CC) license** is a standardized, easy-to-understand license used for educational and creative content. It tells you exactly what permissions you have without needing a lawyer.

### This Textbook's License

This textbook uses the **CC BY-NC-SA 4.0** license. Here's what each part means:

| Code | Full Name | What It Means |
|------|-----------|---------------|
| **CC** | Creative Commons | A standard open license |
| **BY** | Attribution | You must give credit to the original author |
| **NC** | Non-Commercial | You cannot use the material to make money |
| **SA** | Share-Alike | If you modify the material, you must share it under the same license |
| **4.0** | Version 4.0 | The version of the license (the current standard) |

### What You CAN Do

- **Copy** the entire textbook or individual chapters for your students
- **Share** the textbook link with other teachers, students, or parents
- **Print** chapters for classroom use
- **Modify** the content — add your own examples, remove sections, change the order
- **Translate** the content into other languages
- **Create derivative works** — build your own version of the textbook based on this one
- **Add your own Skulpt labs** — and submit them back via a pull request

### What You CANNOT Do

- **Sell** the textbook or charge students for access
- **Remove attribution** — you must credit the original author (Dan McCreary)
- **Use a different license** — if you modify and share, it must remain CC BY-NC-SA 4.0
- **Claim it as your own work** — the attribution requirement means you must acknowledge the original source

For the full legal text, see the [Creative Commons License](../license.md) page.

## Customizing Your Own Textbook

One of the most powerful features of this textbook is that you can create your own customized version. This section explains how, step by step.

### Key Technical Terms

Before we begin, here are some terms you'll need to understand:

- **Repository (repo)** — A folder on GitHub that contains all the files for a project. Think of it as the project's home directory.
- **Git** — A version control tool that tracks changes to files. It lets you see what changed, when, and by whom.
- **Clone** — Making a complete copy of a repository on your own computer.
- **Fork** — Making a complete copy of a repository on your own GitHub account (stays on GitHub, not your computer).
- **MkDocs** — The software that converts the textbook's markdown files into a website. You don't need to learn MkDocs deeply — just enough to make basic changes.
- **Markdown** — A simple text formatting language. If you can write an email, you can write Markdown. `**bold**` makes **bold**, `# Heading` makes a heading, and `-` makes a bullet point.
- **mkdocs.yml** — The main configuration file for the textbook website. It controls the site title, navigation structure, colors, and which features are enabled.

### Step 1: Create a GitHub Account

If you don't already have one, go to [github.com](https://github.com) and create a free account.

### Step 2: Fork or Clone the Repository

**Option A: Fork (easier, stays on GitHub)**

1. Go to [dmccreary/learning-python](https://github.com/dmccreary/learning-python)
2. Click the **"Fork"** button in the upper-right corner
3. This creates a copy in your own GitHub account that you can edit

**Option B: Clone (more control, works on your computer)**

1. Install Git on your computer ([git-scm.com](https://git-scm.com/))
2. Open a terminal (Command Prompt on Windows, Terminal on Mac)
3. Run this command:

```bash
git clone https://github.com/dmccreary/learning-python.git
```

This downloads the entire textbook to your computer.

### Step 3: Make Changes

All content files are in the `docs/` folder. They are written in **Markdown** (`.md` files) — plain text files with simple formatting. You can edit them with any text editor.

#### Changing the Title and Description

Open `mkdocs.yml` and edit these lines:

```yaml
site_name: "Your Custom Textbook Title"
site_description: "Your description here"
site_author: "Your Name"
```

#### Changing the Colors

In `mkdocs.yml`, find the `palette` section:

```yaml
theme:
  palette:
    primary: '#642580'    # Change to a hex color or named color
    accent: '#41BAC1'     # Change the accent color
```

MkDocs Material supports named colors (blue, red, green, purple, teal, etc.) or any CSS hex color code.

#### Adding Your Own Labs

See the [Adding Custom Python Labs](adding-custom-python-labs.md) guide for the full workflow, including Skulpt labs (zero-install, in-browser) and Docker labs (for more advanced topics).

### Step 4: Preview Your Changes Locally

1. Install Python (version 3.8 or newer) from [python.org](https://python.org)
2. Install MkDocs and the Material theme:

```bash
pip install mkdocs mkdocs-material
```

3. Navigate to the project folder and start the preview server:

```bash
cd learning-python
mkdocs serve
```

4. Open your browser to `http://127.0.0.1:8000/learning-python/` to see your customized version

The preview server watches for file changes. When you edit and save a Markdown file, the page automatically refreshes in your browser.

### Step 5: Publish Your Version

To publish your customized textbook as a free website using GitHub Pages:

```bash
mkdocs gh-deploy
```

This command builds the website and publishes it to `https://YOUR-USERNAME.github.io/learning-python/`. The process takes about 1–2 minutes.

## Customizing Your Analytics

### What is Web Analytics?

**Web analytics** is the process of measuring how visitors use a website — which pages they visit, how long they stay, and where they come from. For an educational textbook, analytics can help you understand which chapters students read most and which Skulpt labs they interact with.

### Google Analytics

This textbook includes **Google Analytics** — a free service from Google that tracks website visits. The author's analytics property is already configured, but if you create your own fork, you'll want to set up your own.

#### Setting Up Your Own Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com/) and sign in with a Google account
2. Create a new **property** (Google's term for a tracked website)
3. Google will give you a **Measurement ID** — a code that looks like `G-XXXXXXXXXX`
4. In your `mkdocs.yml`, update this section:

```yaml
extra:
  analytics:
    provider: google
    property: G-YOUR-MEASUREMENT-ID
```

5. Rebuild and deploy your site. Analytics data will start appearing within 24–48 hours.

#### What You Can Learn from Analytics

- **Which chapters are most/least visited** — helps you identify where students might be skipping content
- **Average time on page** — longer times may indicate engagement or difficulty
- **Device breakdown** — what percentage of students use phones vs. computers
- **Geographic distribution** — where your students are accessing from

### xAPI Monitoring (Advanced)

**xAPI** (Experience API, also called "Tin Can API") is an advanced standard for tracking detailed learning activities — not just page views, but specific interactions like "student ran the turtle graphics lab in Chapter 5" or "student answered quiz question 3 correctly."

#### What is an LRS?

An **LRS** (Learning Record Store) is a database that stores xAPI learning records. Think of it as a specialized analytics system designed specifically for education. If you use an LRS, you can track granular student learning data, such as which Skulpt labs a student ran, how many times they clicked Run before getting the expected output, and which learning checks they completed successfully.

#### Important: Regulatory Considerations

Before collecting student-specific data, be aware of these regulations:

- **FERPA** (Family Educational Rights and Privacy Act) — U.S. federal law that protects student education records. If you collect data that can identify individual students, you must comply with FERPA.
- **COPPA** (Children's Online Privacy Protection Act) — U.S. federal law that applies to children under 13. Since this textbook targets ages 10–14, COPPA may apply to your students.
- **State laws** — Many U.S. states have additional student privacy laws.
- **GDPR** (General Data Protection Regulation) — European Union law that applies if any of your students are in the EU.

**Recommendation**: The Google Analytics setup described above is anonymous by default — it tracks aggregate page views, not individual students. This is the safest approach for K–12 use. If you want individual student tracking via xAPI, consult your school district's data privacy officer before proceeding.

### Building a Student Progress Dashboard with AI

As AI tools become more accessible, it is becoming possible to build custom dashboards that visualize student progress through the textbook. For example:

- Which chapters each student has completed
- Quiz scores over time
- Skulpt lab engagement — how many labs a student ran and modified
- Concepts that need re-teaching based on quiz performance

Building such a dashboard requires programming knowledge (Python, JavaScript) and careful attention to student data privacy. This is an advanced topic beyond the scope of this guide, but the open-source nature of this textbook means all the data structures are available for developers to build upon.

## The Learning Graph

### What is a Learning Graph?

A **learning graph** is a visual map showing how concepts in the textbook depend on each other. It is structured as a **DAG** (Directed Acyclic Graph) — a diagram where arrows show which concepts must be understood before others.

For example, understanding recursion requires understanding functions and return values first. The learning graph makes these dependency chains visible. This textbook's learning graph covers all **450 concepts** across the 38 chapters, with zero dependency violations.

### How Teachers Can Use the Learning Graph

- **Prerequisite checking** — Before teaching a concept, verify that students have covered its prerequisites
- **Remediation** — If a student struggles with a concept, trace back to its prerequisites to find the gap
- **Curriculum mapping** — Compare the learning graph to your existing syllabus to identify coverage gaps
- **Enrichment** — Advanced students can explore concepts ahead of the current chapter by following the graph forward

The interactive Learning Graph Viewer is available in the "Learning Graph" section of the left navigation.

## Monty the Python: Your Pedagogical Agent

### What is a Pedagogical Agent?

A **pedagogical agent** is a character that appears throughout a textbook to guide students. Research shows that pedagogical agents improve student engagement and perception of learning — a phenomenon called the **persona effect**.

### How Monty Appears

Monty the Python appears as colored callout boxes (called **admonitions**) throughout each chapter. There are seven types:

| Type | Color | Purpose | Frequency |
|------|-------|---------|-----------|
| Welcome | Green | Introduces the chapter | Every chapter opening |
| Thinking | Orange | Highlights key insights, poses prediction questions | 1–2 per chapter |
| Tip | Green | Shares practical advice | As needed |
| Warning | Red | Alerts to common mistakes and bugs | As needed |
| Encourage | Blue | Supports students on harder concepts | Where students may struggle |
| Celebration | Purple | Celebrates progress | Every chapter ending |
| Neutral | Gray | General notes | As needed |

Monty appears no more than 5–6 times per chapter to avoid overuse. Mascot admonitions are never placed back-to-back.

### Tips for Teachers

- **Read Monty's tips aloud** — They're written in a conversational tone that works well when spoken
- **Use as discussion prompts** — Monty's "thinking" admonitions highlight the most important insight in the section
- **Point to "encourage" admonitions** for students who are frustrated with a concept — Monty's tone is specifically calibrated for that moment
- **The prediction prompts are interactive** — Ask the whole class to vote before you run the code; the reveal becomes a mini-lesson
