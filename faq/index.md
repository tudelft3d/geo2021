---
layout: page
title: Frequently asked questions
color: info-60
logo: fa-question
permalink: /faq/
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

#### Can I pick as First Mentor someone from another faculty?

No. Your first mentor, who also acts as your daily supervisor, must be a staff from one of the groups involved in Geomatics education. They also need to have completed the UTQ (teaching qualification for staff).

Your second mentor can however be any staff of the TU Delft.

Also, note that at least one of the two mentors should hold a PhD degree.

- - -

#### Is there a template for the final thesis?

See [here]({{ "/templates/" | prepend: site.baseurl }}).

- - -

#### How to upload your final thesis to the TUD repository

You must upload your final thesis + presentation slides after your A4.
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

No, it must be in English. And your presentations (A1, A3 and A4) must also all be made in English.

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

#### Withdrawing from A1

- Ask your responsible supervisor to withdraw your A1 registration in MyCase.

- - -

#### Withdrawing from A3

- inform your supervisors, the co-reader and the delegate
- send an email to graduation-bk@tudelft.nl stating your name and student number, and declare that you withdraw from A3.