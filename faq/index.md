---
layout: page
title: FAQ & tips
color: violet-60
logo: fa-question
permalink: /faq/
redirect_from:
  - /tips/
---


<div class="box" markdown="1"> 

* Table of Content
{:toc}

</div>

- - -

- - -

#### Which Graduation Manual applies to me?

You have to follow the [rules]({{ "/rules/" | prepend: site.baseurl }}) (graduation guide) of the year when you started your graducation work.
Even if it takes you 2+ years to complete, the rules that applied when you started are the rules that apply during your whole graduation process.

However, note that the old graduation system (Ps, geo2020) is no longer available.

- - -

#### Can I pick as responsible supervisor someone from another faculty?

No. Your responsible supervisor, who is your main supervisor, must be a staff member of the MSc Geomatics for the Built Environment programme. They also need to have completed the UTQ (teaching qualification for staff).

Your second supervisor can be a scientific staff member from TU Delft whose expertise complements that of the responsible supervisor. They must be confirmed before the Kick-off.

- - -

#### Is there a template for the final thesis?

See [here]({{ "/templates/" | prepend: site.baseurl }}).

- - -

#### How to upload your final thesis to the TUD repository

You must upload your final thesis + presentation slides after your Finalisation.
This is important. If you forget, you will not get your diploma supplement (transcript)!

[=> Instructions to upload your thesis](https://repository.tudelft.nl/content/education-upload-tips)

To ensure that all theses from the MSc Geomatics can be easily found and that there is consistency between them, please follow these guidelines:

![](img/uploadrepo.png){:width="400px"}


- - -

#### Can I put figures I have found in papers/theses/websites?

Yes. As long as you make it crystal clear that this is *not* your own figure and that you put a clear reference in the caption.
Notice that if all your figures are taken from other sources, that gives the impression that you didn't develop your own solution.
Even if you redraw or modify one figure from another paper, it is polite and good practice to cite the original source and explain the relationship to the original figure.

![](img/citefig.png)


- - -

#### Can I cite websites?

Yes. If you want to reference to a piece of software or an article in a newspaper then citing the source with the URL is perfectly fine (add the date that it was last visited).
Notice that it is however better to cite scientific articles and books since these have generally been peer-reviewed, and thus *should* be of higher quality and not contain errors. 
This is of course not always the case, but as general rule it's better to cite articles first, and if there is no other sources than a website is okay.

- - -

#### Am I allowed to "reuse" the work of others? When does it become plagiarism?

Complex question to answer here.
First, read the [TU Delft position about fraud and plagiarism](http://studenten.tudelft.nl/en/students/legal-position/fraud-plagiarism/what-is-fraud/), and if in doubt speak to your daily supervisor.

There are [serious consequences](http://studenten.tudelft.nl/en/students/legal-position/fraud-plagiarism/consequences/) if you are caught using the work of others.


- - -

#### Who is the audience of my thesis?

In other words, who do I have to write my thesis for?

You should write so that your fellow students can understand your thesis: they have the same background as you have, but haven't specialised in exactly the same area.
So you don't need to explain at length what a GIS is, but all the more advanced methods techniques you used and developed during your graduation project should be described.

- - -

#### How long should my thesis be?

*As short as possible*, but it needs to cover all the criteria in the Section 3.3 of the [Graduation Guide]({{ "/rules/" | prepend: site.baseurl }})

Writing concisely is difficult and time-consuming.
Actually, it takes more time than writing long pieces.
As Blaise Pascal wrote (free translation):

> I would have written a shorter letter, but I did not have the time.

But since you insist on having a page number, around 75 pages is probably what is expected (with a "normal" amount of figures and tables). 

This plot shows the average number of pages of MSc theses at the University of Minnesota in different fields.
Geomatics is not in the list, but the average is clearly under 100, and in many fields a bit above 50.

[![](http://i1.wp.com/flowingdata.com/wp-content/uploads/2015/06/Thesis-lengths.png?fit=620%2C9999)](http://flowingdata.com/2015/06/09/length-of-the-average-masters-thesis/)

- - -

#### Why do I need to write and submit a reflection?

__You do not need to write a separate reflection section__, this does not apply to the MSc Geomatics thesis, but to other programmes at BK.

However, you are asked to integrate reflection throughout your thesis — for example, in the discussion and conclusion chapters, reflect on how your work relates to the MSc Geomatics programme and what you learned. This is different from a standalone reflection report.

If you get (threatening) emails from the administration at BK asking for it: reply that it's not required for your study and CC the coordinator of the thesis (Ken Arroyo Ohori).


- - -

#### Can my thesis be written in Dutch?

No, it must be in English. And your presentations (Kick-off, Green light and Finalisation) must also all be made in English.

- - -

#### How is the final thesis evaluated by the committee?


The evaluation criteria that will be used by the committee to mark the final thesis, also called a rubric, are available in the Appendix IV of the Graduation Guide.

[Download the rubric](../rubric/)

- - -

#### What is the structure of a good thesis?

<!-- http://web.stanford.edu/~pmcmahon/ThesisWritingTips.pdf -->
While you're allowed to structure your thesis you way you like it, good theses usually roughly follow this structure:

_1. Introduction (~5 pages)_

  - What is the scientific problem you are aiming to solve? Why is it important? And why is it relevant to Geomatics? (make sure what you intend to do is in line with the overall learning objectives of the Geomatics programme at TU Delft) 
  - What is the main research question that you plan to answer?
  - Also, an overview of the obtained results and an overview of the thesis should be given.

_2. Theoretical background & related work (~15 pages)_

  - Overview of all the topics related to your main research question. 
Here you provide some context for the reader---when describing what others did, explain clearly how their work relates to yours.
  - It's also the place to explain to the reader the concepts that are necessary to understand the rest of the thesis.

_3. Methodology/Experimental design and development (~20 pages)_

  - Describe what you did. Present the design of your experiments and/or present the algorithm/methodology you used to answer your research question.
  - Observe that it's better to separate the theory from the practice. That is, if you developed a new algorithm/method to process 3D city models, first describe this algorithm from a conceptual point of view (with pseudo-code) without discussing implementation details. These details (eg language details, classes, bits and bytes, running time), should be presented and discussed in a separate part of the thesis (a chapter about the implementation of the methodology is possible for instance).

_4. Implementation and Experiments  (~10 pages)_

  - Details of the experiments (including datasets used) and of the implementation of the methodology developed. 

_5. Results and Analysis  (~10 pages)_

  - Present your results, and provide an analysis of them.

_6. Conclusion, discussion and future work (∼5 pages)_

  - Summarise your main result and give a clear answer to the research question you defined in the Introduction.
  - Discuss what did not work too.
  - Give an overview of new research questions that arose during your research, or promising ideas you had but didn't have time to investigate.

_7. Appendices_
 
  - Put here any material that would break the flow of the thesis: details about datasets, extensive UML diagrams, list of tools and configurations used, etc.
  - It's possible that you have no appendix at all for your thesis.
  - Except for maybe small excerpts that show specific issues, code you wrote should not be put in your thesis as an appendix.
  - No one wants to read hundreds of lines of code on paper.
  - Instead, put the code on a publicly accessible repository (eg GitHub) and give a link to the readers.

- - -

#### Withdrawing from Kick-off

- Ask your responsible supervisor to withdraw your Kick-off registration in MyCase.

- - -

#### Withdrawing from Green light

- inform your supervisors and the delegate
- send an email to graduation-bk@tudelft.nl stating your name and student number, and declare that you withdraw from Green light.

- - -

## Research & writing tips

- - -

#### Thesis Boost Days

The university is offering regular sessions where you can join other students writing their thesis with the support of writing coaches.

More information [here](https://www.tudelft.nl/en/tpm/itav/writing-centre/writing-coaching-for-bachelor-and-master-students/thesis-boost-day).

- - -

#### Start writing early in the process

Writing 80 pages takes more than 2 weeks. 
If you manage to write your whole thesis in 2 weeks, then you're surely a superhero, or the quality of what you wrote is probably poor.
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

![](img/toread.png)

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

#### With the final thesis, submit a rebuttal/corrections document

Your committee will have to read your thesis twice: before the Green light (draft thesis) and before the Finalisation (final version).
It's in your interest to tell them clearly what was changed between the two versions: they will appreciate not having to re-read parts that haven't changed, and will be able to focus on the parts you've improved.

We thus suggest that you submit a rebuttal and corrections document: a ~2-page document, submitted as extra (or in an email).
Include all the significant/important parts that you have modified or added.
Also, if you didn't process some comments from a member of the committee, write it clearly and state why (you do not need to implement all the corrections from the members, but you need to have a good reason if you do not).

You can also submit another document that indicates all the changes made.
If you're using LaTeX, [latexdiff](https://www.overleaf.com/learn/latex/Articles/Using_Latexdiff_For_Marking_Changes_To_Tex_Documents) (Perl program) can be used. 
[Adobe Acrobat Pro](https://helpx.adobe.com/acrobat/using/compare-documents.html) also has a feature for comparing two versions of a PDF document. 
If you use Word, track changes is the obvious choice.