<template>
    
    <div class="container">
        <div class="row">
           <ul class="tab_list">
               <li class="tab_list_li">TO DO</li>
               <li class="tab_list_li">DO</li>
               <li class="tab_list_li">SUPP</li>
           </ul>
        </div>
        <div class="row">
            <div class="div bg">
            <div class="col-md-9">
                <div class="contenu">
<h5>Texte : </h5><input type="text" v-model="desc" placeholder="add here ..." >         
<h5>Time :</h5> <input type="time" placeholder="add here ..." v-model="date">    
<button class="add" v-on:click='add_todo()'>Add</button>     
       </div> </div>
           <div class="col-md-9">
               <div  class="contenu_todo">
                   
                            <div   v-for="(item , index) in todos"   :key="index" >
                                       <div  class="do" :class="item.state_todo">
                                        <div class="check">
                                        <input v-if='item.state_todo=="complet"' class='check' v-on:click='complete(item,item._id)' type="checkbox" checked>
                                        <input v-else class='check' v-on:click='complete(item,item._id)' type="checkbox">
                                        </div>
                                        <div class="title">{{item.title_todo}}</div>
                                        <div class="date">{{item.date_todo}}</div>
                        <div class="feature-icon">
                     <i v-if='item.favorite_todo=="false"' class="far fa-star"  v-on:click='favorite_change(item,item._id)'></i>
                        <i v-else class="fa fa-star" v-on:click='favorite_change(item,item._id)'></i> 
                        </div>                            <div class="sup" > <i :data="item._id" v-on:click='deletetodo(item._id)' class="far fa-calendar-times"></i></div>
                            </div> </div>

                        <!--     <div class="incomplet">
                             <div   v-for="(item , index) in todos" :class="{'show':item.show}"  :key="index" class="do">
                                        <div class="check">
                                        <input class='check'  type="checkbox">
                                        </div>
                                        <div class="title">{{item.title_todo}}</div>
                                        <div class="date">{{item.date_todo}}</div>
                        <div class="feature-icon">
                     <i v-if='item.favorite_todo=="false"' class="far fa-star"  v-on:click='favorite_change(item,item._id)'></i>
                        <i v-else class="fa fa-star" v-on:click='favorite_change(item,item._id)'></i> 
                        </div>                            <div class="sup" > <i :data="item._id" v-on:click='deletetodo(item._id)' class="far fa-calendar-times"></i></div>
                            </div>
                        </div> -->

                    <div v-if="!todos[0]" class="contenu_todo">is empty</div>
                </div>
            </div>
</div>
        </div>
    </div>

</template>
<script>
import axios from "axios";
import router from "../router/index";

export default {
      data:()=>{
    return{
        
todos:[],
desc:'',
date:'',
favorite: false,


    }
    },
    created() {
    this.gettodo();
   
  },
    methods:{
        add_todo(){
            if(this.title !== '') {
                console.log(this.desc);
                console.log(this.date);
           let newtodo = {
           date_todo:this.date,
           favorite_todo :this.favorite,
           show: false,
            title_todo:this.desc,
           state_todo :"incomplet",
            }
            console.log(this.favorite);
            if (newtodo.favorite_todo=='true'){
            this.todos.splice(0,0,newtodo);
            console.log('partie true')}
            else{this.todos.push(newtodo);
            console.log('partie false')
            }
     
      axios.post(`http://localhost:3000/todo/create`, newtodo).then( router.push({name : "todo"}));
           }
      
window.location.reload();
        },
         gettodo() {
      axios.get(`http://localhost:3000/todo/all`).then(response=>(this.todos=response.data));
      console.log(this.todos);

    },
    deletetodo(id) {
      axios.delete(`http://localhost:3000/todo/remove?id=${id}`).then(data => { console.log(data);
          window.location.reload();
        });
    },
   complete(item,id){
        const check=document.querySelector(".check");
        const classdo=document.querySelector(".do");
        console.log(item.state_todo);
           if( item.state_todo=='incomplet'){
               item.state_todo='complet';
               console.log('1');
                check.addEventListener('click',()=>{
            classdo.classList.remove('incomplet'); 
            classdo.classList.add('complet'); }) 
           } 
           else if(item.state_todo=='complet')
           {               console.log('2');

               item.state_todo='incomplet';
           check.addEventListener('click',()=>{
            classdo.classList.remove('complet');
            classdo.classList.add('incomplet');
             }) 
            }
        axios .put(`http://localhost:3000/todo/update?id=${id}&property_name=state_todo&property_value=${item.state_todo}` )
        .then(data => {
          console.log(data);
        });
       console.log(  item.state_todo);

                    //  window.location.reload();


       
    }, 
    favorite_change(item,id){
               console.log(  item.favorite_todo);


        axios .put(`http://localhost:3000/todo/update?id=${id}&property_name=favorite_todo&property_value=${item.favorite_todo}` )
        .then(data => {
          console.log(data);
        });
       console.log(  item.favorite_todo);
    window.location.reload();

    },

    


    }
    
    }

</script>
<style>
.complet{
text-decoration: line-through;
    background: #00800030;
}
.date{
    width: 20%;
}
.title{
    width:100%;
}

.fa-calendar-times{
color:rgb(255, 43, 43);
}
.feature-icon{
    margin-left: 20px;
    margin-right: 10px;
}
.check{
        width: 100px;
    height: 20px;
}
.contenu_todo .do{
    margin-bottom: 10px;
      opacity: 1;
  transition: all 0.8s linear;
    border-radius: 20px;
    padding: 10px;
    display:flex;
      border-color: #f95d96;
    border-style: groove;
}
.contenu_todo .do .show{
    opacity: 1 !important;
}
.bg{
    width: 90%;
    background-color: rgb(255, 255, 255);
    margin-left: 20px;
    border-radius: 20px;
}
.tab_list{
    width: 90%;
    border-radius: 20px;
    background: #f95d96;
    list-style: outside none none;
    display: inline-flex;
    margin: 20px;
}
.contenu{
    padding: 10px;
  width: 122%;
    border-radius: 20px;
    background: #f95d96;
    list-style: outside none none;
    display: inline-flex;
    margin: 20px;
}
.tab_list_li{
margin-top: 15px;
    margin-left: 200px;
    margin-bottom: 10px;
    font-family: cursive;
    color: aliceblue;
}

body{
background-color: #ffc5f7 !important;
}
h5{    font-family: cursive;

    margin-left:50px;
    margin-right: 50px;
}
.add{
    margin-left: 40px;
    border-radius: 20px;
    background-color: #ffc5f7;
    border-color: #ffc5f7;
}
input{
        font-family: cursive;

    border-radius: 20px;
}
.contenu_todo{
    width: 122%;
    border-radius: 20px;
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-family: cursive;
}

</style>