const asyncHandler = require("express-async-handler")

const Goal = require("../model/goalModel.js")

//       GET

// @ desc  Get Goals
// @route  Get /api/goals
// @acces  Private

const getGoals = asyncHandler ( async (req,res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)

  //console.log(req.body)
  // res.status(200).json({message: "Get goals"})
})

// SET -POST

// @ desc  set Goals
// @route  POST /api/goals
// @acces  Private
const setGoal =  asyncHandler (async (req,res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }

  const goal = await Goal.create({
    text: req.body.text
  })


  res.status(200).json(goal)
})

// UPDATE

// @ desc  Update Goal
// @route  PUT /api/goals/:id
// @acces  Private

const updateGoal = asyncHandler ( async (req,res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json(updatedGoal)
})


// DELETE 

// @ desc  Delete Goals
// @route  DELETE /api/goals/:id
// @acces  Private

const deleteGoal = asyncHandler( async (req,res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  await goal.deleteOne()
  

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}