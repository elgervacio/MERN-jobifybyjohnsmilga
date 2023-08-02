import express from 'express'

const router = express.Router()

import {
    createJob,
    deleteJob,
    updateJob,
    showStats,
    getAllJobs
} from '../controllers/jobsControllers.js'

router.route('/').post(createJob).get(getAllJobs)
// remember about :id
router.route('/stat').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)


export default router