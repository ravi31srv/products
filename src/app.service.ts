/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { knex } from 'knex';
import { createProductDto } from './product.dto';
import { config } from './dbConfig';

@Injectable()
export class AppService {
  db = knex(config); // use of queryBuilder knex
  
  async createProduct(dto: createProductDto): Promise<any> {
    dto["created_at"] = new Date(); // appending created_at filed

    const result = await this.db('products')
      .returning("*")
      .insert(dto
      );

    return result[0];
  }

  async getListOfProducts(category: string, pageNo = 1, pageSize = 3): Promise<any> {
    const offset = (pageNo - 1) * pageSize;

    const productList = await this.db('products').select('*')
      .offset(offset)
      .limit(pageSize)
      .orderBy('created_at', 'desc')
      .where({ category: category });
      
      return productList;
  }
}
