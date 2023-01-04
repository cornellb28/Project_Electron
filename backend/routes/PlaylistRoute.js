import express from 'express';
import {getPlaylists, getPlaylistById, createPlaylist, updatePlaylist, deletePlaylist} from '../contollers/PlaylistController.js';

const router = express.Router();

// Playlist
router.get('/playlist', getPlaylists);
router.get('/playlist/:id', getPlaylistById);
router.post('/playlists', createPlaylist);
router.patch('/playlists/:id', updatePlaylist);
router.delete('/playlists/:id', deletePlaylist);

export default router;