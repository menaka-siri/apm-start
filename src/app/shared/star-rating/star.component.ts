import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']  
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating:number = 0;

    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
        console.log(`The rating ${this.rating} was clicked!`);
    }
}