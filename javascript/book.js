import * as g from  "./general.js";
const TITLES = ["TITLE OF PHD BOOK", "The quality and Integrity of biomedical science", "Basic digital consepts of biomedical science"]
const SUBTITLES = ["SUBTITLE OF PHD BOOK", "An experimental uncontrolled trail", "Combining data and science in datascience"]
const COVERPICTURESRC = ["espresso_martini.JPG", "name_board.JPG", "nijmegen.JPG", "port.JPG", "portugal.JPG"]

const imagesEndpoint = "./../images/"
const book = {
    "title" : g.choice(TITLES),
    "subTitle" : g.choice(SUBTITLES),
    "author" : new g.Name("Lodewijk", ["Antonie"], "Pet"),
    "coverPicture" : g.createImg(imagesEndpoint+g.choice(COVERPICTURESRC)),
    "index": "INDEX",
    "preface": "PREFACE",
    "chapters": ["Chapter 0", "Chapter 1", "Chapter 3", "Chapter 4", "Chapter 5"],
    "discussion": "DISCUSSION",
    "epilogue": "EPILOGUE",
    "references": "REFERENCES",
    "backCover": "BACKCOVER",
}

const title = g.createH1(book["title"])
const subTitle = g.createH2(book["subTitle"])
const authorList = g.createH3(book["author"].get_fullName(g.choice([true, false]), g.choice([true, false]), g.choice([true, false])))
const coverPicture = book["coverPicture"]

const indexTitle = g.createH2(book["index"])
const indexList = g.createUl(book["chapters"], false)

const frontPage = g.createPage([title, subTitle, authorList, coverPicture], ["titlePage"])
const page_1 = g.createPage([indexTitle, indexList])

const discussionTitle = g.createH2(book["discussion"])
const discussionPage = g.createPage([discussionTitle])

const epilogueTitle = g.createH2(book["epilogue"])
const epiloguePage = g.createPage([epilogueTitle])

document.getElementById("book").append(frontPage, page_1, discussionPage, epiloguePage)