// Create class

class Profile {
    constructor() {

        // We are creating this values and checking the api source has a value like that by id's number   
        this.clientId = '';
        this.clientSecret = '';
    }

    async getProfile(uname) {

        // We are accessing to api via this url
        // If api contain same value(username in here) 
        // as what we are looking
        // then our value return json format
        let url = 'https://jsonplaceholder.typicode.com/users?username=';

        // Now information comes from our api source in json format
        // So we must convert to object by JSON.stringfy method
        const profileResponse = await fetch(url + uname);
        const profile = await profileResponse.json();

        const todoResponse = await fetch(
            `https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`
        );

        const todos = await todoResponse.json();



        return {
            profile: profile,
            todo: todos
        }

    }

}

