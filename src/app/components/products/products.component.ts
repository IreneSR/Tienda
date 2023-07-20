import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myWishList: Product[] = [];
  myDesembolse: number = 0;

  constructor(private storeService: StoreService) {
    this.myWishList = storeService.getWishList();
  }

  products: Product[] = [
    {
      id: "1",
      name: "Batman Arkam City",
      price: 499,
      image: "./assets/image/batman.jpg"
    },
    {
      id: "2",
      name: "F1 2022",
      price: 699,
      image: "./assets/image/f1.jpg"
    },
    {
      id: "3",
      name: "Goat Simulator",
      price: 299,
      image: "./assets/image/goat.jpg"
    },
    {
      id: "4",
      name: "God of War Ragnarok",
      price: 1999,
      image: "./assets/image/godofwar.jpg"
    },
    {
      id: "5",
      name: "Marvel's Spider Man",
      price: 1299,
      image: "./assets/image/spiderman.jpg"
    },
    {
      id: "6",
      name: "The Last of Us Part II",
      price: 1799,
      image: "./assets/image/thelast.jpg"
    },
    {
      id: "7",
      name: "The Last of Us Part I Remake II.0 Pro",
      price: 2000,
      image: "./assets/image/thelastt.jpg"
    },
    {
      id: "8",
      name: "Cyberpunk",
      price: 0,
      image: "./assets/image/thelastt.jpg"
    }
  ];
  onCar(product: Product) {
    this.storeService.addToCart(product);
    this.myDesembolse = this.storeService.getTotal();
  }
}
