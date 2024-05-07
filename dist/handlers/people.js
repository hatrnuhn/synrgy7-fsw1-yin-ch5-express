"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delPerson = exports.addPerson = exports.getPersonById = exports.getPeople = void 0;
const http_status_codes_1 = require("http-status-codes");
const people_1 = __importDefault(require("../data/people"));
const getPeople = (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json(people_1.default);
};
exports.getPeople = getPeople;
const getPersonById = (req, res) => {
    const userFound = people_1.default.find((user) => user.id === +req.params.id);
    if (!userFound) {
        return res.status(http_status_codes_1.StatusCodes.OK).json({ msg: `User is not found` });
    }
    res.status(http_status_codes_1.StatusCodes.OK).json(userFound);
};
exports.getPersonById = getPersonById;
const addPerson = (req, res) => {
    const body = req.body;
    const newUser = Object.assign({ id: people_1.default[people_1.default.length - 1].id + 1 }, body);
    people_1.default.push(newUser);
    res.status(http_status_codes_1.StatusCodes.CREATED).send(newUser);
};
exports.addPerson = addPerson;
const delPerson = (req, res) => {
    const index = people_1.default.findIndex(p => p.id === +req.params.id);
    const deleted = people_1.default[index];
    people_1.default.splice(index, 1);
    res.status(http_status_codes_1.StatusCodes.OK).json(deleted);
};
exports.delPerson = delPerson;
