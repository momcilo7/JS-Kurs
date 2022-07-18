class Comment{
    post_id='';
    user_id='';
    content='';
    api_url='https://62b5d09e6999cce2e8fa5d6d.mockapi.io';

    create(){
        let data ={
            post_id : this.post_id,
            user_id : this.user_id,
            content : this.content,
        }

        data=JSON.stringify(data);

        let response = fetch (this.api_url + '/comments',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:data
        })
        .then(response =>response.json())
        .then(data=>{})
    }

    async get(post_id){
        let api_url = this.api_url + '/comments';

        const response = await fetch(api_url);
        const data = await response.json();
        let post_comments =[];

        let i =0;
        data.forEach(item => {
            if(item.post_id === post_id){
                post_comments[i] = item;
                i++;
            }
        });
        return post_comments;
    }
}