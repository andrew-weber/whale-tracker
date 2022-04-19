import { PrismaClient }  from "@prisma/client";
import OptionPosition from './OptionPosition'

const db = new PrismaClient();

export const OptionPositions = new OptionPosition(db);
