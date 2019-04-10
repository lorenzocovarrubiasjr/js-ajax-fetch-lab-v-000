/* fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
*/
const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';

function getToken() {
  return '';
}

function forkRepo() {

  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`}
    }
).then(res => res.json()).then(json => showResults(json));
}


function showResults(el) {
  document.getElementById('results').innerHTML = `<a href= ${el.html_url} data-issuesurl="`+ el.issues_url +`">` + el.html_url + `</a>`;
}

function createIssue() {
  const issuesUrl = 'https://api.github.com/repos/lorenzocovarrubiasjr/js-ajax-fetch-lab/issues';
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
 fetch(issuesUrl,
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
                  Authorization: `token ${getToken()}`
                }
      }
   ).then(res => console.log(res));

   getIssues();

  }

function getIssues() {
  const issuesUrl = 'https://api.github.com/repos/lorenzocovarrubiasjr/js-ajax-fetch-lab/issues';
  const issues = fetch(issuesUrl,
      {
        method: 'GET',
        headers: {
            Authorization: `token ${getToken()}`
                }
      }).then(res => res.json()).then(json => showIssues(json));

    function showIssues(json){
  const issuesList = `<ul> ${json.map(issue => '<li>' + issue.title + issue.body + '</li>').join('')}</ul>`;
     document.getElementById('issues').innerHTML = issuesList
   }
}
