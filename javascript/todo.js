import {createTable} from './statisticsModule.js'

class ToDoTable{
    constructor(){
        this.headerRowsCount = 0;
        this.bodyRowsCount = 0;
        this.footerRowsCount = 0;
        this.headerRows = [];
        this.bodyRows = [];
        this.footerRows = [];
    }

    get_table(id){
        const table = createTable(
            this.headerRows,
            this.bodyRows,
            this.footerRows,
            id
        )
        return table
    }
}