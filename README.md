# ASME B31

A guide to the ASME B31 Code for Pressure Piping, built around eight free PDFs of B31 editions (2004 to 2020) published by Public.Resource.Org. It tells you which PDF covers your piping, and names another code only where no free PDF covers the scope.

## Study website

The guide is also published as a study website with reading maps that open each PDF at the right page, plain-language notes, worked examples and self-check questions: **https://arefabdala.github.io/ASME-B31/** (deployed by GitHub Actions from `main`; see `.github/workflows/pages.yml`). To preview it locally, run `pip install -r requirements.txt` and then `mkdocs serve`.

## Contents

| Page | What it answers |
| --- | --- |
| [PDF library](docs/sections.md) | Which PDF covers which scope, and the scopes no free PDF covers |
| [Selection guide](docs/selection-guide.md) | A decision flow to the right PDF, and which PDF to open at each boundary |
| [Companion standards](docs/companion-standards.md) | B31.8S and B31G, plus the withdrawn B31.2 and B31.11 |
| [Sources](docs/sources.md) | Where each PDF comes from, and the newer editions |

## At a glance

| Scope | Free PDF |
| --- | --- |
| Power and central heating | B31.1-2016 |
| Liquid and slurry pipelines | B31.4-2016 |
| Refrigeration | B31.5-2016 |
| Gas pipelines and distribution | B31.8-2016, B31.8S-2004, B31G-2012 |
| Buildings | B31.9-2014 |
| Process plants | B31.3-2020 |
| Hydrogen | none: buy B31.12 |

## Caveats

These are older editions, good for learning the Code and choosing a section. For design or compliance work, use the edition your jurisdiction or contract requires. This repository does not reproduce Code text, and it is not a substitute for the Code or for a qualified engineer.
