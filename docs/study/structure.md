# How the Code is organized

Learn this page once and every B31 book becomes easier to navigate.

## One Code, many sections

ASME B31 is a single Code for Pressure Piping published as separate **sections**, each written for one kind of facility. The owner picks the section that most nearly applies, and different parts of one installation can use different sections (Introduction to B31.1-2016). Each section is self-contained: it carries its own design, materials, fabrication, examination and testing rules.

Alongside the construction sections sit **companion standards** that support them, such as B31.8S (gas pipeline integrity) and B31G (remaining strength of corroded pipe). They never replace a construction section.

## The shared chapter layout

B31.1, B31.5 and B31.9 follow the same chapter order, and B31.4 nearly so (its Chapter II is arranged by loads, stresses and criteria rather than in six parts):

| Chapter | Subject | What you find there |
| --- | --- | --- |
| I | Scope and definitions | What the section covers, what it excludes, jurisdictional diagrams, definitions |
| II | Design | Part 1 conditions and criteria (pressure, temperature, allowable stress); Part 2 pressure design of components; Parts 3 and 4 selection of components and joints; Part 5 flexibility and supports; Part 6 specific systems |
| III | Materials | Which materials are allowed and their limits |
| IV | Dimensional requirements | Component standards (ASME B16, B36 and so on) |
| V | Fabrication, assembly and erection | Welding, brazing, bending, heat treatment, assembly |
| VI | Inspection, examination and testing | Who inspects, which welds get examined and how, the pressure or leak test |
| VII+ | Operation, maintenance, corrosion | Mainly in the pipeline sections (B31.4 and B31.8); B31.1 also has a Chapter VII for its covered piping systems |

B31.8 is the exception. It starts with materials and welding (Chapters I and II) and puts design, installation and testing together in Chapter IV, because a pipeline is designed and built in the field as one process.

## Paragraph numbers line up

Each section numbers its paragraphs in its own hundreds: B31.1 uses 100s, B31.4 the 400s, B31.5 the 500s, B31.8 the 800s, and B31.9 the 900s (B31.3 uses the 300s). The last two digits usually mean the same topic in every section, so once you know where something is in one book, you can guess where it is in the others.

| Topic | B31.1 | B31.4 | B31.5 | B31.9 | B31.8 |
| --- | --- | --- | --- | --- | --- |
| Scope | 100.1 | 400.1 | 500.1 | 900.1 | 802 |
| Definitions | 100.2 | 400.2 | 500.2 | 900.2 | 803 to 805 |
| Design conditions | 101 | 401 (loads) | 501 | 901 | 840 |
| Allowable stress | 102.3 | 403.2, 403.3 | 502.3 | 902.3 | 841.1.1 (design formula) |
| Pressure design of components | 104 | 404 | 504 | 904 | 841.1, 831 |
| Pipe, fittings, valves, flanges | 105 to 108 | 404.1 to 404.7 | 505 to 508 | 905 to 908 | 831 |
| Welded joints | 111 | 404.8 | 511 | 911 | 820s |
| Threaded joints | 114 | 404.8 | 514 | 914 | 831 |
| Expansion and flexibility | 119 | 403.9 | 519 | 919 | 832 |
| Pipe supports | 120, 121 | 404.9 | 520, 521 | 920, 921 | 834, 835 |
| Materials | 123 | 423 | 523 | 923 | 810s |
| Dimensional standards | 126 | 426 | 526 | 926 | 814 |
| Welding | 127 | 434.8 | 527 | 927 | 820 to 827 |
| Preheat and heat treatment | 131, 132 | 434.8.8, 434.8.9 | 531 | 931 | 824, 825 |
| Examination | 136 | 436 | 536 | 936 | 826 |
| Pressure or leak test | 137 | 437 | 538 | 937 | 841.3 |

Paragraph numbers are from the free editions (B31.1-2016, B31.4-2016, B31.5-2016, B31.8-2016, B31.9-2014). Other editions keep most of them but not all: B31.4 has since regrouped its Chapter II, so B31.4-2002 and earlier books use 402.3, 404.1 and so on.

## How a paragraph is cited

A reference such as **para. 104.1.2(A)** reads: section B31.1 (the 100s), topic 104 (pressure design of components), subparagraph 104.1.2 (straight pipe under internal pressure), item (A). Tables and figures carry the number of the paragraph that introduces them, so **Table 136.4** belongs to para. 136.4. Mandatory appendices are part of the rules; nonmandatory appendices are guidance.

!!! note "Interpretations"
    When a paragraph is unclear, check ASME's free [Interpretation Database](https://cstools.asme.org/Interpretation/SearchInterpretation.cfm). Interpretations are the committee's formal replies to questions on specific paragraphs, and they are a good way to see how a rule is read in practice.

## Self-check

??? question "Where would you expect the pressure test rules in B31.9?"
    Paragraph 937, because testing is 137 in B31.1, 437 in B31.4 and 538 in B31.5 (B31.5 is one off). In B31.9-2014 it is para. 937, Leak Testing.

??? question "A colleague cites 'para. 403.3'. Which section, and what topic?"
    B31.4 (the 400s), criteria to prevent yield failure, with the stress limits in Table 403.3.1-1. It covers the same ground as B31.1 para. 102.3, which shows that the last two digits do not always line up.

??? question "Why does B31.8 not follow the common chapter order?"
    Gas pipelines are designed, built and tested in the field as one process, so B31.8 groups design, installation and testing in Chapter IV and opens with materials and welding.
