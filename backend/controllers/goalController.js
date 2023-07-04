const asyncHandler = require("express-async-handler")
// @ desc  Get Goals
// @route  Get /api/goals
// @acces  Private

const getGoals = asyncHandler ( async (req,res) => {
  //console.log(req.body)
  res.status(200).json({message: "Get goals"})
})


// @ desc  set Goals
// @route  POST /api/goals
// @acces  Private
const setGoal =  asyncHandler (async (req,res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }


  res.status(200).json({message: "Set goal"})
})

// @ desc  Update Goal
// @route  PUT /api/goals/:id
// @acces  Private
const updateGoal = asyncHandler ( async (req,res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @ desc  Delete Goals
// @route  DELETE /api/goals/:id
// @acces  Private
const deleteGoal = asyncHandler( async (req,res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}