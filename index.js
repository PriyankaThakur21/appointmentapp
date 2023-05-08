function save(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phn.value;
    const obj={name,email,phone};
    axios.post('https://crudcrud.com/api/446f33725d21403da80c25570a98995c/appointmentapp',obj)
    .then((resolve)=>showonscreen(resolve.data))
    .catch((err)=>console.log(err))
    event.target.reset();
    }
    window.addEventListener('DOMContentLoaded', ()=>{
        axios.get('https://crudcrud.com/api/446f33725d21403da80c25570a98995c/appointmentapp')
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
        deletebtn.onclick=function() {deletedata(obj._id)};
        list.appendChild(deletebtn)
        p.appendChild(list);
    }
    function deletedata(userid){
        axios.delete(`https://crudcrud.com/api/446f33725d21403da80c25570a98995c/appointmentapp/${userid}`)
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