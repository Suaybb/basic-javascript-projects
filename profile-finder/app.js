// 1 We are getting value from user's input 

const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup', (event) => {
    ui.clear();

    let enter_text = event.target.value;

     
     
    // Control text whether its null or not
    if(enter_text !== null){
        
    // Now we send our value to api (go profile.js)
        profile.getProfile(enter_text).then(res => {
            if(res.profile.length !== 0){
                // Now we get relevant information in api source
                // and now We must show to ui (go ui.js)
                ui.showProfile(res.profile[0]); 
                ui.showTodos(res.todo);

            } else {
                ui.showAlert(enter_text);
            }
        }).catch(err => {
            ui.showAlert(enter_text);
        });
    }


});

