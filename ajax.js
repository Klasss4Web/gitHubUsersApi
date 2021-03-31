document.getElementById("button").addEventListener("click", loadUsers);

function loadUsers() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function() {
        if(this.status == 200) {
            let users = JSON.parse(this.responseText);
           // console.log(users)

            let output = "";

            // users.forEach(user => {
            //     output += `<div class="users">
            //                     <img src=${users.avatar_url} width="70" height="70">
            //                     <ul>
            //                         <li>ID: ${users.id}</li>
            //                         <li>Login: ${users.login}</li>
            //                     <ul> 
            //                </div>`;
            // });

            for(let i in users) {

                output += '<div class="users">'
                            +'<img src="'+users[i].avatar_url+'" width="70" height="70">'
                            +'<ul>'+
                                '<li>ID: '+users[i].id+'</li>' +
                                '<li>Login: '+users[i].login+'</li>' +
                            '<ul>' +
                            '</div>';
            }

            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}
