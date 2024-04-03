import { v4 as Uuidv4 } from 'uuid'

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const {name, description, price} = createProductDto

    const newProduct = new Product(
      Uuidv4(),
      name,
      description,
      price
    );
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find( product => product.id === id);

    if( !product) {
      throw new NotFoundException(`This action returns a #${id} product`)
    }

    return product

  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return updateProductDto
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}