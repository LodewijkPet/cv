export function createTable (headerRows, bodyRows, footRows, id){
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

export function createTableBody(bodyRows, headerNames){
    const tableBody = document.createElement("tbody")

    for (let index = 0; index < bodyRows.length; index++) {
        const row = createBodyRow(bodyRows[index]);
        tableBody.append(row)
        
    }

    return tableBody
}

export function createBodyRow(bodyRowCells, headerNames){
    const row = document.createElement("tr")

    for (let index = 0; index < bodyRowCells.length; index++) {
        const bodyRowCell = createBodyRowCell(bodyRowCells[index]);
        row.append(bodyRowCell)
    }

    return row
}

export function createBodyRowCell(cellValue, headerName, rowId){
    const cell = document.createElement("td")
    cell.innerText = cellValue

    addClass(cell, "data")
    addClass(cell, headerName)
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
    const cell = document.createElement("td")
    cell.innerText = cellValue

    return cell
}

export function toggleClass(element, toggleClass){
    element.classList.toggle(toggleClass)
}

export function addClass(element, newClass){
    element.classList.add(newClass)
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