import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  mockCover:any={
    cover:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javier_Beret.png/330px-Javier_Beret.png',
    album: 'Resilencia',
    name: 'Romperme más'
  }

}
