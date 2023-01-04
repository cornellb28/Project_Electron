import express from 'express';
import {getTracks, getTrackById, createTrack, updateTrack, deleteTrack} from '../contollers/TrackController.js';

const router = express.Router();


// Track
router.get('/api/tracks', getTracks);
router.get('/api/tracks/:id', getTrackById);
router.post('/api/tracks', createTrack);
router.patch('/api/tracks/:id', updateTrack);
router.delete('/api/tracks/:id', deleteTrack);

export default router;