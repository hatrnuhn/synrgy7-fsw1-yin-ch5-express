import { Router } from "express";
import { getPeople,
    getPersonById,
    addPerson,
    delPerson
 } from '../handlers/people';

const router = Router();

router.get('/', getPeople);

router.post('/', addPerson);

router.get('/:id', getPersonById);
router.delete('/:id', delPerson);

export default router;