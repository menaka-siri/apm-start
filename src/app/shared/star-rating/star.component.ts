import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']  
})
export class StarComponent implements OnChanges {
    starWidth: number = 1;
    rating:number = 3.5;

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 75 / 5;
    }
}