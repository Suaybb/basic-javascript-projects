class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }


    showProfile(profile) {

        this.profileContainer.innerHTML = `
        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                <a href="#">
                    <img src="https://via.placeholder.com/150" class="img-thumbnail">
                </a>
            </div>
            <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">
                    <li class="list-group-item">
                      Name: ${profile.name}
                    </li>
                    <li class="list-group-item">
                      Username; ${profile.username}
                    </li>
                    <li class="list-group-item">
                       Email: ${profile.email}
                    </li>
                    </li>
                    <li class="list-group-item">
                       Street: ${profile.address.street}<br>
                       City: ${profile.address.city}<br>
                       Zipcode: ${profile.address.zipcode}<br>
                       Suite: ${profile.address.suite}
                    </li>
                    </li>
                    <li class="list-group-item">
                       Website: ${profile.website}
                    </li>
                    </li>
                    <li class="list-group-item">
                       Company Name: ${profile.company.name}
                    </li>
                </ul>
                <h4>Todo List</h4>
                    <ul class="list-group" id="todo">
                    </ul>
            </div>
        </div>
    </div>
        `;
    }

    showAlert(enter_text) { 
        if(enter_text === ''){
            this.alert.innerHTML = '';
        }else {
            this.alert.innerHTML = `There is no value ${enter_text}`;
        }
    }

    showTodos(todos) {

        let html = '';
        console.log(todos);
        todos.forEach(element => {

            console.log(element);

            if (element.completed) {
                html += `
                        <li class="list-group-item bg-success">
                            ${element.title}
                        </li>
                    `;
            } else {
                html += `
                    <li class="list-group-item bg-secondary">
                        ${element.title}
                    </li>
                `;
            }
        });

        this.profileContainer.querySelector('#todo').innerHTML = html;
    }


    clear() {
        this.profileContainer.innerHTML = '';
        this.alert.innerHTML = '';
    }

}