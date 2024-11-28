<template>
  <div id="homeBody">
    <h1>Listado de Videojuegos</h1>
    
    
  <div class="home d-flex flex-wrap" >
    <div v-for="game in games" :key="game.id" >
      <div class="card m-3" style="width: 18rem; " id="cardBp">
        <img :src="game.background_image" class="img-fluid" style="height: 300px; width: 300px;" alt="">
        <h6 class="mt-2"> <b>{{ game.name }}</b></h6>
        <hr>
        <p>Rating:{{ game.metacritic }}</p>
        <hr>
        <p>Release: {{ game.released }}</p>
        <hr>
        <p>update:{{ game.updated }}</p>
        <hr>
        <div class="d-flex flex-start align-items-center p-2 justify-content-space-around">
            <button @click="redirecTo(game.name)" class="rounded p-1" id="opinar">Opinar</button> 
            <img src="@/assets/heart.svg" alt="like" id="like" class="ms-2">
            
            <p> +</p>
          
        </div>
    </div>
  
  </div>
  <div>
    <button @click="getData()" id="cargarVideojuegos">Cargar mas videojuegos...</button>
  </div>
    
    
  </div>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  data: function(){
    return{
      games:[],
      page:1,

    }
  },
  props:{
    
  },
  components: {

    // Card
  },
  methods:{
    async getData() {

            const url = "https://api.rawg.io/api/games?key=fa7ca1901cfe4d0b9b87624bd668eb23&page="+this.page;
            console.log(this.page)
            try {
              const response = await fetch(url);
                if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                let games = json
                console.log(games)
                this.games.push(...games.results)
                console.log(this.games)
                console.log(this.games.id)
                this.page++
                
                } catch (error) {
                console.error(error.message);
                }
        },
      redirecTo(name){
        this.$router.push('/opiniones/'+name)
 
      
    },

  },
  // -- Lifecycle Methods
  mounted(){
   this.getData()
  }
}
</script>
<style scoped>
#like{
  width: 20px;
  height: 20px;

}

h1{
  color: #FFC300;
}

#cargarVideojuegos{
  background-color: #900C3F;
  color: #FFC300;
  border: none;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}

#cargarVideojuegos:hover{
  background-color: #DAF7A6;
  color: #581845;
  
}

#homeBody{
  background-color: #581845;

}

#cardBp{
  background-color:#DAF7A6 
}

img{
    border-radius: 5px;
}

#opinar{
  background-color: #581845;
  color: #FFC300;
  border: none;
}

#opinar:hover{
  background-color: #900C3F
  
}
</style>
