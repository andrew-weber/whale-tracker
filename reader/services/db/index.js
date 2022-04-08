import prisma from "@prisma/client";
import OptionPosition from "./OptionPosition.js";

const { PrismaClient } = prisma;

const db = new PrismaClient();
const optionPosition = new OptionPosition(db);

export { optionPosition };
