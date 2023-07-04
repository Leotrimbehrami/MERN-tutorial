// @ desc  Get Goals
// @route  Get /api/goals
// @acces  Private
const getGoals = (req,res) => {
  res.status(200).json({message: "Get goals"})
}


// @ desc  set Goals
// @route  POST /api/goals
// @acces  Private
const setGoal = (req,res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }


  res.status(200).json({message: "Set goal"})
}

// @ desc  Update Goal
// @route  PUT /api/goals/:id
// @acces  Private
const updateGoal = (req,res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @ desc  Delete Goals
// @route  DELETE /api/goals/:id
// @acces  Private
const deleteGoal = (req,res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}