const addbtn=document.querySelector("#addbtn");
const main=document.querySelector("#main");

addbtn.addEventListener('click', function(){
    addNote();
})



const saveNotes = () =>{
    const notes=document.querySelectorAll(".note textarea");
    // console.log(notes);
    const data=[];
    notes.forEach((note)=>{
        data.push(note.value);
    })
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}



// Jab addnote se hoga to text empty hoga but local storage se jab save vale ayenge to usme text ayga(previous notes)
const addNote=(text="")=>{
   const note= document.createElement("div");
   note.classList.add("note");
   note.innerHTML=`<div class="tool">
   <i class="save fas fa-save"></i>
   <i class="trash fas fa-trash"></i>
    </div>
   <textarea>${text}</textarea>`;

//    note mdhe jo trash vala class cha ele aahe tyavr click event lavlay 


   note.querySelector(".trash").addEventListener("click",function(){
    note.remove();
    saveNotes();
   })

   note.querySelector(".save").addEventListener("click",function(){
    saveNotes();
   })
  main.appendChild(note)
  saveNotes();
}

// page load hote hi call hoga previous note dikhayega
(
    function(){
        const localNotes=JSON.parse(localStorage.getItem("notes"));
        if (localNotes=== null) {
            addNote()
        } else {
            localNotes.forEach(
                (localNotes) => {
                    addNote(localNotes)
                }
            )
        }
    }
)()








