import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MovieService } from '../../../../services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  searchTerm$: Subject<string> = new Subject();
  moviesFound: any = null;
  total_results!: any;

  constructor(private readonly movieService: MovieService) {
    this.searchTerm$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((term: string) => {
          console.log(term);
          return this.movieService.getMovieByNombre(term);
        })
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.moviesFound = data.results;
          this.total_results = data.total_results;
        },
        () => alert('error no existe')
      );
  }

  ngOnInit() {}
  onChangeInput(event: any) {
    if (event.target.value === '') {
      console.log('vacío');
      this.total_results = null;
      this.moviesFound = [];
      console.log(this.total_results, this.moviesFound);
    } else {
      this.searchTerm$.next(event.target.value);
    }
  }
}
