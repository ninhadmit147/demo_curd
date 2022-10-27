import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: IProduct[] = []
  constructor(private productService: ProductService) { }
  index: number = 0
  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data
      this.index++
    })

  }
  Remove(id: any) {
    this.productService.Remove(id).subscribe(() => {
      // this.products = this.products.filter(item => item.id !== id)
      location.reload()
    })
  }

}
