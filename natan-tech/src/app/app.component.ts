import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'natan-tech';

  mouseEnter(info : string){
    const techInfo = document.getElementById('tech-info');
    techInfo.style.display = 'block';
    techInfo.innerText = info;
 }

 mouseLeave(){
  const techInfo = document.getElementById('tech-info');
  techInfo.style.display = 'none';
 }
}
