const tblLeft = document.querySelector<HTMLTableElement>('#tbl-left')!;
const tblRight = document.querySelector<HTMLTableElement>('#tbl-right')!;
const btnAdd = document.querySelector<HTMLButtonElement>('#btn-add')!;
const dropdown = document.querySelector<HTMLDivElement>('#dropDown')!;
const btnDropDownSave = document.querySelector<HTMLButtonElement>('#dropDownSave')!;
const date = document.querySelector<HTMLInputElement>('#txt-date')!;
const task = document.querySelector<HTMLInputElement>('#txt-task')!;
const description = document.querySelector<HTMLInputElement>('#txt-description')!;


tblLeft.addEventListener('click',removeTask);
tblRight.addEventListener('click',addTasks);

function removeTask(e:Event){
    if ((e.target as HTMLElement).classList.contains('fa-hand-point-right')){
        const elm = e.target as HTMLElement;
        let row = elm.closest('tr')!;
        let td = row.querySelector('td')!;
        let nodes = td.querySelectorAll('div');
        const date=nodes[0].innerText;
        const des=nodes[1].innerText;
        const note=nodes[2].innerText;
        row.remove();

        const newRow = document.createElement('tr');
        newRow.innerHTML=`<td>
                           <div>${date}</div>
                           <div class="text-bold">${des}</div>
                           <div>${note}</div>
                          </td>
                           <td class="trash">
                            <i class="fas fa-hand-point-left"></i>
                           </td>`;

        tblRight.querySelector('tbody')!.append(newRow);

    }
}

function addTasks(e:Event){
    if ((e.target as HTMLElement).classList.contains('fa-hand-point-left')){
        const elm = e.target as HTMLElement;
        let row = elm.closest('tr')!;
        let td = row.querySelector('td')!;
        let nodes = td.querySelectorAll('div');
        const date=nodes[0].innerText;
        const des=nodes[1].innerText;
        const note=nodes[2].innerText;
        row.remove();
        const newRow = document.createElement('tr');
        newRow.innerHTML=`<td>
                           <div>${date}</div>
                           <div class="text-bold">${des}</div>
                           <div>${note}</div>
                          </td>
                           <td>
                            <i class="fas fa-hand-point-right"></i>
                           </td>`;

        tblLeft.querySelector('tbody')!.append(newRow);

    }
}

btnAdd.addEventListener('click',()=>{
    if (btnAdd.innerText==='+ADD'){
        dropdown.style.display='block';
        btnAdd.innerText='Clear';
    }else {
        dropdown.style.display='none';
        btnAdd.innerText='+ADD';
    }
});

const inputsElm = [date,task, description];

btnDropDownSave.addEventListener('click',()=>{
    const elms = inputsElm.filter(value => value.innerText===null);
    if (!elms===undefined){
        elms[0].focus();
        return;
    }
    const newRow = document.createElement('tr');
    newRow.innerHTML=`<td>
                           <div>${date.value}</div>
                           <div class="text-bold">${task.value}</div>
                           <div>${description.value}</div>
                          </td>
                           <td class="trash">
                            <i class="fas fa-hand-point-right"></i>
                           </td>`;

    tblLeft.querySelector('tbody')!.append(newRow);
    dropdown.style.display='none';
    btnAdd.innerText='+ADD';

    /*TODO: Send Data to the Back End*/

});

