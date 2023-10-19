
// -----______________----------  For  Variable Declaration   -------_________-----------

var form = document.getElementById("form");
var title_vr = document.getElementById("mTitle");
var date_vr = document.getElementById("dueDate");
var desc_vr = document.getElementById("mDesc");
var errMsg_vr = document.getElementById("errMsg");
var setTaskBlock = document.getElementById("tasks");
// // console.log(form);
var allInfo = {};
var global_ID = 0;

function giveGlobalId() {
    global_ID = global_ID + 1;
    return global_ID;
}

// -----______________----------  For  Event Prevention -------_________-----------

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSet();
});

var formSet = () => {
    if (title_vr.value === "") {
        console.log(title_vr.Value);
        console.log('failure');
    }
    else {
        // console.log(title_vr.value);
        console.log('success');
        setInfo();
        document.getElementById("add").setAttribute("data-dismiss", "modal");
        document.getElementById("add").click();
        (function () {
            document.getElementById("add").setAttribute("data-dismiss", "");
        })();


    }
}

// -----______________----------  For  Defining of Functions -------_________-----------

// -------1. For setting an info

var setInfo = () => {
    // var obj = {} 
    // allInfo.push({
    //         title: title_vr.value,
    //         dueDate: date_vr.value,
    //         desc: desc_vr.value,
    //     });
    allInfo["title"]= title_vr.value;
    allInfo["dueDate"]= date_vr.value;
    allInfo["desc"]= desc_vr.value;

    // localStorage.setItem("allInfo", JSON.stringify(allInfo));

        
    console.log(allInfo);
    setTaskInBlock();
}

// -------2. For setting an info with CSS

var setTaskInBlock = () => {
    let tasks_id = giveGlobalId();

    // allInfo.map((x, cols) => {
    //     return (
            setTaskBlock.innerHTML +=
            `<div id="${tasks_id}" >
            <div class="bl" id="bl_tl">${allInfo.title}</div>
            <div class="bl" id="bl_dt">${allInfo.dueDate}</div>
            <div class="bl" id="bl_dsc">${allInfo.desc}</div>
            <div class="bl" id="bl_icn">
                <!-- <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i> -->
                <img  onclick="editThisTask(this)"  data-target="#form" data-toggle="modal" class="bl_icn_in" id="edit${tasks_id}" src="imagesIcons/edit.png">
                <img class="bl_icn_in" id="dlt${tasks_id}" src="imagesIcons/delete.png" onclick="deleteThisTask(${tasks_id})">

                    </div>
            </div>
            `
//         );
// }
//)

    resetAddForm();
}
// (() => {
//     allInfo = localStorage.getItem("allInfo");
//     setTaskInBlock();
//     console.log(allInfo)
// })();

// -------3. For Resetting a Add form 

var resetAddForm = () => {
    title_vr.value = "",
        date_vr.value = "",
        desc_vr.value = "";
}

// -----------4. Remove hierchical Parent or Main Parent
function deleteThisTask(block_id) {
    $("#dlt" + block_id).parent().parent().remove();
}

// -----------5. Edit hierchical Parent or Main Parent

function editThisTask(e) {

    s = e.parentElement.parentElement;
    title_vr.value = s.children[0].innerHTML;
    date_vr.value = s.children[1].innerHTML;
    desc_vr.value = s.children[2].innerHTML;
    
    s.remove();
    console.log(s.innerHTML);
    // TRUE 
    // title_vr = s.children[0].innerHTML;
    // date_vr = s.children[1].innerHTML;
    // desc_vr = s.children[2].innerHTML;
    // document.getElementById("mTitle").value = title_vr;
    // document.getElementById("dueDate").value = date_vr;
    // document.getElementById("mDesc").value = desc_vr;
    // console.log(title_vr + date_vr + desc_vr);
}

