const mongoose = require('mongoose')

const localsSchema = new mongoose.Schema({
  local: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  task: {
    type: String,
    required: [true, 'Task is required']
  },
  isDone: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const todoModel = mongoose.model('locals', localsSchema)
module.exports = todoModel
