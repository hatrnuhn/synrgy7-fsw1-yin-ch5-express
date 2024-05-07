import { Router } from 'express';
import PeopleRouter from './people';

const router = Router();

router.use('/people', PeopleRouter);

export default router;