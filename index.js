/* fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
*/

function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
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
  const el = document.querySelector('#results a')
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
 fetch(el.dataset.issuesurl.replace('{/number}',''),
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
                  Authorization: `token ${getToken()}`
                }
      }
   ).then(res => console.log(res));

}

function getIssues() {
  const el = document.querySelector('#results a');
  const issues = fetch(el.dataset.issuesurl.replace('{/number}',''),
      {
        method: 'GET',
        headers: {
            Authorization: `token ${getToken()}`
                }
      }).then(res => res.json()).then(json => document.getElementById('issues').innerHTML = json);
      debugger

  const issuesList = `<ul> ${json.map(issue => '<li>' + i.title + i.body + '</li>').join('')}</ul>`;
     document.getElementById('issues').innerHTML = issuesList
}
