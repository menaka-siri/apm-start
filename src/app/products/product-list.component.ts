import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Page Title - Product List Component ';
    imageWidth: number = 50;
    imageMargin: number= 2;
    showImage: boolean = false;

    private _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor( private productService: ProductService) {
        //this.filteredProducts = this.products;
        //this.listFilter = 'cart';
    }

    performFilter(filterby: string): IProduct[] {
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter( (product: IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterby) !== -1);
    }

    toggleImage() : void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("product-list component" + " : In OnInit");
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}