(function () {
  "use strict";

  var grades = [
    { key: "lt575", label: "< 5.75", value: 5 },
    { key: "6", label: "6", value: 6 },
    { key: "7", label: "7", value: 7 },
    { key: "8", label: "8", value: 8 },
    { key: "9", label: "9", value: 9 },
    { key: "10", label: "10", value: 10 },
  ];

  var rubric = [
    {
      id: "research",
      title: "Research",
      weight: 0.5,
      weightLabel: "50%",
      criteria: [
        {
          name: "Motivation",
          desc: {
            6: "Motivation can be broadly discerned, but it is not well understood",
            7: "Motivation can be understood and related to the problem",
            8: "Motivation is clearly shown and connected to the problem",
            9: "Motivation is clearly described and connected with the need of solutions of the problem",
            10: "Motivation is perfectly presented and connected with the need of solutions of the problem",
          },
        },
        {
          name: "General problem",
          desc: {
            lt575:
              "General problem cannot be explained. No specific research questions/objectives.",
            6: "General problem is vague or without clear boundaries (scope)",
            7: "General problem is clear with defined boundaries (scope)",
            8: "General problem is clear and has defined limitations",
            9: "General problem is clear, has boundaries or limitations and is feasible",
            10: "General problem is clear, has boundaries or limitations and is feasible with the approach proposed",
          },
        },
        {
          name: "Literature / related work",
          desc: {
            lt575:
              "Unable to place the research in a wider context, no clear literature research",
            6: "Sufficient introduction and justification of the research topic, but superficial (limited literature review)",
            7: "Sufficient introduction and justification of the research topic, with fair literature support (decent literature review)",
            8: "Good introduction and justification of the research topic with supporting literature (but not all included)",
            9: "Good introduction and justification of the research topic, with vast literature support",
            10: "Excellent introduction and justification of the research topic, with all literature support",
          },
        },
        {
          name: "Choices of methods / data",
          desc: {
            lt575:
              "The research resulted in almost no work, using already existing sources",
            6: "The choices of methods and data are not justified or explained",
            7: "The choices of methods and data are partly justified",
            8: "The choices of methods and data are justified and logical",
            9: "The choices of methods and data are justified and logical",
            10: "The choices of methods and data are justified, logical and the most efficient at the moment",
          },
        },
        {
          name: "Critical attitude / reflection",
          desc: {
            6: "Limited critical attitude and ability to reflect on the wider scope of application of the research",
            7: "Fair critical attitude and ability to reflect on the wider scope of application of the research",
            8: "Demonstrate critical attitude and ability to reflect on the wider scope of application of the research",
            9: "Good critical attitude and ability to reflect on the wider scope of application of the research",
            10: "Excellent critical attitude and ability to reflect on the wider scope of application of the research, making connection to simultaneous research performed by other peers",
          },
        },
        {
          name: "Results / conclusions",
          desc: {
            lt575: "No substantial conclusions",
            6: "Results interpreted to a limited extent",
            7: "Results interpreted with a critical attitude independently",
            8: "Results interpreted critically and discussed in a broader scope of the discipline",
            9: "Results interpreted critically and discussed in a broader scope of the discipline, with proposed solutions or alternative approaches when necessary",
            10: "Results interpreted critically and discussed in a broader scope of the discipline, with proposed solutions or alternative approaches when necessary",
          },
        },
        {
          name: "Answers to research questions",
          desc: {
            lt575: "The results do not answer the research questions",
            6: "The answers to the research questions are satisfactory",
            7: "The answers for the research questions are more than satisfactory",
            8: "The answers to the research questions are good",
            9: "The answers to the research questions are very good",
            10: "The answers to the research questions are excellent. There is a clear evidence that the student is able to design new techniques or combine different techniques successfully in an innovative manner.",
          },
        },
      ],
    },
    {
      id: "process",
      title: "Process",
      weight: 0.2,
      weightLabel: "20%",
      criteria: [
        {
          name: "Autonomy / proactiveness",
          desc: {
            lt575: "Not autonomous or proactive at all",
            6: "Sometimes autonomous and proactive, but generally needed steering by supervisors. Rarely came up with creative new ideas and new sources of information.",
            7: "Mostly autonomous, generally trying approaches before asking for help. Few times came up with new ideas or found new sources of information. Was able to contribute to discussions about the research during meetings.",
            8: "Mostly autonomous and proactive, generally taking control of the project and steering it to completion with some hiccups. Sometimes came up with new ideas and found new sources of information.",
            9: "Autonomous and proactive, taking control of the project and steering it. Most times came up with new ideas and found new sources of information.",
            10: "Highly autonomous and proactive throughout the process, taking full control of the project and steering it to completion in an efficient manner. Always came up with creative new ideas and found new sources of information.",
          },
        },
        {
          name: "Response to feedback / meetings with supervisors",
          desc: {
            lt575:
              "Never responsive when new alternatives are suggested. Rarely taking in feedback from supervisors and implementing changes.",
            6: "Little response/action to feedback from supervisors for self-improvement",
            7: "Was able to contribute to discussions about the research during meetings. Critical attitude towards the work done, but most key issues had to be pointed out by supervisors. Uses feedback from supervisors for self-improvement.",
            8: "Was able to contribute to lively discussions about the project during meetings. Critical attitude towards the work done, but key issues had to be pointed out by supervisors. Uses feedback from supervisors for self-improvement.",
            9: "Was able to lead lively discussions about the research during meetings. Critical attitude towards the work done, pointing out the issues by themselves. Uses feedback from supervisors for self-improvement.",
            10: "Was able to lead lively discussions about the research during meetings. Critical own attitude towards the work done. Actively uses both own discoveries and feedback from supervisors for self-improvement.",
          },
        },
        {
          name: "Use of resources",
          desc: {
            lt575:
              "Misuse of resources (data, computational time, people time)",
            6: "Makes inefficient but passable use of resources (e.g. tools, data, own/supervisor's time)",
            7: "Use of resources is appropriate (e.g., tools, data, own/supervisor's time)",
            8: "Makes good use of resources (e.g. tools, data, own/supervisor's time)",
            9: "Makes very good use of resources (e.g. tools, data, own/supervisor's time)",
            10: "Makes highly efficient use of resources (e.g. tools, data, own/supervisor's time)",
          },
        },
        {
          name: "Originality / creativity",
          desc: {
            lt575:
              "No original ideas were provided within the project, most of the work is copied and already developed",
            6: "Contribution to the project is somewhat original.",
            7: "Contribution to the project is partly original. Some initiative and suggestions by the student.",
            8: "Contribution to the project is original, with suggestions by supervisors. Several initiative and suggestions within the project.",
            9: "Contribution to the project is original, with almost no intervention by supervisors. Many initiatives and suggestions within the project.",
            10: "Contribution to the project is original. Always takes initiative and makes suggestions within the project.",
          },
        },
        {
          name: "Planning",
          desc: {
            lt575: "No real planning, missed most of the deadlines",
            6: "Basic timeline and plan prepared, but little followed or updated",
            7: "Good timeline and plan prepared, often followed or updated",
            8: "Prepared a good and feasible plan at the beginning of the research project, which was mostly followed or adjusted when needed (e.g. according to progress and new findings).",
            9: "Prepared a clear and feasible plan at the beginning of the research project, which was followed and improved when needed (e.g. according to progress and new findings).",
            10: "Prepared an efficient, clear and feasible plan at the beginning of the research project, which was followed and improved when needed (e.g. according to progress and new findings)",
          },
        },
      ],
    },
    {
      id: "report",
      title: "Communication — Report",
      weight: 0.18,
      weightLabel: "18%",
      criteria: [
        {
          name: "Structure",
          desc: {
            lt575: "Report has no structure",
            6: "Report has just right structure, consistency and clarity, with significant corrections by supervisors",
            7: "Report follows a structure, with issues in clarity and organization",
            8: "Report follows a structure, with minor issues in clarity",
            9: "Report follows a clear structure",
            10: "Report follows a clear and logical structure",
          },
        },
        {
          name: "Documentation of work done",
          desc: {
            lt575:
              "Report does not document sufficiently the research done, not reproducible. Report lacks visual material.",
            6: "Report does not document all the parts of the research done (reproducibility issues)",
            7: "Report documents all the parts of the research done (no reproducibility issues)",
            8: "Report documents all the parts of the research done (no reproducibility issues)",
            9: "Report documents all the parts of the research done",
            10: "Report thoroughly documents all the parts of the research done, which could be readily replicated using only the report as a base",
          },
        },
        {
          name: "Writing",
          desc: {
            7: "Report is generally well written, but contains significant errors and needs improvements",
            8: "Report is generally well written, but contains a few errors and needs improvements",
            9: "Report is well written, with a very few writing errors",
            10: "Report is well written using clear scientific language and few errors. Report is visually appealing and uses figures and tables to best explain aspects of the research.",
          },
        },
        {
          name: "Abstract",
          desc: {
            7: "Abstract does not capture most of the work",
            8: "Abstract captures most of the work",
            9: "Abstract captures the essence of the work",
            10: "Abstract captures the essence of the work",
          },
        },
        {
          name: "Use of references",
          desc: {
            7: "Report properly acknowledges other work broadly and contains a fair list of references",
            8: "Report properly acknowledges other work most of the time and contains a mostly complete list of references",
            9: "Report properly acknowledges other work most of the time and contains a mostly complete list of references",
            10: "Report properly acknowledges other work everywhere and contains a complete and well-formatted list of references",
          },
        },
        {
          name: "Supplementary output / data",
          desc: {
            9: "Work yields some other output (e.g. software, data), which is added to the report and published in an ad hoc manner",
            10: "Work attempts to yield other output (e.g. software, data) whenever possible, which is published following open science best practices (e.g. fully available source code on public repository with documentation and sample data)",
          },
        },
      ],
    },
    {
      id: "pres",
      title: "Communication — Presentation",
      weight: 0.12,
      weightLabel: "12%",
      criteria: [
        {
          name: "Structure",
          desc: {
            lt575: "Presentation is chaotic, structure not clear",
            6: "Presentation follows a structure, but with some issues in clarity",
            7: "Presentation follows a structure, but with some issues in clarity and organization",
            8: "Presentation follows a structure, but with some issues in clarity",
            9: "Presentation follows a clear structure",
            10: "Presentation follows a clear and logical structure",
          },
        },
        {
          name: "Content",
          desc: {
            lt575: "Presentation has no motivation",
            6: "Presentation gives a decent summary of motivation, problem, work done, results and conclusions",
            7: "Presentation gives a decent summary of motivation, problem, work done, results and conclusions",
            8: "Presentation gives a good summary of motivation, problem, work done, results and conclusions",
            9: "Presentation gives a very good summary of motivation, problem, work done, results and conclusions",
            10: "Presentation gives an easy to understand summary of motivation, problem, work done, results and conclusions",
          },
        },
        {
          name: "Visual material",
          desc: {
            6: "Sufficient presentation material (e.g. slides, videos, demos)",
            7: "Good presentation material (e.g. slides, videos, demos)",
            8: "More than satisfactory material (e.g. slides, videos, demos)",
            9: "Very good presentation material (e.g. slides, videos, demos)",
            10: "High-quality presentation material (e.g. slides, videos, demos)",
          },
        },
        {
          name: "Audience / attention",
          desc: {
            lt575: "Loses audience rapidly",
            6: "Interaction with the audience is sufficient (eye contact, body language, tone of voice, pace of speaking). Gets attention of the audience.",
            7: "Interaction with the audience is appropriate (eye contact, body language, tone of voice, pace of speaking). Gets attention of the audience and maintains it to some extent.",
            8: "Interaction with the audience is good (eye contact, body language, tone of voice, pace of speaking). Maintains attention of the audience for most of the presentation.",
            9: "Interaction with the audience is very good (eye contact, body language, tone of voice, pace of speaking). Maintains constant attention of the audience.",
            10: "Interaction with the audience is outstanding (eye contact, body language, tone of voice, pace of speaking). Maintains constant attention of the audience.",
          },
        },
        {
          name: "Responses to questions",
          desc: {
            lt575: "Candidate cannot address the questions posed",
            6: "Can answer most of the questions raised",
            7: "Questions are answered well with some gaps",
            8: "Most questions are correctly answered",
            9: "Questions are answered well, without further deepening in the topic",
            10: "Questions are answered succinctly and with full awareness of the strengths and weaknesses of the research",
          },
        },
        {
          name: "Understanding",
          desc: {
            lt575:
              "Clear lack of understanding of the scientific problem under study",
            6: "Shows superficial knowledge, not in depth control of the topic",
            7: "Confident with the content for its application",
            8: "Very confident with the content at a research and development level",
            9: "Masters the content within the research topic",
            10: "Masters the content beyond the research topic",
          },
        },
      ],
    },
  ];

  function buildRefTable(criteria) {
    return (
      '<table class="ref-table"><thead><tr><th></th>' +
      grades
        .map(function (g) {
          return "<th>" + g.label + "</th>";
        })
        .join("") +
      "</tr></thead><tbody>" +
      criteria
        .map(function (c) {
          return (
            "<tr><td>" +
            c.name +
            "</td>" +
            grades
              .map(function (g) {
                return "<td>" + (c.desc[g.key] || "—") + "</td>";
              })
              .join("") +
            "</tr>"
          );
        })
        .join("") +
      "</tbody></table>"
    );
  }

  function buildRubric() {
    var container = document.getElementById("rubricContainer");
    if (!container) return;
    rubric.forEach(function (section) {
      var sec = document.createElement("div");
      sec.className = "section";
      sec.innerHTML =
        '<div class="section-header">' +
        "<span>" +
        section.title +
        "</span>" +
        '<span class="weight">' +
        section.weightLabel +
        "</span>" +
        "</div>" +
        '<div class="section-body">' +
        '<div style="overflow-x:auto">' +
        '<table class="criteria-table"><tbody>' +
        section.criteria
          .map(function (c, ci) {
            var uniqueName = "grade_" + section.id + "_" + ci;
            return (
              '<tr data-section="' +
              section.id +
              '" data-criterion="' +
              ci +
              '"><td>' +
              c.name +
              "</td>" +
              grades
                .map(function (g) {
                  var desc = c.desc[g.key] || "";
                  return (
                    '<td class="grade-cell"><input type="radio" name="' +
                    uniqueName +
                    '" value="' +
                    g.value +
                    '" id="' +
                    uniqueName +
                    "_" +
                    g.key +
                    '" onchange="updateSummary()"><label for="' +
                    uniqueName +
                    "_" +
                    g.key +
                    '" title="' +
                    desc.replace(/"/g, "&quot;") +
                    '">' +
                    g.label +
                    "</label></td>"
                  );
                })
                .join("") +
              "</tr>"
            );
          })
          .join("") +
        "</tbody></table></div>" +
        '<table class="criteria-table"><tbody>' +
        '<tr class="comments-row"><td style="font-weight:500">Comments for ' +
        section.title.toLowerCase() +
        '</td><td colspan="6"><textarea placeholder="Comments…" id="comments_' +
        section.id +
        '"></textarea></td></tr>' +
        "</tbody></table>" +
        '<button class="ref-toggle" onclick="this.nextElementSibling.classList.toggle(\'open\');this.textContent=this.nextElementSibling.classList.contains(\'open\')?\'▾ Hide rubric details\':\'▸ Show rubric details\'">▸ Show rubric details</button>' +
        '<div class="ref-detail">' +
        buildRefTable(section.criteria) +
        "</div></div>";
      container.appendChild(sec);
    });
  }

  function getSelectedGrades() {
    var results = {};
    rubric.forEach(function (section) {
      results[section.id] = { grades: [], avg: null };
      section.criteria.forEach(function (c, ci) {
        var name = "grade_" + section.id + "_" + ci;
        var sel = document.querySelector(
          'input[name="' + name + '"]:checked',
        );
        results[section.id].grades.push(sel ? parseFloat(sel.value) : null);
      });
      var valid = results[section.id].grades.filter(function (g) {
        return g !== null;
      });
      results[section.id].avg = valid.length
        ? valid.reduce(function (a, b) {
            return a + b;
          }, 0) / valid.length
        : null;
    });
    return results;
  }

  function getCommAvg(r) {
    if (r.report.avg !== null && r.pres.avg !== null) {
      return r.report.avg * 0.6 + r.pres.avg * 0.4;
    }
    if (r.report.avg !== null) return r.report.avg;
    if (r.pres.avg !== null) return r.pres.avg;
    return null;
  }

  function getFinal(r) {
    var commAvg = getCommAvg(r);
    if (r.research.avg !== null && r.process.avg !== null && commAvg !== null) {
      return r.research.avg * 0.5 + r.process.avg * 0.2 + commAvg * 0.3;
    }
    return null;
  }

  function updateSummary() {
    var r = getSelectedGrades();
    var setEl = function (id, val) {
      var el = document.getElementById(id);
      if (el) {
        el.textContent =
          val !== null
            ? typeof val === "number"
              ? val.toFixed(1)
              : val
            : "—";
      }
    };

    setEl("sumResearchAvg", r.research.avg);
    setEl("sumProcessAvg", r.process.avg);
    setEl("sumReportAvg", r.report.avg);
    setEl("sumPresAvg", r.pres.avg);

    var final = getFinal(r);
    if (final !== null) {
      var rounded = Math.round(final * 2) / 2;
      setEl("sumFinal", rounded.toFixed(1) + " (" + final.toFixed(2) + ")");
    } else {
      setEl("sumFinal", "—");
    }
  }

  function resetAll() {
    document
      .querySelectorAll('input[type="radio"]')
      .forEach(function (r) {
        r.checked = false;
      });
    updateSummary();
  }

  var logoUrl = (function () {
    var el = document.querySelector(".rubric-page");
    return el && el.dataset.logo ? el.dataset.logo : "";
  })();
  var logoDataUrl = null;

  function loadLogo() {
    return new Promise(function (resolve) {
      if (!logoUrl) {
        resolve();
        return;
      }
      fetch(logoUrl)
        .then(function (r) {
          return r.text();
        })
        .then(function (svgText) {
          var blob = new Blob([svgText], { type: "image/svg+xml" });
          var url = URL.createObjectURL(blob);
          var img = new Image();
          img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = 425;
            canvas.height = 121;
            canvas.getContext("2d").drawImage(img, 0, 0, 425, 121);
            URL.revokeObjectURL(url);
            logoDataUrl = canvas.toDataURL("image/png");
            resolve();
          };
          img.onerror = function () {
            URL.revokeObjectURL(url);
            resolve();
          };
          img.src = url;
        })
        .catch(function () {
          resolve();
        });
    });
  }

  window.updateSummary = updateSummary;
  window.resetAll = resetAll;
  window.generatePDF = generatePDF;

  async function generatePDF() {
    try {
      var JsPDF = window.jspdf && (window.jspdf.jsPDF || window.jsPDF);
      if (!JsPDF) {
        alert("jsPDF library not loaded. Check internet connection.");
        return;
      }
      if (typeof window.applyPlugin === "function") {
        window.applyPlugin(JsPDF);
      }
      await loadLogo();
      var doc = new JsPDF("p", "mm", "a4");
      var pageW = doc.internal.pageSize.getWidth();
      var margin = 14;
      var y = 10;
      var lineH = 5;
      var gap = 4;

      var drawHeader = function () {
        doc.setFillColor(43, 84, 33);
        doc.rect(0, 0, pageW, 14, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(
          "MSc Geomatics — Thesis Assessment Rubric — TU Delft",
          margin,
          9,
        );
        if (logoDataUrl) {
          var lh = 8;
          var lw = lh * (425 / 121);
          doc.addImage(logoDataUrl, "PNG", pageW - margin - lw, (14 - lh) / 2, lw, lh);
        }
      };

      var newPage = function () {
        doc.addPage();
        drawHeader();
        y = 16;
      };

      var checkSpace = function (needed) {
        if (y + needed > 287) newPage();
      };

      var wrap = function (text, w, size) {
        doc.setFontSize(size);
        return doc.splitTextToSize(text, w);
      };

      drawHeader();
      y = 18;

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(9);
      var sid = function (id) {
        var el = document.getElementById(id);
        return el ? el.value || "" : "";
      };
      var info = [
        ["Student:", sid("studentName")],
        ["Student nr:", sid("studentNumber")],
        ["Delegate of BoE:", sid("delegateBoE")],
        ["Supervisor:", sid("respSupervisor")],
        ["2nd supervisor:", sid("secondSupervisor")],
        ["Co-reader:", sid("coreader")],
        ["Thesis:", sid("thesisTitle")],
        ["Date:", sid("assessmentDate")],
      ];
      info.forEach(function (row) {
        doc.setFont("helvetica", "bold");
        doc.text(row[0], margin, y);
        doc.setFont("helvetica", "normal");
        doc.text(row[1] || "—", margin + 28, y);
        y += lineH;
      });
      y += gap;

      checkSpace(40);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("Grade Summary", margin, y);
      y += lineH;
      var r = getSelectedGrades();
      var final = getFinal(r);
      var fmt = function (v) {
        return v !== null ? v.toFixed(1) : "—";
      };
      var fmtFinal = function (v) {
        if (v === null) return "—";
        var rounded = Math.round(v * 2) / 2;
        return rounded.toFixed(1) + " (" + v.toFixed(2) + ")";
      };
      var rows = [
        ["Research", "50%", fmt(r.research.avg)],
        ["Process", "20%", fmt(r.process.avg)],
        ["Communication — Report", "18%", fmt(r.report.avg)],
        ["Communication — Presentation", "12%", fmt(r.pres.avg)],
        ["Final Grade", "100%", fmtFinal(final)],
      ];
      doc.autoTable({
        startY: y,
        margin: { left: margin },
        head: [["Category", "Weight", "Average"]],
        body: rows,
        styles: {
          fontSize: 9,
          cellPadding: 2,
          lineColor: [200, 212, 198],
          lineWidth: 0.1,
        },
        headStyles: {
          fillColor: [43, 84, 33],
          textColor: [255, 255, 255],
          fontStyle: "bold",
        },
        didParseCell: function (data) {
          if (data.row.index === rows.length - 1) {
            data.cell.styles.fontStyle = "bold";
          }
        },
        bodyStyles: { textColor: [0, 0, 0] },
        alternateRowStyles: { fillColor: [242, 246, 241] },
      });
      y = doc.lastAutoTable.finalY + gap;

      rubric.forEach(function (section) {
        checkSpace(30);
        doc.setFillColor(43, 84, 33);
        doc.rect(margin, y, pageW - margin * 2, 6, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(
          section.title + " (" + section.weightLabel + ")",
          margin + 2,
          y + 4.5,
        );
        y += 8;

        var gradesForSection = r[section.id].grades;
        var criteriaRows = section.criteria.map(function (c, ci) {
          var g = gradesForSection[ci];
          return [c.name, g !== null ? g.toFixed(0) : "—"];
        });
        var avg = r[section.id].avg;
        criteriaRows.push([
          "Average",
          avg !== null ? avg.toFixed(1) : "—",
        ]);

        checkSpace(criteriaRows.length * 7 + 14);
        doc.autoTable({
          startY: y,
          margin: { left: margin },
          head: [["Criterion", "Grade"]],
          body: criteriaRows,
          styles: {
            fontSize: 8,
            cellPadding: 1.5,
            lineColor: [200, 212, 198],
            lineWidth: 0.1,
          },
          headStyles: {
            fillColor: [200, 212, 198],
            textColor: [43, 84, 33],
            fontStyle: "bold",
            fontSize: 8,
          },
          bodyStyles: { textColor: [0, 0, 0] },
          alternateRowStyles: { fillColor: [242, 246, 241] },
          columnStyles: {
            0: { cellWidth: pageW - margin * 2 - 28 },
            1: { cellWidth: 28, halign: "center" },
          },
        });
        y = doc.lastAutoTable.finalY + 2;

        var commentsEl = document.getElementById("comments_" + section.id);
        var comments = commentsEl ? commentsEl.value || "" : "";
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.text("Comments:", margin, y);
        y += lineH;
        doc.setFont("helvetica", "normal");
        if (comments.trim()) {
          var lines = wrap(comments, pageW - margin * 2, 9);
          checkSpace(lines.length * lineH + 4);
          doc.text(lines, margin, y);
          y += lines.length * lineH;
        } else {
          doc.setTextColor(120, 120, 120);
          doc.text("(no comments)", margin, y);
          doc.setTextColor(0, 0, 0);
          y += lineH;
        }
        y += gap;
      });

      var generalEl = document.getElementById("generalComments");
      var general = generalEl ? generalEl.value || "" : "";
      checkSpace(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("Additional Comments / Feedback for the Student", margin, y);
      y += lineH + 1;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      if (general.trim()) {
        var gLines = wrap(general, pageW - margin * 2, 9);
        doc.text(gLines, margin, y);
      } else {
        doc.setTextColor(120, 120, 120);
        doc.text("(no comments)", margin, y);
      }

      doc.save("thesis-assessment.pdf");
    } catch (err) {
      alert("PDF generation error: " + err.message);
      console.error(err);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildRubric();
    updateSummary();
  });
})();
