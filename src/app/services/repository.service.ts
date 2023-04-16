import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geek } from '../models/geek';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private baseUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient,) { }

  getRepositories(login: string): Observable<Array<Geek>> {
    return this.httpClient.get<Array<Geek>>(`${this.baseUrl}/users/${login}/repos`);
  }

  getCommitsByRepo(repoUrl: string) {
    return this.httpClient.get(`${repoUrl}/commits`);
  }
  getPullsByRepo(repoUrl: string) {
    return this.httpClient.get(`${repoUrl}/pulls`);

  }
  getIssueByRepo(repoUrl: string) {
    return this.httpClient.get(`${repoUrl}/issues`);

  }
}

export const ReposTest =
{
  "id": 1340328,
  "node_id": "MDEwOlJlcG9zaXRvcnkxMzQwMzI4",
  "name": "Brief",
  "full_name": "takeo/Brief",
  "private": false,
  "owner": {
    "login": "takeo",
    "id": 23,
    "node_id": "MDQ6VXNlcjIz",
    "avatar_url": "https://avatars.githubusercontent.com/u/23?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/takeo",
    "html_url": "https://github.com/takeo",
    "followers_url": "https://api.github.com/users/takeo/followers",
    "following_url": "https://api.github.com/users/takeo/following{/other_user}",
    "gists_url": "https://api.github.com/users/takeo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/takeo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/takeo/subscriptions",
    "organizations_url": "https://api.github.com/users/takeo/orgs",
    "repos_url": "https://api.github.com/users/takeo/repos",
    "events_url": "https://api.github.com/users/takeo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/takeo/received_events",
    "type": "User",
    "site_admin": false
  },
  "html_url": "https://github.com/takeo/Brief",
  "description": "Brief is a Chat Style for Skype 5 on OS X.",
  "fork": true,
  "url": "https://api.github.com/repos/takeo/Brief",
  "forks_url": "https://api.github.com/repos/takeo/Brief/forks",
  "keys_url": "https://api.github.com/repos/takeo/Brief/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/takeo/Brief/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/takeo/Brief/teams",
  "hooks_url": "https://api.github.com/repos/takeo/Brief/hooks",
  "issue_events_url": "https://api.github.com/repos/takeo/Brief/issues/events{/number}",
  "events_url": "https://api.github.com/repos/takeo/Brief/events",
  "assignees_url": "https://api.github.com/repos/takeo/Brief/assignees{/user}",
  "branches_url": "https://api.github.com/repos/takeo/Brief/branches{/branch}",
  "tags_url": "https://api.github.com/repos/takeo/Brief/tags",
  "blobs_url": "https://api.github.com/repos/takeo/Brief/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/takeo/Brief/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/takeo/Brief/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/takeo/Brief/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/takeo/Brief/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/takeo/Brief/languages",
  "stargazers_url": "https://api.github.com/repos/takeo/Brief/stargazers",
  "contributors_url": "https://api.github.com/repos/takeo/Brief/contributors",
  "subscribers_url": "https://api.github.com/repos/takeo/Brief/subscribers",
  "subscription_url": "https://api.github.com/repos/takeo/Brief/subscription",
  "commits_url": "https://api.github.com/repos/takeo/Brief/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/takeo/Brief/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/takeo/Brief/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/takeo/Brief/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/takeo/Brief/contents/{+path}",
  "compare_url": "https://api.github.com/repos/takeo/Brief/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/takeo/Brief/merges",
  "archive_url": "https://api.github.com/repos/takeo/Brief/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/takeo/Brief/downloads",
  "issues_url": "https://api.github.com/repos/takeo/Brief/issues{/number}",
  "pulls_url": "https://api.github.com/repos/takeo/Brief/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/takeo/Brief/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/takeo/Brief/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/takeo/Brief/labels{/name}",
  "releases_url": "https://api.github.com/repos/takeo/Brief/releases{/id}",
  "deployments_url": "https://api.github.com/repos/takeo/Brief/deployments",
  "created_at": "2011-02-08T01:19:49Z",
  "updated_at": "2018-02-18T20:50:20Z",
  "pushed_at": "2011-02-14T18:49:18Z",
  "git_url": "git://github.com/takeo/Brief.git",
  "ssh_url": "git@github.com:takeo/Brief.git",
  "clone_url": "https://github.com/takeo/Brief.git",
  "svn_url": "https://github.com/takeo/Brief",
  "homepage": "http://media.miekd.com/brief/",
  "size": 1848,
  "stargazers_count": 2,
  "watchers_count": 2,
  "language": "JavaScript",
  "has_issues": false,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "has_discussions": false,
  "forks_count": 1,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": {
    "key": "other",
    "name": "Other",
    "spdx_id": "NOASSERTION",
    "url": null,
    "node_id": "MDc6TGljZW5zZTA="
  },
  "allow_forking": true,
  "is_template": false,
  "web_commit_signoff_required": false,
  "topics": [],
  "visibility": "public",
  "forks": 1,
  "open_issues": 0,
  "watchers": 2,
  "default_branch": "master"
}