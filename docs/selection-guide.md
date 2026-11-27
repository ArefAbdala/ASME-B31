# Choosing which PDF to open

The Introduction of B31.1-2016 makes the owner responsible for choosing the Code section that most nearly applies, and allows different sections for different parts of one installation. First check whether a regulator or the owner's specification already names a section and an edition, because that overrides everything below.

## Decision flow

Ask the questions top to bottom and stop at the first yes. Solid boxes are free PDFs listed in the [PDF library](sections.md); dashed boxes have no free PDF.

```mermaid
flowchart TD
    Q0{"Does a law or the owner's spec name a section?"} -- yes --> A0["Use that section and edition"]
    Q0 -- no --> Q1{"Hydrogen or hydrogen-mix service?"}
    Q1 -- yes --> A1["No free PDF: buy B31.12"]
    Q1 -- no --> Q2{"A pipeline, or its pump or compressor station?"}
    Q2 -- yes --> A2["B31.4-2016 if liquid or slurry<br/>B31.8-2016 if gas"]
    Q2 -- no --> Q3{"Refrigerant or coolant above 15 psi?"}
    Q3 -- yes --> A3["B31.5-2016"]
    Q3 -- no --> Q4{"Building piping within B31.9 limits?"}
    Q4 -- yes --> A4["B31.9-2014"]
    Q4 -- no --> Q5{"Power plant, central heating or boiler external piping?"}
    Q5 -- yes --> A5["B31.1-2016"]
    Q5 -- no --> A6["B31.3-2020<br/>(everything else, mainly process plants)"]
    classDef pdf fill:#e7f1fb,stroke:#2f6fd0,stroke-width:2px;
    classDef nopdf fill:none,stroke:#999,stroke-dasharray:5 4;
    class A2,A3,A4,A5,A6 pdf;
    class A1 nopdf;
```

??? info "The same flow as a list (easier on a phone or with a screen reader)"
    Stop at the first question you answer yes to.

    1. **Does a law or the owner's specification name a section?** Use that section and edition.
    2. **Hydrogen or hydrogen-mix service?** No free PDF: buy B31.12.
    3. **A pipeline, or its pump or compressor station?** [B31.4-2016](https://archive.org/download/pub.cfr.asme.b31.04.2016/asme.b31.04.2016.pdf) if liquid or slurry, [B31.8-2016](https://archive.org/download/pub.cfr.asme.b31.08.2016/asme.b31.08.2016.pdf) if gas.
    4. **Refrigerant or coolant above 15 psi?** [B31.5-2016](pdfs/asme.b31.05.2016.pdf).
    5. **Building piping within B31.9 limits?** [B31.9-2014](pdfs/asme.b31.09.2014.pdf).
    6. **Power plant, central heating or boiler external piping?** [B31.1-2016](https://archive.org/download/pub.cfr.asme.b31.01.2016/asme.b31.01.2016.pdf).
    7. **None of the above** (mainly process plants): B31.3 Process Piping, free as the [2020 edition](https://archive.org/download/pub.cfr.asme.b31.03.2020/asme.b31.03.2020.pdf).

A system that crosses a boundary, such as a pipeline entering a plant, gets a section on each side of the break point named in the design basis.

## Where scopes meet

At each boundary, open the PDF named for each side. Limits for B31.9 are quoted from B31.9-2014, para. 900.1.2.

| Boundary | Open this PDF when | Open the other when |
| --- | --- | --- |
| Buildings vs power | **B31.9-2014** for building piping within its limits: steam and condensate to 150 psig and 366°F, liquids to 350 psig and 250°F, compressed air and gas to 150 psig, minimum 0°F; carbon steel to NPS 48 and 0.50 in. wall, stainless to NPS 24 | **B31.1-2016** above any of those limits, or for a central plant serving several buildings. Boiler external piping follows the boundaries drawn in Fig. 900.1.2 of B31.9 and in B31.1 |
| Liquid vs gas pipelines | **B31.4-2016** for predominantly liquid products, including CO₂, anhydrous ammonia and slurries | **B31.8-2016** for predominantly gas, including gathering lines and compressor stations |
| Pipeline vs plant | **B31.4-2016** or **B31.8-2016** for the line, its pump, compressor, regulating and metering stations, and terminals | Inside a refinery or process plant the scope belongs to B31.3 (free [2020 edition](https://archive.org/download/pub.cfr.asme.b31.03.2020/asme.b31.03.2020.pdf)) |
| Refrigeration vs buildings | **B31.5-2016** for refrigerant and secondary coolant piping | **B31.9-2014** for chilled water and other water loops in a building |
| Gas pipeline integrity | **B31.8-2016** for design and construction | **B31.8S-2004** for the integrity management program, and **B31G-2012** to assess corroded pipe |

Fuel gas piping downstream of the meter is outside every PDF here; the B31.1-2016 Introduction points it to ANSI Z223.1 (NFPA 54), the National Fuel Gas Code.
