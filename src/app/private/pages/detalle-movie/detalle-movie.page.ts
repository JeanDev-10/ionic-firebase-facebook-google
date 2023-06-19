import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-detalle-movie',
  templateUrl: './detalle-movie.page.html',
  styleUrls: ['./detalle-movie.page.scss'],
})
export class DetalleMoviePage implements OnInit {
  movieService=inject(MovieService);

  constructor(private route: ActivatedRoute) { }
  movie$!:Observable<any>;
  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
       this.movie$=this.movieService.getMovie(params.id);
      }
    );
  }
  Like(){
    alert('dar like')
  }

}
