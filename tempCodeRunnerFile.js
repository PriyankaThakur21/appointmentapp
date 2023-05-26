    async function deletedata(userid){
//         try{
//         const dlt = axios.delete(`https://crudcrud.com/api/53b07e3a684c4565a9139f7ece5289c0/appointmentapp/${userid}`)
//         removeuserfromscreen(userid);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

//     function removeuserfromscreen(userid){
//         const parentel=document.getElementById('block1');
//         const childel=document.getElementById(userid)
//         parentel.removeChild(childel)
//     }

//     async function editdata(userid){
//         try{
//             const edit = await axios.get(`https://crudcrud.com/api/53b07e3a684c4565a9139f7ece5289c0/appointmentapp/${userid}`)
//             this.obj = edit.data;
//             edituserdetail(obj.name, obj.email, obj.phone,userid)
//         }
//         catch(err){
//             console.log(err);
//         }
//     }

//     function edituserdetail(newname,newemail,newphn,userId){
//         document.getElementById('name').value=newname
//         document.getElementById('email').value=newemail
//         document.getElementById('phn').value=newphn
//         deletedata(userId)
//     }

//     window.addEventListener('DOMContentLoaded', ()=>{
//         axios.get('https://crudcrud.com/api/53b07e3a684c4565a9139f7ece5289c0/appointmentapp')
//         .then((resolve)=>{
//         for(let i in resolve.data){
//             showonscreen(resolve.data[i]);
//         }})
//         .catch((err)=>{
//             console.log(err);
//         })
//     })