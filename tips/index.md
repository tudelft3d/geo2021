---
layout: page
title: Research & writing tips
color: primary-60
logo: fa-lightbulb
permalink: /tips/
---

<div class="box" markdown="1"> 

* Table of Content
{:toc}

</div>

- - -

#### Thesis Boost Days

The university is offering regular sessions where you can join other students writing their thesis with the support of writing coaches.

More information [here](https://www.tudelft.nl/en/tpm/itav/writing-centre/writing-coaching-for-bachelor-and-master-students/thesis-boost-day).

- - -

#### Start writing early in the process

Writing 80 pages takes more than 2 weeks. 
If you manage to write your whole thesis in 2 weeks, then you're surely a super-hero, or the quality of what you wrote is probably poor.
Start to write *early* in the graduation process, ideally by P3 you should have written most of your "Related work" section, and parts of some sections.

Start early, but do so with a plan.
First you should plan what the structure of your thesis will be.
We think it is best to first draft a table of content and discuss it with your supervisors. 
Write down all the chapters, sections, and sub-sub-sections names with a 1-liner that describes what you will be discussing there.
Once your supervisors agree that the structure is logical and complete, then you can start writing without fearing that you'll need to restructure the whole document at a later stage.

Another reason to start write early is that often we think we have covered all aspects of a topic, and we're convinced that we understand it.
However, writing almost always highlights weaknesses and missing experiments.
Thus, start write early.

- - -

#### Read many scientific papers and theses 

The best way to get to know how to write and structure a thesis is to read many of them.
We propose some [examples of good MSc Geomatics theses]({{ "/exampletheses/" | prepend: site.baseurl }}) in recent years.
Scientific articles are also a good way to get to know how to write "in a academic style".

- - -

#### It's the thesis that counts

What you produce---a thesis---is the main deliverable that will be judged for your final mark.
This document should have a scientific character, and should document your results and the engineering decisions you took to achieve your main result.
While other aspects will be evaluated, such as these:

  - whether you worked independently or not;
  - how you carried out the research project;
  - how complex is your topic;
  - your main contribution to the state-of-the-art of your area of research.

what can be best judged (ie objectively) by the committee at the end is the *thesis*.
This means that software products or prototypes that you developed may only be used to prove that your methodology or theory works.
These are not the main goal of the project.
(Even if you have produced great code that runs faster and smoother than that of your colleague, she might get a higher mark if she produces a "better" thesis.)

Keep this in mind, and allocate enough time for the writing up.


- - -

#### Report on the good and the bad aspects of your method

Be honest in reporting, ie highlight where your results are good, but do not forget to also document the cases for which your work is not optimal (and try to explain why, and link potential solutions to the state-of-the-art methodologies).

- - -

#### Use LaTeX and/or Overleaf (and not Word)

We offer a [LaTeX template](https://github.com/tudelftgeomatics/thesis_template) and an [Overleaf template](https://www.overleaf.com/latex/templates/tudelft-msc-geomatics-template-for-final-thesis/bmwmzbyjpfvg) to help you start.
Since you've learned to program in Python, LaTeX should take you no more than 2 days to master.
These two days are worth it, your thesis most likely will be better structured, will look better, and will contain less errors.

To start with LaTeX, everything you need to know---from installation to writing details---is available in [this free online book](http://en.wikibooks.org/wiki/LaTeX).

To compile our thesis template, you need a full installation of [MiKTeX](http://miktex.org/about) (Windows) or [MacTeX](https://tug.org/mactex) (OS X).

- - -

#### Use a reference manager 

*Every* paper you read should be added to your reference manager, with all the details (volume, issue, pages, editors, etc).
It only takes 2min to do it right after you've read the paper.
Also, it's a good idea to *summarise the paper in your own words* and add it to the entry in your manager.
It might sound silly and a waste of time, but we can guarantee you that 6 months later when you are writing your thesis you'll think that this is the best thing you've ever done.

If you use LaTeX, [JabRef](http://jabref.sourceforge.net/) is a great cross-platform manager.
If you use Word, [Endnote](http://endnote.com) is the obvious choice.

- - -

#### Use *vector* figures/plots

Avoid raster figures, they are huge, do not scale well and do not look nice.
Besides the obvious Adobe Illustrator, we recommend [IPE](http://ipe.otfried.org) and [Inkscape](https://inkscape.org/) (both free and cross-platform).

To make diagrams (eg UML, or workflows), [draw.io](https://www.draw.io) is perfect.

- - - 

#### What you learned in a past writing course might not be best for a scientific thesis

Piece of advise from [Peter McMahon](http://web.stanford.edu/~pmcmahon/ThesisWritingTips.pdf):

> The structure and style of a good thesis typically looks very different to what is taught in "professional communication" classes in many universities. This is unsurprising: in most cases, professional communication lecturers are neither scientists nor engineers, and have never written a scientific document, let alone a science or engineering thesis. No wonder their advice is ill-suited for science or engineering writing! Any grammar lessons that one obtains in professional communications classes are advantageous, but I recommend that you ignore everything else that they teach about report writing. 

- - -

#### Read this document about producing research articles

[Hengl, T, Gould, M (2006). *The unofficial guide for authors (or how to produce research articles worth citing)*. EUR 22191 EN, 54 pp. Office for Official Publications of the European Communities, Luxemburg. ISBN: 92-79-01703-9]({{ "/pdfs/HenglGould06.pdf" | prepend: site.baseurl }})

![](toread.png)

(skip Sections 1.1.3, 1.1.4 and 1.2.x)

This is a nice overview full of tips about writing a research paper.
It was written by two scientists working in the GIS community.
It's for research articles, but most of the advices are nonetheless valuable---replace 'paper' by 'thesis', 'editor' by 'graduation professor', and 'reviewers' by 'members of your graduation committee'.

Section 2.1.3 about the audience raises the question: who is the audience for an MSc thesis?
The short answer is: your fellow students.
Think of them when writing, they should be able to understand.
They have the same background as you, but obviously they did not dig deeper into the topic you are investigating.
It is a good idea to let one of them proof-read the thesis to see if they understand.

- - -

#### With the A4 thesis, submit a rebuttal/corrections document

Your committee will have to read your thesis twice: before A3 (draft thesis) and before A4 (final version).
It's in your interest to tell them clearly what was changed between the two versions: they will appreciate not having to re-read parts that haven't changed, and will be able to focus on the parts you've improved.

We thus suggest that you submit a rebuttal and corrections document: a ~2-page document, submitted as extra (or in an email).
Include all the significant/important parts that you have modified or added.
Also, if you didn't process some comments from a member of the committee, write it clearly and state why (you do not need to implement all the corrections from the members, but you need to have a good reason if you do not).

You can also submit another document that indicates all the changes made.
If you're using LaTeX, [latexdiff](https://www.overleaf.com/learn/latex/Articles/Using_Latexdiff_For_Marking_Changes_To_Tex_Documents) (Perl program) can be used. 
[Adobe Acrobat Pro](https://helpx.adobe.com/acrobat/using/compare-documents.html) also has a feature for comparing two versions of a PDF document. 
If you use Word, track changes is the obvious choice.

