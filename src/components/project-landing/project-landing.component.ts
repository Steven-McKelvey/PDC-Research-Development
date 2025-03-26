import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Project } from '../project.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-landing',
  imports: [RouterOutlet, RouterLink, RouterModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './project-landing.component.html',
  styleUrl: './project-landing.component.css'
})
export class ProjectLandingComponent implements OnInit {
  // use formControls to keep track of whether a radio button has been selected. Idea from ChatGPT on 3/24/25 (https://chatgpt.com/share/67e136f8-97e4-8000-9cf2-cb6b4e4f6f45)
  radioControl = new FormControl();

  projectId: string = ""; // get from route

  // values to be displayed on the page:
  description: string = "";
  // learning outcomes
  mpiLO: string = "";
  mtLO: string = "";
  gpuLO: string = "";
  // github link
  github: string = "";

  // NOTE: to use HttpClient, a line was added to app.config.ts (provideHttpClient() in "providers")
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // retrieve project name from route parameters
    this.route.params.subscribe(params => {
      this.projectId = params['project-name'];
    })
    
    // retrieve data from the json file found in /assets
    this.http.get<Project>('../../assets/projects.json').subscribe((json: Project) => {
      const jsonRoot = json[this.projectId]
      this.description = jsonRoot.description;
      this.mpiLO = jsonRoot.mpiLearningObjective;
      this.mtLO = jsonRoot.mtLearningObjective;
      this.gpuLO = jsonRoot.gpuLearningObjective;
      this.github = jsonRoot.githubLink;
    })
  }
}
