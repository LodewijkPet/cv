export function createTable (headerRows, bodyRows, footRows, firstCellisTh = false, id){
    const table = document.createElement("table")
    table.id = id

    const thead = createTableHead(headerRows)
    const tbody = createTableBody(bodyRows, headerRows[headerRows.length - 1], firstCellisTh)
    const tfoot = createTableFoot(footRows)

    table.append(thead)
    table.append(tbody)
    table.append(tfoot)

    return table
}

export function createTableHead(headerRows){
    const tableHead = document.createElement("thead")

    for (let index = 0; index < headerRows.length; index++) {
        const row = createHeaderRow(headerRows[index]);
        tableHead.append(row)
    }

    return tableHead
}

export function createHeaderRow(headerRowCells){
    const row = document.createElement("tr")

    for (let index = 0; index < headerRowCells.length; index++) {
        const headerCell = createHeadersCell(headerRowCells[index]);
        row.append(headerCell)
    }

    return row
}

export function createHeadersCell(headerName){
    const cell = document.createElement("th")
    cell.innerText = headerName

    addClass(cell, headerName)
    addClass(cell, "header")

    return cell
}

export function createTableBody(bodyRows, headerNames, firstCellisTh){
    const tableBody = document.createElement("tbody")

    for (let index = 0; index < bodyRows.length; index++) {
        const row = createBodyRow(bodyRows[index], headerNames, firstCellisTh);
        tableBody.append(row)
        
    }

    return tableBody
}

export function createBodyRow(bodyRowCells, headerNames, firstCellisTh){
    const row = document.createElement("tr")

    for (let index = 0; index < bodyRowCells.length; index++) {
        if (index > 0){
            firstCellisTh = false
        } 
        const bodyRowCell = createBodyRowCell(bodyRowCells[index], headerNames[index], bodyRowCells[0], firstCellisTh);
        row.append(bodyRowCell)
    }

    return row
}

export function createBodyRowCell(cellValue, headerName, rowId, firstCellisTh){
    let cell;
    if (firstCellisTh){
        cell = createTh(cellValue)
    } else {
        cell = createTd(cellValue)
    }

    addClass(cell, "data")
    addClass(cell, headerName.replace(/ /g,"_"))
    addClass(cell, `id_${rowId}`)
    return cell
}

export function createTableFoot(footRows){
    const tableFoot = document.createElement("tfoot")
    
    for (let index = 0; index < footRows.length; index++) {
        const row = createFootRow(footRows[index]);
        tableFoot.append(row)
    }

    return tableFoot
}

export function createFootRow(footRowCells){
    const row = document.createElement("tr")

    for (let index = 0; index < footRowCells.length; index++) {
        const footRowCell = createFootRowCell(footRowCells[index]);
        row.append(footRowCell)
    }

    return row
}

export function createFootRowCell(cellValue){
    const cell = createTd(cellValue)

    return cell
}

export function createTd(element){
    const cell = document.createElement("td")
    cell.append(element)

    return cell
}

export function createTh(element){
    const cell = document.createElement("th")
    cell.append(element)

    return cell
}

export function toggleClass(element, toggleClass){
    element.classList.toggle(toggleClass)
}

export function addClass(element, newClass){
    element.classList.add(newClass.replace(/ /g,"_"))
}

export function removeClass(element, removeClass){
    element.classList.remove(removeClass)
}

export function createLable(inputId, labelText){
    const label = document.createElement("label")
    label.setAttribute("for", inputId)
    label.innerText = labelText

    return label
}

export function createInput(inputType, inputId, defaultValue, placeholder, classes){
    const input = document.createElement("input")
    input.setAttribute("type", inputType)
    input.setAttribute("id", inputId)
    input.setAttribute("value", defaultValue)
    input.setAttribute("placeholder", placeholder)

    for (let index = 0; index < classes.length; index++) {
        const class_ = classes[index];
        addClass(input, class_)
    }

    return input
}

export function createInputLabel(inputId, classes, labelText="This is a label", inputType, defaultValue, placeholder="This is a placeholde"){
    const label = createLable(inputId, labelText)
    const input = createInput(inputType, inputId, defaultValue, placeholder, classes)
    
    const elements ={
        "label" : label,
        "input" : input
    }

    return elements
}

export function createButton(text){
    const button = document.createElement("button")
    button.innerText = text

    return button
}

export function createSearcher(){
    const inputLabel = createInputLabel("columnSearch", ["search", "column"], "Column Search", "text", "age", "all")
    const label = inputLabel["label"]
    const input = inputLabel["input"]

    const inputLabel2 = createInputLabel("rowSearch", ["search", "row"], "Row search", "text", "1", "all")
    const label2 = inputLabel2["label"]
    const input2 = inputLabel2["input"]

    const br = document.createElement("br")
    const br2 = document.createElement("br")

    const button = createButton("activate")
    button.addEventListener("click",function(){activate(input.value, input2.value)});

    const button2 = createButton("deactivate")
    button2.addEventListener("click",function(){deactivate(input.value, input2.value)});

    document.getElementById("table").append(label, input, br, label2, input2, br2, button, button2)
}

export function activate(columns, ids){
    if (ids){
        ids = `id_${ids}`
    }
    classes = [columns, ids, "data"]
    elements = getElements(classes)
    for (index = 0; index < elements.length; index++){
        addClass(elements[index], "active")
    }
}

export function deactivate(columns, ids){
    if (ids){
        ids = `id_${ids}`
    }
    classes = [columns, ids, "data"]
    elements = getElements(classes)
    for (index = 0; index < elements.length; index++){
        removeClass(elements[index], "active")
    }
}

export function toggle(columns, ids){
    elements = getElements(columns, ids)
    for (index = 0; index < elements.length; index++){
        toggleClass(elements[index], "active")
    }
}

export function getElements(classes){
    let classesText = ''
    for (let index = 0; index < classes.length; index++) {
        const classText = classes[index];
        classesText += ` ${classText}`
    }
    elements = document.getElementsByClassName(classesText)
    return elements
}

export function createRandomValues(lowerBound, upperBound, decimals){
    const difference = upperBound - lowerBound
    const addValue = Math.random() * difference
    const newValue = (lowerBound + addValue).toFixed(decimals)
    
    return newValue
}

export function createVariable(text, min, max, dec){
    const newVariable = {
        "text" : text,
        "min" : min,
        "max" : max,
        "dec" : dec,
    }
    variables.push(newVariable)
    headers.push(text)
    return newVariable
}

export function createRow(){
    const id = ids.length + 1
    const row = [id]
    for (let i = 0; i < variables.length; i++) {
        const variable = variables[i];
        const min = variable["min"]
        const max = variable["max"]
        const dec = variable["dec"]
        const value = createRandomValues(min, max, dec)
        row.push(value)
    }
    return row
}

export function htmlToCSV(filename) {
	var data = [];
	var rows = document.querySelectorAll("#table1 thead>tr, #table1 tbody>tr");
			
	for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
				
		for (var j = 0; j < cols.length; j++) {
		        row.push(cols[j].innerText);
        }
		        
		data.push(row.join(",")); 		
	}
	downloadCSVFile(data.join("\n"), filename)
};

export function downloadCSVFile(csv, filename) {
	var csv_file, download_link;

	csv_file = new Blob([csv], {type: "text/csv"});

	download_link = document.createElement("a");

	download_link.download = filename;

	download_link.href = window.URL.createObjectURL(csv_file);

	download_link.style.display = "none";

	document.body.appendChild(download_link);

	download_link.click();
}

export function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth()+1),
        date.getFullYear(),
    ].join('-');
}

export function createArticle(){
    const article = document.createElement("article")

    return article
}

export function createH1(text){
    const h1 = document.createElement("h1")
    h1.innerText = text

    return h1
};

export function createH2(text){
    const h2 = document.createElement("h2")
    h2.innerText = text

    return h2
};

export function createH3(text){
    const h3 = document.createElement("h3")
    h3.innerText = text

    return h3
};

export function createH4(text){
    const h4 = document.createElement("h4")
    h4.innerText = text

    return h4
}

export function createH5(text){
    const h5 = document.createElement("h5")
    h5.innerText = text

    return h5
}

export function createTitle(title){
    const h2 = createH2(title)

    addClass(h2, "title")

    return h2
};

export function createOl(listElements){
    const ol = document.createElement("ol")

    for (let index = 0; index < listElements.length; index++) {
        const element = listElements[index];
        const li = createLi(element)
        ol.append(li)
    }

    return ol
};

export function createLi(text){
    const li = document.createElement("li")
    li.innerText = text

    return li
};

export function createParagraph(text){
    const p = document.createElement("p")
    p.innerText = text

    return p
};

export function createIntroduction(text){
    const section = document.createElement("section")
    const h3 = createH3("Introduction")
    const paragraph = createParagraph(text)

    addClass(paragraph, "introduction")

    section.append(h3, paragraph)
    return section
};

export function createMethods(text){
    const section = document.createElement("section")
    const h3 = createH3("Methods")
    const paragraph = createParagraph(text)

    addClass(paragraph, "methods")

    section.append(h3, paragraph)
    return section
};

export function createResults(text){
    const section = document.createElement("section")
    const h3 = createH3("Results")
    const paragraph = createParagraph(text)

    addClass(paragraph, "results")

    section.append(h3, paragraph)
    return section
};

export function createDiscussion(text){
    const section = document.createElement("section")
    const h3 = createH3("Discussion")
    const paragraph = createParagraph(text)

    addClass(paragraph, "discussion")

    section.append(h3, paragraph)
    return section
};

export function createReferences(referernceList){
    const section = document.createElement("section")
    const h3 = createH3("References")
    const ol = createOl(referernceList)

    addClass(ol, "references")

    section.append(h3, ol)
    return section
};

export function createImg(imageSource, altText){
    const img = document.createElement("img");
    img.setAttribute("src", imageSource);
    img.setAttribute("alt", altText);

    return img;
};

export function createFigure(){
    const article = createArticle();
    const title = createH4("Figure 1. The background of Christmas.");
    const img = createImg('../../images/christmas_background.jpg', "Background in a red Christmas theme");
    article.append(title, img);

    return article;
};

export function createAuthorList(authors){
    const section = document.createElement("section")
    const h5 = createH4("Authors")
    const ol = createOl(authors)

    addClass(ol, "authorList")

    section.append(h5, ol)

    return section
}

export function createPage(contents=[], classes_=[]){
    const page = document.createElement("section");
    addClass(page, "page")

    if (classes_.length){
        for (let i = 0; i < classes_.length; i++) {
            const class_ = classes_[i];
            addClass(page, class_)
        }
    }

    if (contents.length){
        for (let i = 0; i < contents.length; i++) {
            const content = contents[i];
            page.append(content);
        }
    }

    return page
};

export class Name{
    constructor(
        firstName,
        middleNames,
        lastName,
        nickNames
    ){
        this.firstName = firstName
        this.middleNames = middleNames
        this.lastName = lastName
        this.nickNames = nickNames
    }

    get_firstName(capital = false){
        let firstName

        if (capital){
            firstName = this.firstName[0].toUpperCase() + ".";
        } else {
            firstName = this.firstName;
        }

        return firstName
    }

    get_lastName(capital = false){
        let lastName

        if (capital){
            lastName = this.lastName[0].toUpperCase() + ".";
        } else {
            lastName = this.lastName;
        }

        return lastName
    }

    get_middleNames(format = "string", capitals = false){
        const length = this.middleNames.length;
        let middleNames;
        if (format == "string"){
            middleNames = "";
            for (let index = 0; index < length; index++) {
                let middleName
                if (capitals){
                    middleName = this.middleNames[index][0].toUpperCase() + ".";
                } else {
                    middleName = this.middleNames[index];
                }
                middleNames += middleName;
                if (index + 1 < length){
                    middleNames += " ";
                };
            };
        } else {
            middleNames = this.middleNames
        }
        return middleNames;
    };

    get_nickNames(){
        return this.nickNames
    }

    get_fullName(firstCap = false, middleCap = false, lastCap = false){
        const name = `${this.get_firstName(firstCap)} ${this.get_middleNames("string", middleCap)} ${this.get_lastName(lastCap)}`

        return name
    }

}

export function createUl(listItems = [], itemsAreListElements = false){
    const ul = document.createElement("ul")

    if (listItems.length){
        for (let i = 0; i < listItems.length; i++) {
            const listItem = listItems[i];

            if (!itemsAreListElements){
                const li = document.createElement("li")
                li.innerText = listItem
                ul.append(li)
            } else {
                ul.append(listItem)
            }
        }
    }

    return ul
}

export function choice(list){
    const randomElement = list[Math.floor(Math.random() * list.length)];
    return randomElement
}

export function timeDateDiff(date1, date2){
    const diff = date2 - date1;
    const format = {
        "secs" : diff / 1000,
        "mins" : diff / 1000 / 60,
        "hours" : diff / 1000 / 60 / 60,
        "days" : diff / 1000 / 60 / 60 / 24,
        "weeks" : diff / 1000 / 60 / 60 / 24 / 7,
    };
    return format;
}

export function createSummaryDetails(sum, det){
    const summary = document.createElement("summary");
    const details = document.createElement("details");

    summary.innerHTML = sum;
    details.append(det);

    details.append(summary)

    return details
}

export function standadrizedMortalityRate(observations, expected, confidenceLevel, fisher){
    const poitEstimate = observations / expected;
    const lowerLimit = 0
}

export function confidenceInterval(level){
    const twoTailed = (1-level) / 2
    const value = Math.log(value)

}

export function createSection(){
    const section = document.createElement("section");

    return section;
}