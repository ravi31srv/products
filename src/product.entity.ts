/* eslint-disable prettier/prettier */

import { IsString } from "class-validator";

export class createProductRo {
     id:number;
    name: string;
    description: string;
    brand: string;
    tags: string[];
    category: string;
    created_at: Date;
}

