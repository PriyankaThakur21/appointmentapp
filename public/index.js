    async function save(event){
        event.preventDefault()
        const name=event.target.name.value;
        const email=event.target.email.value;
        const phone=event.target.phn.value;
        const obj={name,email,phone};
        try{
        const post=await axios.post('http://localhost:3000/users/data',obj)
        showonscreen(post.data);
        }
        catch(err){
        console.log(err)
        }
        event.target.reset();
    }
    function showonscreen(obj){
        const p=document.getElementById('block1');
        const list=document.createElement('li');
        list.id=obj.id
        list.textContent=list.textContent+obj.name+'--'+obj.email+'--'+obj.phone;
        const deletebtn=document.createElement('input')
        deletebtn.type='button'
        deletebtn.value='delete'
        // const editbtn=document.createElement('input')
        // editbtn.type='button'
        // editbtn.value='edit'
        // editbtn.onclick=function() {editdata(obj.id)};
        deletebtn.onclick=function() {deletedata(obj.id)};
        list.appendChild(deletebtn)
        // list.appendChild(editbtn)
        p.appendChild(list);
    }

    async function deletedata(userid){
        try{
        const dlt = axios.delete(`http://localhost:3000/deleteUser/${userid}`);
        removeuserfromscreen(userid);
        }
    catch(err){
        console.log(err);
    }
}

    function removeuserfromscreen(userid){
        const parentel=document.getElementById('block1');
        const childel=document.getElementById(userid)
        parentel.removeChild(childel)
    }

    // async function editdata(userid){
    //     try{
    //         const edit = await axios.get(`http://localhost:3000/editUser/${userid}`)
    //         this.obj = edit.data;
    //         edituserdetail(obj.name, obj.email, obj.phone,userid)
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

    function edituserdetail(newname,newemail,newphn,userId){
        document.getElementById('name').value=newname
        document.getElementById('email').value=newemail
        document.getElementById('phn').value=newphn
        deletedata(userId)
    }

    window.addEventListener('DOMContentLoaded', async ()=>{
        try{
        const getUsers= await axios.get('http://localhost:3000/getUsers');
            console.log(getUsers);
        for(let i in getUsers.data){
            showonscreen(getUsers.data[i]);
        }
    }
        catch(error){
            console.log(error);
        }
    })