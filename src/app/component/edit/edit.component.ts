import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Output() onNewEvent = new EventEmitter()
  product: any = {
    name: "",
    price: 0,
    desc: "",
    image: ""
  }
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    console.log(id);
    this.productService.get(+id).subscribe(data => {
      this.product = data
      console.log(this.product);

    })
  }
  onHandleUpdate() {
    const id = this.route.snapshot.paramMap.get('id')!
    this.productService.Update(this.product).subscribe(() => {
      location.href = "/"
    })
  }
}
