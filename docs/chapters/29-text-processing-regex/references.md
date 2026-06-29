# References: Text Processing and Regular Expressions

1. **Regular Expression** — Wikipedia.
   [https://en.wikipedia.org/wiki/Regular_expression](https://en.wikipedia.org/wiki/Regular_expression)
   Covers the history, theory, and syntax of regular expressions across programming languages, explaining how pattern-matching engines work — foundational background for understanding what Python's `re` module is doing under the hood.

2. **String Searching Algorithm** — Wikipedia.
   [https://en.wikipedia.org/wiki/String-searching_algorithm](https://en.wikipedia.org/wiki/String-searching_algorithm)
   Explains how computers efficiently scan text for patterns, giving students conceptual grounding for why `re.search()` and `re.findall()` are faster than manually looping through characters.

3. **Finite-State Machine** — Wikipedia.
   [https://en.wikipedia.org/wiki/Finite-state_machine](https://en.wikipedia.org/wiki/Finite-state_machine)
   Describes the state-machine model that regex engines use internally to match character classes and quantifiers, helping students visualize how a pattern like `\d+` steps through input text one character at a time.

4. **Automate the Boring Stuff with Python** by Al Sweigart (No Starch Press; free online at automatetheboringstuff.com).
   Chapter 7 of this book is devoted entirely to regular expressions in Python, walking through `re.search`, `re.findall`, `re.sub`, groups, and character classes with practical, real-world examples perfectly suited to this chapter's topics.

5. **Python Crash Course** by Eric Matthes (No Starch Press).
   Provides clear, beginner-friendly coverage of Python's string-handling capabilities and the `re` module, with exercises that reinforce pattern matching and text transformation concepts introduced in this chapter.

6. **Python `re` Module — Official Documentation**
   [https://docs.python.org/3/library/re.html](https://docs.python.org/3/library/re.html)
   The authoritative reference for every function, flag, and special sequence in Python's `re` module, including full syntax for character classes, quantifiers, anchors, and compiled pattern objects used throughout this chapter.

7. **Regular Expressions in Python — Real Python**
   [https://realpython.com/regex-python/](https://realpython.com/regex-python/)
   A thorough, step-by-step tutorial covering `re.search`, `re.findall`, `re.sub`, groups, and lookaheads with annotated examples and interactive exercises ideal for students learning regex for the first time.

8. **Python RegEx — W3Schools**
   [https://www.w3schools.com/python/python_regex.asp](https://www.w3schools.com/python/python_regex.asp)
   Offers a quick-reference page for Python's `re` module with runnable code snippets for each major function and a concise metacharacter table — great for students who want a cheat-sheet alongside this chapter.

9. **Python Regular Expressions — Programiz**
   [https://www.programiz.com/python-programming/regex](https://www.programiz.com/python-programming/regex)
   Presents regular expressions with clear diagrams and beginner-friendly explanations of quantifiers, character classes, and the difference between `re.search` and `re.match`, directly supporting the concepts taught in this chapter.

10. **Python Regular Expression Tutorial — GeeksforGeeks**
    [https://www.geeksforgeeks.org/regular-expression-python-examples/](https://www.geeksforgeeks.org/regular-expression-python-examples/)
    Provides numerous worked examples of `re.search`, `re.findall`, `re.split`, and `re.sub` with annotated output, offering students extra practice problems and pattern-matching walkthroughs that reinforce this chapter's exercises.
