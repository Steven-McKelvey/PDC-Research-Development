import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Project } from '../project.interface';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet, RouterModule, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  constructor(private http: HttpClient) {}
  // a list of projects to be displayed on the main page
  projects: string[] = [];
  ngOnInit() {
    // get the list from /assets/projects.json
    this.http.get<Project>('../../assets/projects.json').subscribe((json: Project) => {
      this.projects = Object.keys(json);
    })
  }
}
