/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { createProductDto } from './product.dto';

@Controller('v1/products')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // route to add new product 
  @Post('add-product')
  async createProduct(@Body() product: createProductDto) {
    try {
      //checking of types of product details
      if (typeof (product.name) !== 'string' || typeof (product.description) !== 'string' || typeof (product.brand) !== 'string' || typeof (product.category) !== 'string') {
        throw new BadRequestException("value of params name , description, brand and category should be of type string"
        )
      }
      return this.appService.createProduct(product);
    }
    catch (ex) {
      throw new HttpException(
        {
          status: ex.status ? ex.status : HttpStatus.INTERNAL_SERVER_ERROR,
          message: ex.message,
        },
        ex.status ? ex.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //route to get product by category
  @Get('items-by-category')
  async getListOfProducts(@Query('category') category: string, @Query('pageNo') pageNo: number, @Query('pageSize') pageSize: number) {
    try {
      if (!category) {
        throw new BadRequestException({
          status: HttpStatus.BAD_REQUEST,
          message: "required param 'category' missing."
        })
      };
        if (!pageNo) {
          throw new BadRequestException({
            status: HttpStatus.BAD_REQUEST,
            message: "required param 'pageNo' missing."

          });
        }
        if (!pageSize) {
          throw new BadRequestException({
            status: HttpStatus.BAD_REQUEST,
            message: "required param 'pageSize' missing."

          });
        }
        return  this.appService.getListOfProducts(category, pageNo, pageSize);
        
      }
    catch (ex) {
      throw new HttpException(
        {
          status: ex.status ? ex.status : HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Internal Server Error",
        },
        ex.status ? ex.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

