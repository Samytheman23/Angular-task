import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/components/services/backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadLimit = 20;
  title = 'angular-gallery';
  allPhotos: any = []
  photos: any = []
  constructor(private api: BackendApiService) { }

  ngOnInit(): void {
    this.api.getPhotos().subscribe(res => {
      this.allPhotos = res;
      this.photos = [...this.allPhotos].splice(0, this.loadLimit)
      console.log(this.photos)
    })
  }

  loadMore() {
    const nextPhotoSet = [...this.allPhotos].splice(this.photos.length, this.loadLimit)
    this.photos = [...this.photos, ...nextPhotoSet]
  }
  
}
