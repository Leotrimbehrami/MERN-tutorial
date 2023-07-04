const express = require("express")
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController.js')


// router.get('/', (req,res) => {
//   res.status(200).json({message: "Get goals"})
// })

// router.get('/', getGoals)

// router.post('/', setGoal)

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router