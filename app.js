
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
yargs.version('1.1.0')

//console.log(yargs.argv)
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    
    body:{
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    }
},
    handler(argv){
        notes.addnote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removenote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler(){
        notes.listnotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
      notes.readnote(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)