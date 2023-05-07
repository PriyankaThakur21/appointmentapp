function save(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phn.value;
    const obj={name,email,phone};
    axios.post('https://crudcrud.com/api/6ba832c5062341ccb09ae2b32fbc6c28/appointmentapp',obj)
    .then((resolve)=>showonscreen(resolve.data))
    .catch((err)=>console.log(err))
    event.target.reset();
    }
    window.addEventListener('DOMContentLoaded', ()=>{
        axios.get('https://crudcrud.com/api/6ba832c5062341ccb09ae2b32fbc6c28/appointmentapp')
        .then((resolve)=>{
        for(let i in resolve.data){
            showonscreen(resolve.data[i]);
        }})
        .catch((err)=>{
            console.log(err);
        })
    })
    function showonscreen(obj){
        const p=document.body;
        const list=document.createElement('li');
        list.textContent=list.textContent+obj.name+'--'+obj.email+'--'+obj.phone;
        p.append(list);
    }