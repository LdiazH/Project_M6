<template>
    <div id="opinionBody" >
        <div class="d-flex flex-column text-center align-items-center"> 
        <h1> Escribe tu opinion para el juego :{{ name }}</h1>
        <form action="" class="border w-75" >
            <div class="d-flex flex-column align-items-start ms-5 mt-3">
                <label for="">Nombre:</label>
                <input v-model="nuevaOpinion.nombre" type="text" class="w-75" required>
            </div>
            <div class="d-flex flex-column align-items-start ms-5 mt-3 "> 
                <label for="">Opinion:</label>
                <textarea name="" id="" v-model="nuevaOpinion.opinion" class="w-75" required></textarea>
            </div>
            <div class="d-flex flex-column align-items-start ms-5 my-3">
                <button type="submit" @click.prevent="submit()" class="p-1 px-3" :disabled=" nuevaOpinion == ''"  v-if="opinionEdit == null" id="submit_Btn">Enviar</button>
                <button  @click.prevent="saveChanges()" class="btn btn-outline-success" v-else>Guardar Cambios</button>
            </div>
        </form>
    </div>
    <!-- acordion -->
    <div class="d-flex flex-column text-center align-items-center justify-content-center mt-5" >
        <div class="accordion w-75 mt-3" id="accordionExample" v-for="(opinion,index) in opiniones" :key="index">
            <div class="accordion-item" id="acordion_body">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="acordion_header">
                    Nombre: {{ opinion.nombre }}
                </button>
                </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p>Opinion: {{ opinion.opinion }}</p>
                <hr>
                <div class="d-flex justify-content-start ms-5 my-3">
                <button @click="eliminar(index)" class="btn btn-outline-danger">Eliminar</button><button @click="editar(index)" class="btn btn-outline-warning">Editar</button>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'opinion-view',
    props: {
        name:{
            type:String,
            required:true
        }
        
    },
    data: function(){
        return {
            nuevaOpinion:{nombre:"",opinion:""},
            opiniones:[],
            opinionEdit: null
        }
    },
    computed: {
        
    },
    methods: {
        submit(){
            if(this.nuevaOpinion.nombre && this.nuevaOpinion.opinion){
                this.opiniones.push({...this.nuevaOpinion})
            }
            this.nuevaOpinion.nombre = "";
            this.nuevaOpinion.opinion = "";
           
            
        },

        eliminar(index){
            this.opiniones.splice(index,1)

        },
        
        editar(index){
            let opEdit = this.opiniones[index]
            console.log(opEdit)
            this.nuevaOpinion.opinion=opEdit.opinion
            this.nuevaOpinion.nombre=opEdit.nombre
            this.opinionEdit = index
            console.log(this.opinionEdit)

        },

        saveChanges(){
            Vue.set(this.opiniones,this.opinionEdit,({...this.nuevaOpinion}))
            
            
            this.opinionEdit=null

            this.nuevaOpinion.nombre = "";
            this.nuevaOpinion.opinion = "";
            
        }
        
        
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
#opinionBody{
    height: 100vh;
    background: rgb(88,24,69);
    background: linear-gradient(164deg, rgba(88,24,69,1) 0%, rgba(199,0,57,1) 49%, rgba(255,87,51,1) 97%);
    

}
h1{
    font-weight: bold;
    color: #FFC300;

}
form{
    background-color: #DAF7A6 ;
    border-radius: 5px;
}

#submit_Btn{
  background-color: #581845 !important;
  color: #FFC300 !important;
}

#submit_Btn:hover{
  background-color: #900C3F!important;
  
}

#acordion_header{
    background: rgba(199,0,57,1);
    color: #FFC300;

}

#acordion_body{
    background-color: #DAF7A6 ;
    border: none    ;

}

    
</style>