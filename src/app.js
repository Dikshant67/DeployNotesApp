// console.log("Welcome to magic notes app.This is app.js");
// // let flag = true ;
// let updateId = -1;
// //If user adds notes ,add it to local storage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function (e) {
//   let addTxt = document.getElementById("addTxt");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   console.log(typeof JSON.parse(notes));
// if(updateId === -1 ){
//     notesObj.push(addTxt.value);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
// }else{
//     flag = true;
//     notesObj[updateId] = addTxt.value  ; 
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     updateId = -1 ;
// }
// let btnedit=document.querySelector('#addBtn');
// btnedit.innerHTML='Add note'
//   addTxt.value = "";
//   console.log(notesObj);
//   showNotes();
// });
// showNotes();
// //function to show elemets from local storage
// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let html = "";
//   notesObj.forEach(function (element, index) {
//     html += `
//         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            
//             <div class="card-body">
//               <h5 class="card-title">Note ${index + 1}</h5>
//               <p class="card-text">${element}</p>
//               <button id=${index} onclick="deleteNode(this.id)"  class="btn btn-primary">Delete Note</button>
//               <button  id=${index} onclick="editNode(this.id)"  class="btn btn-primary">Edit Note</button>

//             </div>

//           </div>
          
//         `;
//   });

//   let notesElm = document.getElementById("notes");
//   if (notesObj.length != 0) {
//     notesElm.innerHTML = html;
//   } else {
//     notesElm.innerHTML = `Nothing to show.Use "Add Notes" section above to add notes `;
//   }
// }
// function deleteNode(index) {
//   console.log("Deleted "+(parseInt(index)+1)) ;
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   notesObj.splice(index, 1);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   showNotes();
// }
// let searchTxt=document.getElementById('searchTxt');
// searchTxt.addEventListener('input',function name() {
//     let inputVal=searchTxt.value;
// console.log("input event fired",inputVal);
// let noteCard=document.getElementsByClassName('noteCard')
// });

// function editNode(id){
//     // flag = false;
    
//     console.log(id)
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//       notesObj = [];
//     } else {
//       notesObj = JSON.parse(notes);
//     }
//     console.log(notesObj)
//     let note ;
//     // let index ;
//     notesObj.forEach((ele,index)=>{
//         if(id == index){
//         note = ele;
//         }
//     })
//     console.log(note);
//     let addTxt = document.getElementById("addTxt");
//     addTxt.value = note ;
//     let btnedit=document.querySelector('#addBtn');
//     btnedit.innerHTML='Update Note'
//     updateId = id ;
    

// }

// // 

// // console.log(head.innerHTML)
// // console.log(head.innerText)

// // let arr = ["ram ","dikshant" ,"suraj"]
// // let ind = 0;
// // setInterval(async ()=>{
// //     if(arr.length === ind) ind = 0 ;
// //     let head =  document.querySelector('#change')
// //         head.innerHTML = arr[ind++]
// // },500)

// let arr1 = ['W','e','l','c','o','m','e',' ','t','o',' ','M','a','g','i','c','N','o','t','e','s',' ','A','p','p','l','i','c','a','t','i','o','n']
// let ind1 = 0 ;
// let str = ""
// setInterval(async ()=>{
//     if(arr1.length === ind1){ ind1 = 0 ; str = ""}
//     str += arr1[ind1++]
//     let head =  document.querySelector('.wel')
//         head.innerHTML = str + '|';
// },80)

// function deleteAll(){

//     localStorage.clear();
//     showNotes();
//     window.alert('All Notes Deleted')

// }

// let clrIndex=0;
// var color=[];
// console.log("Welcome to Magic Notes App. This is app.js");
// let clr = document.querySelector('#clr');


// clr.addEventListener('input',()=>{
//  color[clrIndex++] = clr.value;
// })


// let updateId = -1;

// // Add event listener for the add/update button
// const addBtn = document.getElementById("addBtn");

// var color1;
// addBtn.addEventListener("click", function () {
//   const addTxt = document.getElementById("addTxt").value;
//    color1 =document.getElementById('clr');
//   let notes = getNotes();
//   if (addTxt.length !== 0) {
//     if (updateId === -1) {
//       notes.push(addTxt);
//     } else {
//       notes[updateId] = addTxt;
//       updateId = -1;
//       addBtn.innerHTML = "Add Note";
//     }

//     saveNotes(notes);
//   }else{
//     alert("Enter at least One character")
//   }
//   addTxt.value = "";
//   console.log(notes);
//   showNotes();
// });

// showNotes();

// // Function to show elements from local storage
// function showNotes() {
//   const notes = getNotes();
//   const notesElm = document.getElementById("notes");
//   let html = "";

//   notes.forEach((element, index) => {
//     html += `
//       <div class="noteCard my-2 mx-2 card" style="width: 18rem;   background-color: ${color[index]};">
//         <div class="card-body">
//           <h5 class="card-title">Note ${index + 1}</h5>
//           <p class="card-text">${element}</p>
//           <button id="${index}" onclick="deleteNode(${index})" class="btn btn-primary">Delete Note</button>
//           <button id="${index}" onclick="editNode(${index})" class="btn btn-primary">Edit Note</button>
//         </div>
//       </div>`;
//   });
//   document.querySelector('#nothing').innerHTML=notes.length ? " " : `Nothing to show. Use "Add Notes" section above to add notes.`;
//   notesElm.innerHTML =  html ;
// }

// function deleteNode(index) {
//   console.log("Deleted note " + (index + 1));
//   let notes = getNotes();
//   notes.splice(index, 1);
//   saveNotes(notes);
//   showNotes();
// }

// const searchTxt = document.getElementById('searchTxt');
// searchTxt.addEventListener('input', function () {
//   const inputVal = searchTxt.value.toLowerCase();
//   console.log("input event fired", inputVal);
//   const noteCards = document.getElementsByClassName('noteCard');
//   Array.from(noteCards).forEach((card) => {
//     const cardText = card.getElementsByTagName('p')[0].innerText.toLowerCase();
//     card.style.display = cardText.includes(inputVal) ? 'block' : 'none';
//   });
// });

// function editNode(id) {
//   console.log(id);
//   const notes = getNotes();
//   document.getElementById("addTxt").value = notes[id];
//   updateId = id;
//   addBtn.innerHTML = 'Update Note';
// }

// function getNotes() {
//   let notes = localStorage.getItem("notes");
//   return notes ? JSON.parse(notes) : [];
// }

// function saveNotes(notes) {
//   localStorage.setItem("notes", JSON.stringify(notes));
// }

// // Animation
// let arr1 = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'M', 'a', 'g', 'i', 'c', ' ', 'N', 'o', 't', 'e', 's', ' ', 'A', 'p', 'p', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n'];
// let ind1 = 0;
// let str = "";
// setInterval(() => {
//   if (arr1.length === ind1) { ind1 = 0; str = "" }
//   str += arr1[ind1++];
//   document.querySelector('.wel').innerHTML = str + '|';
// }, 80);

// function deleteAll() {
//   localStorage.clear();
//   showNotes();
//   window.alert('All Notes Deleted');
// }


let clrIndex = 0;
var color = [];
console.log("Welcome to Magic Notes App. This is app.js");

// Handle color input
let clr = document.querySelector('#clr');
clr.addEventListener('input', () => {
  color[clrIndex++] = clr.value;
});

let updateId = -1;
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const addTxt = document.getElementById("addTxt").value;
  let notes = getNotes();
  let noteColors = getNoteColors();

  if (addTxt.length !== 0) {
    if (updateId === -1) {
      notes.push(addTxt);
      noteColors.push(clr.value);
    } else {
      notes[updateId] = addTxt;
      noteColors[updateId] = clr.value;
      updateId = -1;
      addBtn.innerHTML = "Add Note";
    }

    saveNotes(notes, noteColors);
  } else {
    alert("Enter at least one character");
  }
  
  document.getElementById("addTxt").value = "";
  showNotes();
});

showNotes();

function showNotes() {
  const notes = getNotes();
  const noteColors = getNoteColors();
  const notesElm = document.getElementById("notes");
  let html = "";

  notes.forEach((element, index) => {
    const bgColor = noteColors[index] || '#FFFFFF'; // Default to white if color is not set
    html += `
      <div class="noteCard my-2 mx-2 card" style="width: 18rem; background-color: ${bgColor};">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNode(${index})" class="btn btn-primary">Delete Note</button>
          <button id="${index}" onclick="editNode(${index})" class="btn btn-primary">Edit Note</button>
        </div>
      </div>`;
  });
  
  document.querySelector('#nothing').innerHTML = notes.length ? "" : `Nothing to show. Use "Add Notes" section above to add notes.`;
  notesElm.innerHTML = html;
}

function deleteNode(index) {
  let notes = getNotes();
  let noteColors = getNoteColors();
  
  notes.splice(index, 1);
  noteColors.splice(index, 1);
  
  saveNotes(notes, noteColors);
  showNotes();
}

const searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', function () {
  const inputVal = searchTxt.value.toLowerCase();
  const noteCards = document.getElementsByClassName('noteCard');
  
  Array.from(noteCards).forEach((card) => {
    const cardText = card.getElementsByTagName('p')[0].innerText.toLowerCase();
    card.style.display = cardText.includes(inputVal) ? 'block' : 'none';
  });
});

function editNode(id) {
  const notes = getNotes();
  document.getElementById("addTxt").value = notes[id];
  updateId = id;
  addBtn.innerHTML = 'Update Note';
}

function getNotes() {
  let notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

function getNoteColors() {
  let noteColors = localStorage.getItem("noteColors");
  return noteColors ? JSON.parse(noteColors) : [];
}

function saveNotes(notes, noteColors) {
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("noteColors", JSON.stringify(noteColors));
}

// Animation for welcome text
let arr1 = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'M', 'a', 'g', 'i', 'c', ' ', 'N', 'o', 't', 'e', 's', ' ', 'A', 'p', 'p', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n'];
let ind1 = 0;
let str = "";
setInterval(() => {
  if (arr1.length === ind1) { ind1 = 0; str = ""; }
  str += arr1[ind1++];
  document.querySelector('.wel').innerHTML = str + '|';
}, 80);

function deleteAll() {
  localStorage.clear();
  showNotes();
  window.alert('All Notes Deleted');
}
