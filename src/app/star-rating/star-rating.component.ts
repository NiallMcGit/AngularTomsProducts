import { EventEmitter } from '@angular/core';
import { startWith } from 'rxjs/operator/startWith';
import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  @Output() notify: 
  EventEmitter<string> = new EventEmitter<string>();


  onClick(){
    this.notify.emit('Clicked!');
  }


  constructor() { }

    public ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
