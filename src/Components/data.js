let ToDoItems =[];

if(document.cookie !== '')
{
    let cookies =JSON.parse(document.cookie.split(';').filter((Cookie)=>Cookie.startsWith('JSONData'))[0].split('=')[1]) ;
    ToDoItems =cookies;
}

let ToDel = [];

export {ToDoItems,ToDel};