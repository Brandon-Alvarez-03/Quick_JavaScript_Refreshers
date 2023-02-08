const mongoose = require("mongoose")
const models = require("./schemas.js")
const connection = require("./connection.js")

const { Item, List } = models

// Implementation Of a List with Nested Item Objects
async function makeNewList (listName) {
  const newList = await List.create({
    name: listName,
  })
  return newList
}

makeNewList("List1")

async function makeNewItem (itemName) {
  const newItem = await Item.create({
    name: itemName,
  })
  return newItem
}

// makeNewItem ("Item1")

async function addExistingItemToList (itemName, listName) {
  const foundList = await List.findOne({ 
    name: listName
  }) 
  const existingItem = await Item.findOne({ 
    name: itemName
  })

  foundList.items.push(existingItem)
  foundList.save()
}

// addExistingItemToList ("Item1","List1")

async function addNewItemToList (itemName, listName) {
  const foundList = await List.findOne({ 
    name: listName
  }) 
  const newItem = await Item.create({ 
    name: itemName
  })

  foundList.items.push(newItem)
  foundList.save()
}

// addNewItemToList ("Item2","List1")

async function displayList(listName) {
  const foundList = await List.findOne({ 
    name: listName
  }) 
  console.log(foundList)
}

// displayList("List1")
