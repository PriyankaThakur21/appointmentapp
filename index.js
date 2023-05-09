function save(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phn.value;
    const obj={name,email,phone};
    axios.post('https://crudcrud.com/api/9ba78636c85d4cdb862d92054128522b/appointmentapp',obj)
    .then((resolve)=>showonscreen(resolve.data))
    .catch((err)=>console.log(err))
    event.target.reset();
    }
    window.addEventListener('DOMContentLoaded', ()=>{
        axios.get('https://crudcrud.com/api/9ba78636c85d4cdb862d92054128522b/appointmentapp')
        .then((resolve)=>{
        for(let i in resolve.data){
            showonscreen(resolve.data[i]);
        }})
        .catch((err)=>{
            console.log(err);
        })
    })
    function showonscreen(obj){
        const p=document.getElementById('block1');
        const list=document.createElement('li');
        list.id=obj._id
        list.textContent=list.textContent+obj.name+'--'+obj.email+'--'+obj.phone;
        const deletebtn=document.createElement('input')
        deletebtn.type='button'
        deletebtn.value='delete'
        const editbtn=document.createElement('input')
        editbtn.type='button'
        editbtn.value='edit'
        editbtn.onclick=function() {editdata(obj._id)};
        deletebtn.onclick=function() {deletedata(obj._id)};
        list.appendChild(deletebtn)
        list.appendChild(editbtn)
        p.appendChild(list);
    }
    function deletedata(userid){
        axios.delete(`https://crudcrud.com/api/9ba78636c85d4cdb862d92054128522b/appointmentapp/${userid}`)
        .then((resolve)=>{
            removeuserfromscreen(userid)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function removeuserfromscreen(userid){
        const parentel=document.getElementById('block1');
        const childel=document.getElementById(userid)
        console.log('hi')
            parentel.removeChild(childel)
    }
    function editdata(userid){
        axios.get(`https://crudcrud.com/api/9ba78636c85d4cdb862d92054128522b/appointmentapp/${userid}`)
        .then((resolve)=>{
            this.obj=resolve.data
            edituserdetail(obj.name, obj.email, obj.phone,userid)
        })
    }
    function edituserdetail(newname,newemail,newphn,userId){
        document.getElementById('name').value=newname
        document.getElementById('email').value=newemail
        document.getElementById('phn').value=newphn
        deletedata(userId)
    }