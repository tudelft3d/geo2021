---
layout: page
title: Templates for deliverables
color: warning-60
logo: fa-pen-ruler
permalink: /templates/
---

<div class="box" markdown="1"> 

* Table of Content
{:toc}

</div>

- - -


<section id="proposal">
</section>
## Proposal template

The document for A1 is a project proposal that must contain all the elements listed in the template available in the [graduation manual]({{ "/rules/" | prepend: site.baseurl }}) (Appendix 2).

*Ignore* any other template you might get from the central BK system if different, they send these emails without realising that Geomatics doesn't have the same criteria.

You are free to write your project plan with the word processor of your choice (including LaTeX), as long as all the asked parts are present, in the same order.
You can use that [simple LaTeX template](https://gist.github.com/hugoledoux/d16d5a4d397858ac745e38f9e8561657) as starting point.

We expect a project plan to be around 10-15 pages (maximum).
It should show that you clearly know the problem you plan to solve, and that you master the related work.
We expect you to present the methodology you will use to solve your scientific problem(s), and to present preliminary results.
Also, this is a scientific proposal, so references are mandatory (even if there is no specific section in the template).

As an example, here's a [good project plan from a previous year]({{ "/pdfs/example_gradplan_mulder.pdf" | prepend: site.baseurl }}).
It contains:

  - an introduction in which the relevance of the project and its place in the context of geomatics is described, along with a clearly-defined problem statement;
  - a related work section in which the relevant literature is presented and linked to the project;
  - the research questions are clearly defined, along with the scope (ie what you will *not* be doing); to help you define a "good" research question, read [this document]( {{ '/templates/Research-Questions_WS-handout.pdf' | relative_url }})
  - overview of the methodology to be used;
  - time planning---having a [Gantt chart](https://en.wikipedia.org/wiki/Gantt_chart) is probably a better idea than just a list;
  - since specific data and tools have to be used, it's good to present these concretely, so that the mentors know that you have a grasp of all aspects of the project;
  - the references.

<section id="thesis">
</section>
## Thesis template

Officially, there is no template.
However, we have made a [LaTeX](https://github.com/tudelft3d/msc_geomatics_thesis_template) and [Typst](https://github.com/tudelft3d/msc_geomatics_thesis_typst) templates containing all the parts that are required (eg title page, copyright, abstract, acknowledgements, table of contents, list of figures, appendices, etc.) and is structured in such a way that most/all supervisors expect.
It looks like this:

[![](thesislatex.png)](https://github.com/tudelftgeomatics/thesis_template/raw/main/thesis.pdf)

Download the [full LaTeX source in one ZIP](https://github.com/tudelftgeomatics/thesis_template/archive/master.zip).

*It is not an official template and it is not mandatory to use it.*

Notice that the TU Delft has a [generic LaTeX template for report](https://www.overleaf.com/latex/templates/tu-delft-report-slash-thesis-template/swythjmksywm), that can also be used, but don't forget to add the parts necessary (table of content, table of figures, appendices, etc.).

You are of course allowed to use Word (or others), if you want.
But we do not offer a template, although the TU Delft (kinda) does, you can follow the steps here: [download here](https://www.tudelft.nl/en/tu-delft-corporate-design/media/word-templates)


<section id="paper-thesis">
</section>
## Thesis template when a scientific paper is the core

We offer the possibility that a scientific article forms the core of your MSc thesis report.
**Watch out: this has to be decided after careful discussion with your responsible supervisor.**

This scientific article summarises your work in about 8000 words (instead of a standard thesis, which has no real maximum).
It will allow you to 
  1. learn how to write a scientific article (especially useful if you plan to do a PhD or work in a research centre)
  2. learn to separate the core of what you've done from the details (because of the 8000-word limit)
  3. eventually submit this article to a scientific journal (if the topic is suitable and the quality of the work is sufficient); this would be done in collaboration with your supervisor(s)

Unlike a standard MSc thesis, which is written for your fellow MSc students, a scientific article is aimed at experts and scientists working in the field.
Most of the related work and explanation of concepts can therefore be shortened or omitted from the scientific article, as readers are assumed to be familiar with it.

We therefore require the thesis to include a separate section on "Related work" and/or "State-of-the-art" so that your fellow MSc students (or knowledgeable non-experts) can learn the fundamental issues related to your topic, and can afterwards read and understand your scientific article--—see below for details.

In summary, we expect your MSc thesis to have at 4 parts and at least 4 chapters (potentially more, see examples) [notice that this taken and slightly modified from [Jan van Gemert's MSc thesis guide](https://jvgemert.github.io/MSCthesis.html)]:

**Part 1:** General introduction chapter to the topics for non-experts in the specific topic (but with a general grounding in geomatics).
The goal of this chapter is to gently introduce the research and make the full report readable for a non-expert. 
Thus, you explain the structure (thesis = scientific article+background) and briefly explain the "high-level storyline", in such a way that a non-expert can understand it. 
Mention that Part 3 is a scientific article, and note which technical background sections are found in Part 2, and how the background sections in Part 2 relate to the article in Part 3.

**Part 2:** Preliminary materials: Technical explanations of core concepts used in the scientific article of Part 3. 
These background explanations should make it possible for a non-expert to understand the technical side of the scientific article in Part 3. 
Rule of thumb: target your MSc student peers; ie what background knowledge does a non-expert MSc student from your programme need to understand the scientific article.
Make sure that this preliminary material aligns well with both the introduction and the scientific article.
The goal is not to give a general textbook exposition, rather, focus the background so that it explains the terms/concepts/methods that are used in the following scientific article.

**Part 3:** Scientific article, which itself will contain: an abstract, an introduction, related work, methodology, results/discussion, and conclusions. This is written in the same style as a publication in the field, using the same template as for the MSc thesis. This part should be a maximum of 8000 words. No need to use a LaTeX template from a specific journal.

**Part 4:** A closing discussion that expands on the discussion of the article. You are asked to _reflect_ on the link between your work and the programme MSc Geomatics for the Built Environment, add more specific material for future work, etc. 

⚠️ WARNING: While this version of the MSc thesis will likely produce a shorter document, it is neither simpler nor faster. 
We find it's quite the opposite, actually. Being able to summarise in 8000 words a complex topic is more difficult and more time-consuming than not being restricted by a specific word-count (as Blaise Pascal wrote: "[I would have written a shorter letter, but I did not have the time](https://en.wikiquote.org/wiki/Blaise_Pascal)). And deciding what is core and important and what can be left out is also a challenging task.


Examples of MSc theses at TU Delft (none in geomatics since we are testing this for the first time in 2026):

1. <https://repository.tudelft.nl/record/uuid:5abed208-efab-41dc-8462-9149c9c797ed>
2. <https://repository.tudelft.nl/record/uuid:bdabb91d-6a43-4aac-bed7-6a4f4194310d> (notice that Part 2 is significantly longer and can be several chapters)
3. <https://repository.tudelft.nl/record/uuid:68d3f999-c6f6-45ca-8209-d70a1fa00ef5>
