import {Component} from 'angular2/core';
import {Config} from './config.service'; 
import {Video} from  './video';
import {PlayListComponent} from './playlist.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlayListComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1,"Angular 2 for Beginners","f8qBeaGe2S4","Using Angular 2 for the first time!"),
            new Video(2,"Angular 2 for Beginners Next part","bKWDKmHvF78","Second video of the series.")
        ]
    }
}
