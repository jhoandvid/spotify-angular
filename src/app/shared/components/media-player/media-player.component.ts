import { Component } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  mockCover:TracksModel={
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javier_Beret.png/330px-Javier_Beret.png',
    album: 'Resilencia',
    name: 'Romperme más',
    url: 'http://localhost/track.mp3',
    _id: 1,
  }

}
