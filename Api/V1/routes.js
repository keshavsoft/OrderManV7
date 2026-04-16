import express from 'express';
import { router as routerFromLedgerNames } from "./LedgerNames/end-points.js";
import { router as routerFromItemsTable } from "./ItemsTable/end-points.js";

const router = express.Router();
router.use('/LedgerNames', routerFromLedgerNames);
router.use('/ItemsTable', routerFromItemsTable);

export { router };