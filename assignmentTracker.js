let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`); //this sets the id attribute of the new row to a unique identifier.

    //below, allows us to insert cells into the new row with values given by the user.
    row.insertCell(0).innerHTML = document.getElementById('course').value;
    row.insertCell(1).innerHTML = document.getElementById('assignment').value;
    row.insertCell(2).innerHTML = document.getElementById('hours').value;
    row.insertCell(3).innerHTML = document.getElementById('due-date').value;

    // this is a delete button that will be found in the last cell of the new row.
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));

    // after a new row is added the input fields will be cleared.
    document.getElementById('course').value = '';
    document.getElementById('assignment').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('due-date').value = '';
});

// this function creates a delete button with a unique id
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting rown with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}