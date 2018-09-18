import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  githubUrl = 'https://api.github.com/users/Jordomav/repos?per_page=100';
  constructor(private http: HttpClient) { }
  getAllRepos() {
    return this.http.get(this.githubUrl);
  }
}
