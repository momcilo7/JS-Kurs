class Message{
    message_id='';
    message_content='';
    user_id='';
    api_url='https://62b5d09e6999cce2e8fa5d6d.mockapi.io';

    async create(){
        let session = new Session();
        session_id=session.getSession();

        let data = {
            user_id:session_id,
            content:this.message_content,    
        }

        data = JSON.stringify(data);

        let resposne = await fetch(this.api_url + '/messages',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:data
        })
        data = await resposne.json();

        return data;
    }

    async getAllMessage(){
        let response = await fetch(this.api_url + '/messages');
        let data = await response.json();
        return data;
    }
}