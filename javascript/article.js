import {addClass} from '../javascript/statisticsModule.js';

const section = document.getElementById("article");

const article = {
    "title" : "Christmas is the most wonderful research of the year.",
    "introduction" : "Article retractions are a permanent measure to maintain research integrity and indicate infringement of ethical code. Retraction rates are increasing, and most retractions are due to misconduct, particularly fraud concerning data manipulation and fabrication of peer reviewers[2]. Editors and the peer review process play a key role in recognizing misconduct or honest errors in articles, as do data sharing and open science initiatives. A sense of accountability is key, as well as alleviating some of the pressures of publication that researchers experience.Corrections and errata are more frequent compared to retractions with the aim to correct any kind of mistake in a published article. These can be authorized by many sources not only including authors or  editors[3] and can be recorded even during submission. Definitions of corrections and errata differ between platforms. Some only include corrections leading to republication, others contain all corrections including minor spelling errors. Nonetheless, these different interpretations do not contain dissenting interpretations, regarding the presence of some kind of mistake.The relationship between impact factor and retraction rate have already been studied, showing a positive relationship between impact factor and retraction rate [4]. They calculated the retraction index by counting all retractions within 10 years, multiplying this number by 1,000, and then divided that by the number of published articles with abstracts. The BMJ was not included in the studied journals, but this trend might help to determine the expected retraction count.The BMJ Christmas issue brings a sense of playfulness to scientific research, and the spirit of Christmas invites honesty and transparency in these articles. After all, Father Christmas is looking over us and it is the most wonderful time of the year. But is it also the most wonderful research of the year? With less misconduct, fraud, mistakes, and the highest quality publications? What is the Observed vs the expected number of retractions amongst all BMJ Christmas articles? What is the O/E when taking the relative citation ratio into account? What is the observed vs the expected number of article corrections amongst all BMJ Christmas articles? What is the O/E when taking the relative citation ratio into account ",
    "methods" : "We will review all retraction notices from the BMJ published between January 1982 and January 2022. \nWe will distinguish whether these retraction notices pertain to BMJ Christmas edition articles or not. Year of publication and time till retraction and correction are needed for a standardized retraction rate calculation. Citation ratio is needed to answer RQ 1a Study design     Cohort (retrospective) Inclusion     All BMJ research articles from the first BMJ Christmas edition (1982) up until January 2022 will be included. Exclusion     None Data collection and preprocessing All retractions and corrections will be collected from date of publication up until the date of data collection.       Retractions Data on retracted will be collected using the Retraction Watch Database, potentially through a ZOTERO plugin, PubMed, and the BMJ website. Data on variables will be collected using citation managers like ZOTERO or tools available on the websites / direct import via R. Corrections Corrections will be collected using PubMed since we can use their filter functions filtering for research articles. Special build-in functions link corrections with their original articles and vice-versa, assisting in data collection regarding time to correction.     Corrections We want to collect all kinds of corrections and define a subset of substantial corrections. These substation corrections include errors leading to a misinterpretation of the primary outcome, a partial retraction of a figure, table, or unsupported statements. One article may have several corrections with different correction dates. Relative citation ratio The Relative citation index is a metric using article citation ratio in the numerator and an expected citation ratio, based on articles within the same field, in the denominator[5].",
    "results" : "We found nothing 😒",
    "discussion" : "Discuss! 🧑‍🎓🧑‍🏫🧑‍🔬🧙",
    "references" : ["Google.com", "wikipedia of course", "a book?"],
    "authors" : ["Lodewijk Pet", "Bob Siegerink", "Esther de Rooij", "Chava Ramspek", "Frits Rosendaal"]
};

function createArticle(){
    const article = document.createElement("article")

    return article
}

function createH2(text){
    const h2 = document.createElement("h2")
    h2.innerText = text

    return h2
};

function createH3(text){
    const h3 = document.createElement("h3")
    h3.innerText = text

    return h3
};

function createH4(text){
    const h4 = document.createElement("h4")
    h4.innerText = text

    return h4
}

function createH5(text){
    const h5 = document.createElement("h5")
    h5.innerText = text

    return h5
}

function createTitle(title){
    const h2 = createH2(title)

    addClass(h2, "title")

    return h2
};

function createOl(listElements){
    const ol = document.createElement("ol")

    for (let index = 0; index < listElements.length; index++) {
        const element = listElements[index];
        const li = createLi(element)
        ol.append(li)
    }

    return ol
};

function createLi(text){
    const li = document.createElement("li")
    li.innerText = text

    return li
};

function createParagraph(text){
    const p = document.createElement("p")
    p.innerText = text

    return p
};

function createIntroduction(text){
    const section = document.createElement("section")
    const h3 = createH3("Introduction")
    const paragraph = createParagraph(text)

    addClass(paragraph, "introduction")

    section.append(h3, paragraph)
    return section
};

function createMethods(text){
    const section = document.createElement("section")
    const h3 = createH3("Methods")
    const paragraph = createParagraph(text)

    addClass(paragraph, "methods")

    section.append(h3, paragraph)
    return section
};

function createResults(text){
    const section = document.createElement("section")
    const h3 = createH3("Results")
    const paragraph = createParagraph(text)

    addClass(paragraph, "results")

    section.append(h3, paragraph)
    return section
};

function createDiscussion(text){
    const section = document.createElement("section")
    const h3 = createH3("Discussion")
    const paragraph = createParagraph(text)

    addClass(paragraph, "discussion")

    section.append(h3, paragraph)
    return section
};

function createReferences(referernceList){
    const section = document.createElement("section")
    const h3 = createH3("References")
    const ol = createOl(referernceList)

    addClass(ol, "references")

    section.append(h3, ol)
    return section
};

function createImg(imageSource, altText){
    const img = document.createElement("img");
    img.setAttribute("src", imageSource);
    img.setAttribute("alt", altText);

    return img;
};

function createFigure(){
    const article = createArticle();
    const title = createH4("Figure 1. The background of Christmas.");
    const img = createImg('../../images/christmas_background.jpg', "Background in a red Christmas theme");
    article.append(title, img);

    return article;
};

function createAuthorList(authors){
    const section = document.createElement("section")
    const h5 = createH4("Authors")
    const ol = createOl(authors)

    addClass(ol, "authorList")

    section.append(h5, ol)

    return section
}

const title = createTitle(article["title"]);
const introduction = createIntroduction(article["introduction"]);
const methods = createMethods(article["methods"]);
const results = createResults(article["results"]);
const discussion = createDiscussion(article["discussion"]);
const references = createReferences(article["references"]);
const figure = createFigure()
const autorList = createAuthorList(article["authors"])
section.append(title, autorList, introduction, methods, results, discussion, references, figure);
