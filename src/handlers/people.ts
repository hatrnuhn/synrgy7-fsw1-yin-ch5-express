import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import data from '../data/people';

export const getPeople = (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json(data);
}

export const getPersonById = (req: Request, res: Response) => {
    const userFound = data.find((user) => user.id === +req.params.id);
    
    if (!userFound) {
        return res.status(StatusCodes.OK).json( { msg: `User is not found` } );
    }

    res.status(StatusCodes.OK).json(userFound);
}

export const addPerson = (req: Request, res: Response) => {
    const body = req.body;
    const newUser = {
        id: data[data.length - 1].id + 1,
        ...body
    };

    data.push(newUser);

    res.status(StatusCodes.CREATED).send(newUser);
}

export const delPerson = (req: Request, res: Response) => {
    const index = data.findIndex(p => p.id === +req.params.id);
    const deleted = data[index];
    data.splice(index, 1);

    res.status(StatusCodes.OK).json(deleted);
}