import * as g from  "./general.js";

const NOW = new Date()
const todos = []
const completed_todos = []

function createCourse(name = "course name", startDate = new Date(), endDate = new Date(), frequency = "weekly"){

}

function addToDoToTable(todo = ToDo){
    const timeArray = [];
    const time = todo.get_timeToEnd("days");
    const importance = todo.get_importance();
    let timePlace;

    for (let i = todoTableHeaders[0].length; i > 0; i--) {
        const header = parseInt(todoTableHeaders[0][i]);
        timeArray.push(header);
        if (time < header){
            timePlace = i
        }
    }
    todoTableBodyRows[importance][timePlace].append(todo.get_summaryOfList());
}

class ToDo{
    constructor(
        projectName = "no project",
        toDoName = "no name",
        startDate = new Date(),
        endDate = new Date(),
        importance = 0,
        checklist = [["nothing", true]],
    ){
        this.projectName = projectName;
        this.toDoName = toDoName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.importance = importance;
        this.checklist = checklist;
        this.complete = false;
        todos.push(this)
    }

    get_projectName(){
        return this.projectName
    }

    get_toDoName(){
        return this.toDoName
    }

    get_startDate(){
        return this.startDate
    }

    get_endDate(){
        return this.endDate
    }

    get_importance(){
        return this.importance
    }

    get_checklistArray(){
        return this.checklist
    }

    get_timeToStart(format){
        return g.timeDateDiff(NOW, this.get_startDate())[format]
    }

    get_timeToEnd(format){
        return g.timeDateDiff(NOW, this.get_endDate())[format]
    }

    get_checklistList(){
        const liElements = []
        const array_ = this.get_checklistArray();
        for (let i = 0; i < array_.length; i++) {
            const element = array_[i];
            const li = g.createLi(element[0])
            const input = g.createInput(
                "checkbox", 
                `${this.get_projectName().replace(/ /g,"_")}_${this.get_toDoName().replace(/ /g,"_")}_${element[0].replace(/ /g,"_")}`,0, "", 
                [this.get_projectName().replace(/ /g,"_"), this.get_toDoName().replace(/ /g,"_")]
            )
            if (element[1]){
                input.checked = true
            }
            li.prepend(input)
            liElements.push(li)
        }
        const ul = g.createUl(liElements, true)
        return ul
    }

    get_summaryOfList(){
        const project = this.get_projectName();
        const toDoName = this.get_toDoName();
        const startDate = g.formatDate(this.get_startDate());
        const endDate = g.formatDate(this.get_endDate());
        const summaryText = `${project}; ${toDoName};<br>${startDate} to ${endDate}`;
        const checklist = this.get_checklistList();
        const summary = g.createSummaryDetails(summaryText, checklist);

        return summary
    }

    set_complete(){
        this.complete = true
        const index = todos.indexOf(this)
        const todo = todos.pop(todos[index])
        completed_todos.push(todo)
    }

    checkEndDate(format){
        const endDate = this.get_endDate();
        const diff = g.timeDateDiff(NOW, endDate)[format]
    }
}

const todoTableHeaders = [["todo table", "1 days","3 days", "7 days", "14 days", "30 days","365 days", "ever"]]
const todoTableBodyRows = [["most important"], ["important"], ["less important"], ["not important"], ["optional important"], ["not set"]]
const todoTableFooterRows = [[]]
for (let i = 0; i < todoTableBodyRows.length; i++) {
    for (let j = 1; j < todoTableHeaders[0].length; j++) {
        todoTableBodyRows[i][j] = g.createSection()
    }
}
const todoTable = g.createTable(todoTableHeaders, todoTableBodyRows, todoTableFooterRows, true, "table_toDo")

g.addClass(todoTable, "border-none")
document.getElementById("todoSection").append(todoTable)

// Create todo's below this line

new ToDo("Trace II", "Update database", new Date(2022, 8, 1), new Date(2022,8,1,12,30), 0,[
    ['Change informed consent alway yes', true], 
    ['Change Overnight stay always yes', true], 
    ['Make a list of all variables with a lot of missing', false], 
    ['Remake inclusion and exclusion criteria', true], 
    ['Change labels of alcohol use', true], 
    ['Calculate delay', true], 
    ['Change labels of diabetes', true], 
    ['Create variable of no / minor / major complications', true], 
    ['Create variable had IC admission', true], 
    ['Change label local anesthesia', true], 
    ['Check EQ5D varialbes', true], 
    ['Change "Famele" to "Female"', true], 
    ['Check smoker status', true], 
    ['Tell Sander about cleaning', false], 
    ['Tell Sander about assumptions we make', false]
])
new ToDo("PCFS", "Close project", new Date(2022, 7, 29, 13, 0), new Date(2022, 7, 29, 15, 0), 1,[
    ['Contact Jenny', true],
    ['Find SOPs', true],
    ['Close all records', true],
    ['Check answers Jenny', true],
    ['Tell PhDs to watch', true],
]).set_complete()
new ToDo("Converis", "Progress meeting 6 months", new Date(2022, 7, 29, 11, 0), new Date(2022, 7, 29, 12, 0), 0, [
    ["Think of 4 chapters for book", true],
    ["Think of first article to write", true]
]).set_complete()
new ToDo("Chapter 3", "Create  test dataset", new Date(2022, 8, 5), new Date(2023, 0, 1), 2, [
    ['Creadte variables', false],
    ['Create CSV of set', false],
    ['Write R code for analysis', false],
    ['Create Figures', false],
    ['Tell Bob', false],
])
new ToDo("Courses", "EBROK", new Date(2022, 7, 29), new Date(2022, 8, 8), 0, [
    ['Enroll', true],
    ['CSB', true],
    ['Module 1', true],
    ['Module 2', true],
    ['Module 3', true],
    ['Module 4', true],
    ['Optional Module 5', false],
    ['Optional Module 6', false],
    ['Optional Module 7', false],
    ['Optional Module 8', false],
    ['Check location', false],
    ['Practise test', false],
])
new ToDo("TentamenGenerator", "Create grant proposal", new Date(2022, 7, 29), new Date(2022, 8, 1, 17, 0), 1, [
    ['Read feedback Tom Schokker', false], 
    ['Contact Julliette Parlevliet', false], 
    ['Update cost analysis', false], 
    ['Contact Tom Broens about other department', false], 
    ['Contact Emile', false], 
    ['Send proposal', false], 
])
new ToDo("Courses", "PINT 1", new Date(2022, 8 ,13, 11,0 ), new Date(2022, 8, 13, 12, 0), 0, [
    ["Read documentation", false]
])
new ToDo("Course", "Basic Methods & Reasoning 1", new Date(2022, 8, 12, 9, 0), new Date(2022, 8, 12, 12, 0), 0, [
    ["Watch video", true],
    ["Prepare e-learning", false],
    ["Write down questions", false]
])
new ToDo("Converis", "Progress meeting 10 months", new Date(2022, 10, 17, 15, 0), new Date(2022, 10, 17, 16 ,0), 0, [
    ["Think of stuff to discuss", false]
])
new ToDo("Chapter 3", "Create syntax for analysis", new Date(2022, 9, 1), new Date(2023, 1, 1), 1,[
    ["Make a list of all variables", false],
    ["Make a check for absurd values"],
    ["Make functions for all analysis"]
])
new ToDo("Chapter 3", "Think aloud", new Date(2022, 11, 1), new Date(2023, 2,1), 2,[
    ["Think of a suited supervisor", false],
    ["Create a proposal"]
])
new ToDo("JurisePrudence", "Lowi database", new Date(2022,8,1), new Date(2022,11,31), 0, [
    ["Read 20 advises", false],
    ["Make a list of all variables found", false],
    ["Discuss data extraction form", false]
])
new ToDo("Capita Selecta", "follow 14/20", new Date(2022, 7, 30, 10, 30), new Date(2022, 7, 30, 11, 30), 3,[
    ["Check chairman", true],
    ["Prepare material", true],
    ["Write summary", false]
]).set_complete()
new ToDo("Capita Selecta", "Host 0/1", new Date(2022, 9, 4, 10, 30), new Date(2022, 9, 4, 11, 30), 0, [
    ["Think of subject", false],
    ["Check subject with supervisor", false],
    ["Create presentation", false],
    ["Practise presenation", false]
])
new ToDo("World Headlinse", "Host 0/1", new Date(2022, 9, 4, 9, 20), new Date(2022, 9, 4, 9, 30), 1, [
    ["Think of subject", false],
    ["Check subject with supervisor", false],
    ["Create presentation", false],
    ["Practise presenation", false]
])
new ToDo("Reseach Meeting", "Host 0/1", new Date(2022, 11, 20, 11, 30), new Date(2022, 11, 20, 12, 30), 0,[
    ["Think of subject", false],
    ["Check subject with supervisor", false],
    ["Create presentation", false],
    ["Practise presenation", false]
])
new ToDo("Chapter 3", "61 shades of gray", new Date(2023,0,1), new Date(2023, 5, 1), 2, [
    ["Make a grid", false],
    ["Use real cases as prompts", false],
    ["Think about population", false]
])
new ToDo("Borrel commissie", "borrel 1-9,22", new Date(2022,8,29), new Date(2022, 9, 1), 3, [
    ['Tell the department', false],
    ['Check supplies', false],
    ['Refill supplies', false],
])
new ToDo("Converis", "Update", new Date(2022,9,1), new Date(2022,9,1), 4, [
    ["WEON", false],
    ["WCRI", false],
    ["Progress report 6 monthes", false]
])
new ToDo("NTVG", "Prinicpals vs Standards", new Date(2022, 10, 1), new Date(2022, 11, 31), 3, [
    ['Check audience', false],
    ['Think of action of audience', false],
    ['Read style of NTVG', false],
])
new ToDo("Q&I", "Journal club", new Date(2022, 8, 1), new Date(2022, 8, 15), 1, [
    ["Pick article", false],
    ["Create flyer", false],
    ["Send invitation", false],
    ["Flyer department", false],
    ["Check attendence", false],
    ["Create presentation", false]
])
new ToDo("Q&I", "Lectures", new Date(2022,8,29), new Date(2022,10,1), 1, [
    ["Discuss possibilities", false],
    ["Plan first lecture Frits", false]
])
new ToDo("People", "Meet", new Date(2022,11,31), new Date(2023,5,30),5,[
    ["Jolanda Habroken; Eindhove + Danël Lakens", false],
    ["Annabell Iken; LUMC orthopedie", false]
])

for (let i = 0; i < completed_todos.length; i++) {
    const todo = completed_todos[i];
    document.getElementById("doneSection").append(todo.get_summaryOfList())
}

// Create todo's above this line
for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    addToDoToTable(todo)
}