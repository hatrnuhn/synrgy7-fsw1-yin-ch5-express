"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const people_1 = require("../handlers/people");
const router = (0, express_1.Router)();
router.get('/', people_1.getPeople);
router.post('/', people_1.addPerson);
router.get('/:id', people_1.getPersonById);
router.delete('/:id', people_1.delPerson);
exports.default = router;