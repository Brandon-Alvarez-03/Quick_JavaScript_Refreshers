const mongoose = require("mongoose")
const models = require("./schemas.js")
const connection = require("./connection.js")

const { ItemRef, ListRef } = models

// Implementation Of a List with Referenced Objects
async function makeNewList (listName) {
  const newList = await ListRef.create({
    name: listName,
  })
  console.log(newList)
  return newList
}

// makeNewList("List1")

async function makeNewItem (itemName) {
  const newItem = await ItemRef.create({
    name: itemName,
  })
  return newItem
}

// makeNewItem("Item1")

async function addExistingItemToList (itemName, listName) {
  const foundList = await ListRef.findOne({ 
    name: listName
  }) 
  const existingItem = await ItemRef.findOne({ 
    name: itemName
  })

  if (!foundList.items.includes(existingItem._id)) {
    foundList.items.push(existingItem._id)
  }
  existingItem.list = foundList._id
  foundList.save()
  existingItem.save()
}

// addExistingItemToList("Item1","List1")

async function addNewItemToList (itemName, listName) {
  const foundList = await ListRef.findOne({ 
    name: listName
  }) 
  const newItem = await ItemRef.create({ 
    name: itemName,
    list: foundList._id
  })

  foundList.items.push(newItem._id)
  foundList.save()
}

// addNewItemToList("Item2","List1")

// Retrieval of referenced lists with Object IDs
async function findListAndDisplayItems (listName) {
  const foundList = await ListRef.findOne({
    name: listName
  })
  // Notice we need the populate method to display the referenced items
  .populate("items")

  console.log(foundList)

  return foundList
}

// findListAndDisplayItems("List1")



