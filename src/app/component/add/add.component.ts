import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Output() onNewEvent = new EventEmitter()
  product: IProduct = {
    name: "",
    price: 0,
    image: "",
    desc: "",
    id: 0
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  onHandleAdd() {
    this.productService.Add(this.product).subscribe(() => {
      location.href = "/"
    })
  }
}
