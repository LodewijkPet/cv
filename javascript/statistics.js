 function createTable (headerRows, bodyRows, footRows, id){

    const table = document.createElement("table")
    table.id = id

    const thead = createTableHead(headerRows)
    const tbody = createTableBody(bodyRows, headerRows[headerRows.length - 1])
    const tfoot = createTableFoot(footRows)

    table.append(thead)
    table.append(tbody)
    table.append(tfoot)

    return table
}

 function createTableHead(headerRows){
    const tableHead = document.createElement("thead")

    for (index in headerRows){
        row = createHeaderRow(headerRows[index])
        tableHead.append(row)
    }

    return tableHead
}

 function createHeaderRow(headerRowCells){
    const row = document.createElement("tr")

    for (index in headerRowCells){
        const headerCell = createHeadersCell(headerRowCells[index])
        row.append(headerCell)
    }

    return row
}

 function createHeadersCell(headerName){
    const cell = document.createElement("th")
    cell.innerText = headerName

    addClass(cell, headerName)
    addClass(cell, "header")

    return cell
}

 function createTableBody(bodyRows, headerNames){
    const tableBody = document.createElement("tbody")

    for (index in bodyRows){
        row = createBodyRow(bodyRows[index], headerNames)
        tableBody.append(row)
    }

    return tableBody
}

 function createBodyRow(bodyRowCells, headerNames){
    const row = document.createElement("tr")

    for (index in bodyRowCells){
        bodyRowCell = createBodyRowCell(bodyRowCells[index], headerNames[index], bodyRowCells[0])
        row.append(bodyRowCell)
    }

    return row
}

 function createBodyRowCell(cellValue, headerName, rowId){
    const cell = document.createElement("td")
    cell.innerText = cellValue

    addClass(cell, "data")
    addClass(cell, headerName)
    addClass(cell, `id_${rowId}`)
    return cell
}

 function createTableFoot(footRows){
    const tableFoot = document.createElement("tfoot")
        
    for (index in footRows){
        row = createFootRow(footRows[index])
        tableFoot.append(row)
    }

    return tableFoot
}

 function createFootRow(footRowCells){
    const row = document.createElement("tr")

    for (index in footRowCells){
        const footRowCell = createFootRowCell(footRowCells[index])
        row.append(footRowCell)
    }

    return row
}

 function createFootRowCell(cellValue){
    const cell = document.createElement("td")
    cell.innerText = cellValue

    return cell
}

 function toggleClass(element, toggleClass){
    element.classList.toggle(toggleClass)
}

 function addClass(element, newClass){
    element.classList.add(newClass)
}

 function removeClass(element, removeClass){
    element.classList.remove(removeClass)
}

 function createLable(inputId, labelText){
    const label = document.createElement("label")
    label.setAttribute("for", inputId)
    label.innerText = labelText

    return label
}

 function createInput(inputType, inputId, defaultValue, placeholder, classes){
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

 function createInputLabel(inputId, classes, labelText="This is a label", inputType, defaultValue, placeholder="This is a placeholde"){
    const label = createLable(inputId, labelText)
    const input = createInput(inputType, inputId, defaultValue, placeholder, classes)
    
    const elements ={
        "label" : label,
        "input" : input
    }

    return elements
}

 function createButton(text){
    const button = document.createElement("button")
    button.innerText = text

    return button
}

 function createSearcher(){
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

 function activate(columns, ids){
    if (ids){
        ids = `id_${ids}`
    }
    classes = [columns, ids, "data"]
    elements = getElements(classes)
    for (index = 0; index < elements.length; index++){
        addClass(elements[index], "active")
    }
}

 function deactivate(columns, ids){
    if (ids){
        ids = `id_${ids}`
    }
    classes = [columns, ids, "data"]
    elements = getElements(classes)
    for (index = 0; index < elements.length; index++){
        removeClass(elements[index], "active")
    }
}

 function toggle(columns, ids){
    elements = getElements(columns, ids)
    for (index = 0; index < elements.length; index++){
        toggleClass(elements[index], "active")
    }
}

 function getElements(classes){
    let classesText = ''
    for (let index = 0; index < classes.length; index++) {
        const classText = classes[index];
        classesText += ` ${classText}`
    }
    elements = document.getElementsByClassName(classesText)
    return elements
}

 function createRandomValues(lowerBound, upperBound, decimals){
    const difference = upperBound - lowerBound
    const addValue = Math.random() * difference
    const newValue = (lowerBound + addValue).toFixed(decimals)
    
    return newValue
}

 function createVariable(text, min, max, dec){
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

 function createRow(){
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

 function htmlToCSV(filename) {
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

 function downloadCSVFile(csv, filename) {
	var csv_file, download_link;

	csv_file = new Blob([csv], {type: "text/csv"});

	download_link = document.createElement("a");

	download_link.download = filename;

	download_link.href = window.URL.createObjectURL(csv_file);

	download_link.style.display = "none";

	document.body.appendChild(download_link);

	download_link.click();
}

const tables = []

const variables = []
const headers = ["id"]

const age = createVariable("age", 18, 90, 0)
const height = createVariable("height", 1.60, 2.20, 2)
const weight = createVariable("weight", 60, 120, 1)

const ids = []
const numberOfIds = 10

for (let i = 0; i < numberOfIds; i++) {
    const newId = createRow()
    ids.push(newId)
}

const headerRows = [headers]

const bodyRows = []
ids.forEach(id => bodyRows.push(id))

const footRowOne = ["-", "-", "-", "-"]
const footRows = [footRowOne]

const table = createTable(headerRows, bodyRows, footRows)
document.getElementById("table").append(table)

createSearcher()

const downloadButton = createButton("download")
downloadButton.addEventListener("click", function(){htmlToCSV("test.csv")})
document.getElementById("table").append(downloadButton)
