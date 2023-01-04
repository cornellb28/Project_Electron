import {PrismaClient} from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const getTracks = async (req, res) =>{
    try {
        const response = await prisma.track.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTrackById = async (req, res) =>{
    try {
        const response = await prisma.track.findUnique({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createTrack = async (req, res) => {
    const id = uuidv4();
    const {year,bpm, title, album, fileType, size, plays, biterate, samplerate, length, initialKey, location} = req.body;
    try {
        const newTrack = await prisma.track.create({
            data:{
                id: id,
                bpm: bpm,
                title: title,
                album: album,
                fileType: fileType, 
                size: size,
                plays: plays,
                biterate: biterate,
                samplerate: samplerate,
                location: location,
                initialKey: initialKey,
                length: length,
                createdAt: new Date().toISOString(),
                year: year,
            }
        });
        res.status(201).json(newTrack);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateTrack = async (req, res) =>{
    const {year,bpm, title, album, fileType, size, plays, biterate, samplerate, length, initialKey, createdAt, location} = req.body;
    try {
        const updatedTrack = await prisma.track.update({
            where:{
                id: req.params.id
            },
            data:{
                bpm: bpm,
                title: title,
                album: album,
                fileType: fileType, 
                size: size,
                plays: plays,
                biterate: biterate,
                samplerate: samplerate,
                location: location,
                initialKey: initialKey,
                length: length,
                createdAt: createdAt,
                year: year
            }
        });
        res.status(200).json(updatedTrack);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteTrack = async (req, res) =>{
    try {
        const track = await prisma.track.delete({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(track);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}



