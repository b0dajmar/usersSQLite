import sqlite3 from 'sqlite3'

const db = new sqlite3.Database("./database.sqlite")

const initializedb = async() => {
    await dbRun("");
    const user1 = {
        id:"1",
        firstName: "Do",
        lastName:"Boz",
        email:"",
        class:"package"
    }
    const user2 = {
        id:"2",
        firstName: "Ter",
        lastName:"Ror",
        email:"",
        class:"fear"
    }
    const user3 = {
        id:"3",
        firstName: "Mik",
        lastName:"Los",
        email:"",
        class:"mihaly"
    }
    const user4 = {
        id:"4",
        firstName: "Si",
        lastName:"Licon",
        email:"",
        class:"meatballs"
    }
    const user5 = {
        id:"5",
        firstName: "Tor",
        lastName:"Rent",
        email:"",
        class:"legal"
    }
}