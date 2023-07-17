let allInfo = [];

function addWorker(){
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let position = document.getElementById("position").value;
    let salary = document.getElementById("salary").value;

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("position").value = "";
    document.getElementById("salary").value = "";

    let newWorker = {
        name: name,
        id: id,
        position: position,
        salary: salary
    };

    allInfo.push(newWorker);
    console.log(allInfo);

    drawWorker();
}

function drawWorker(){
    let result = "";

    for (let i=0; i<allInfo.length; i++){
        result+= `
        <tr>
            <td><p>${allInfo[i].id}</p></td>
            <td><p>${allInfo[i].name}</p></td>
            <td><p>${allInfo[i].position}</p></td>
            <td><p>${allInfo[i].salary}</p></td>
            <td><button class="btn"><img class="img-fluid" src="icons/edit.jpg" alt="Edit"></button></td>
            <td><button class="btn" onclick="deleteWorker(${i})"><img class="img-fluid" src="icons/delete.jpg" alt="Delete"></button></td>
        </tr>
    `
    }

    document.getElementById("result").innerHTML = result;
}

function deleteWorker(index){
    allInfo.splice(index, 1);
    drawWorker();
}

function deleteAll(){
    allInfo.splice(0, allInfo.length);
    drawWorker();
}