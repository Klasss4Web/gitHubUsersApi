// document.getElementById("button").addEventListener("click", loadUsers);

// async function loadUsers() {
//     const response = await fetch('https://api.github.com/users');
//     let users = await response.json();
//     // return users
//     let output = '';
//     console.log(users);
//     for(let i in users) {

//         output += '<div class="users">'
//                     +'<a href = ""><img src="'+users[i].avatar_url+'" width="70" height="70"></a>'
//                     +'<ul>'+
//                      '<li>ID: '+users[i].id+'</li>' +
//                      '<li>Login: '+users[i].login+'</li>' +
//                      '<ul>' +
//                      '</div>';
//     }
//     document.getElementById('users').innerHTML = output;
// }

const searchuser = document.getElementById('searchUser');
document.addEventListener('keyup', (e) => {
    const inputValue = e.target.value;
    if(inputValue != '') {
         console.log(inputValue)
        searchGitHubUser(inputValue)
        .then(data => {// console.log(data)
            if(data.profile.message === 'Not Found') {
                //Show Alert

            }else{
                //Show Profile
                showProfile(data.profile)
            }
            
        })
    }else{
        //Clear Profile
    }
})

// Search for Users
async function searchGitHubUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const profileData = await profileResponse.json();
    return {
        profile: profileData
    }
}

// Show Profile
let userProfile = document.getElementById('profile')
function showProfile(user) {
    userProfile.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-primary">Followers: ${user.followers}</span>
              <span class="badge badge-primary">Following: ${user.following}</span>
              <span class="badge badge-primary">Bio: ${user.bio}</span>
            </div>
          </div>
        </div>
    `
}

// console.log(loadUsers())

//Outputting Users Without Adding Event Listeners
// loadUsers().then(users => {
//     let output = '';
//     console.log(users)
//     for(let i in users) {

//         output += '<div class="users">'
//                     +'<a href = ""><img src="'+users[i].avatar_url+'" width="70" height="70"></a>'
//                     +'<ul>'+
//                      '<li>ID: '+users[i].id+'</li>' +
//                      '<li>Login: '+users[i].login+'</li>' +
//                      '<ul>' +
//                      '</div>';
//     }
//     document.getElementById('users').innerHTML = output;
// })