document.getElementById("button").addEventListener("click", loadUsers);

async function loadUsers() {
    const response = await fetch('https://api.github.com/users');
    let users = await response.json();
    // return users
    let output = '';
    console.log(users);
    for(let i in users) {

        output += '<div class="users">'
                    +'<a href = ""><img src="'+users[i].avatar_url+'" width="70" height="70"></a>'
                    +'<ul>'+
                     '<li>ID: '+users[i].id+'</li>' +
                     '<li>Login: '+users[i].login+'</li>' +
                     '<ul>' +
                     '</div>';
    }
    document.getElementById('users').innerHTML = output;
}

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