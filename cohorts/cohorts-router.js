const db = require('./cohorts-model')
const studentsDb = require('./students_model')

const router = require('express').Router()

router.get('/', async (req, res) => {
    try {
        const cohorts = await db.find()
        res.status(200).json(cohorts)
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving cohorts'
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const cohort = await db.findById(req.params.id)
        if (cohort) {
            res.status(200).json (cohort)
        } else {
            res.status(404).json({
                message: 'The cohort with the specified ID does not exist'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving cohort'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        if(req.body.name) {
            const cohort = await db.add(req.body)
            res.status(201).json({cohort})
        } else {
            res.status(400).json({
                message: 'Please provide name of the cohort'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error adding cohort'
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        if(req.body.name) {
            const cohort = await db.update(req.params.id, req.body)            
            if (cohort) {
                res.status(200).json(cohort)
            } else {
                res.status(404).json({
                    message: 'The cohort with the specified ID does not exist'
                })
            }
        } else {
            res.status(400).json({
                message: 'Please provide name of the cohort'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating cohort'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const cohort = await db.remove(req.params.id)
        if(cohort) {
            res.status(204).end()
        } else {
            res.status(404).json({
                message: 'The cohort with the specified ID does not exist'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting cohort'
        })
    }
})

// Students route
router.get('/:id/students', async(req, res) => {
    try {
        const students = studentsDb.findById(req.params.id)
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving students'
        })
    }
})

module.exports = router