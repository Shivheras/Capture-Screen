import { Component,OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Screenshot';
  ngOnInit()
{
  
}
capture()
{

  let elem = document.getElementById("scream");
  html2canvas(elem).then(function (canvas) {
    let generatedImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let a = document.createElement('a');
    a.href = generatedImage;
    a.download = `image.png`;
    a.click();
  });
}
}
