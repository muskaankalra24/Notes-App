const fs = require('fs')
const chalk = require('chalk')


const addnote = (title,body)=>{
  const notes = loadNotes()


  //const duplicateNotes  = notes.filter((note)=> note.title ===title)
  const duplicateNote  = notes.find((note)=> note.title ===title)

  if(!duplicateNote){
    notes.push({
      title: title,
      body: body
    })
   saveNotes(notes)
   console.log('new node added')
  }else{
    console.log('note title taken')
  }
  }
  
const saveNotes = (notes)=>{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
  
}

const loadNotes = () => {
try{
  const databuffer = fs.readFileSync('notes.json')
  const dataJSON = databuffer.toString()
  return JSON.parse(dataJSON)
}catch (e) {
  return []
}

}

const removenote = (title) => {
  const notes = loadNotes()
  // const duplicateNotes  = notes.filter(function(note){
  //   return note.title ===title
  //   })
  //   if(duplicateNotes.length >=1){
  //     notes.pop({
  //       title: title
       
  //     })
  const notestokeep = notes.filter((note)=>note.title != title)
        if( notes.length > notestokeep.length ){
        console.log(chalk.green.inverse('note removed'))
        saveNotes(notestokeep)
      }else  {
       console.log(chalk.red.inverse('no note found'))
      }
    }

const listnotes= ()=>{
  const notes = loadNotes()
  console.log(chalk.green.inverse('list all notes'))
  notes.forEach(note => {
   console.log(note.title)
    
  });

}
const readnote =(title)=> {
  const notes = loadNotes()
  const readnote = notes.find((note)=> note.title ===title)
  if(readnote){
    console.log(chalk.inverse(title))
    console.log(readnote.body)


  }else{
    console.log(chalk.red.inverse('note is not there'))
  }


}


module.exports = {
  
  addnote: addnote,
  removenote:removenote,
  listnotes: listnotes,
  readnote:readnote
}