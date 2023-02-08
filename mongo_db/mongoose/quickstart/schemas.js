const mongoose = require("mongoose")

// Destructuring Mongoose Properties
const { Schema, SchemaTypes, model } = mongoose

// Simple Item Schema Example
const itemSchema = new Schema ({
  name: String,
})

const Item = new model("Item", itemSchema)

// Simple List Schema with items stored directly in array
const listSchema = new Schema ({
  name: String,
  items: [{}]
})

const List = new model("List", listSchema)

// List Schema With Validation and Ref to Items by Object ID
const listSchemaRef = new Schema({
  name: {
    type: String,
    required: true,
  },
  items: [{
    type: SchemaTypes.Oid,
    ref: "ItemRef",
  }],
})

const ListRef = new model("ListRef", listSchemaRef)

// Item Schema With Validation and Ref to List by Object ID
const itemSchemaRef = new Schema({
  name: {
    type: String,
    required: true,
  },
  list: {
    type: SchemaTypes.Oid,
    ref: "ListRef",
  }
})

// Exports all of the desired objects for use elsewhere
const ItemRef = new model("ItemRef", itemSchemaRef)
module.exports = {
  Item,
  ItemRef,
  List,
  ListRef,
}
