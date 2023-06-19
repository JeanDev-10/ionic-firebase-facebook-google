import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent  implements OnInit {
  @Input() movie:any;
  constructor() { }

  ngOnInit() {}

}
