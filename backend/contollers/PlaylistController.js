import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPlaylists = async (req, res) => {
    try {
        const response = await prisma.playlist.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getPlaylistById = async (req, res) => {
    try {
        const response = await prisma.playlist.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createPlaylist = async (req, res) => {
    try {
        const response = await prisma.playlist.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updatePlaylist = async (req, res) => {
    try {
        const response = await prisma.playlist.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deletePlaylist = async (req, res) => {
    try {
        const response = await prisma.playlist.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}