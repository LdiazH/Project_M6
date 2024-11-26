<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> 
      <!-- <router-link to="/about">About</router-link>  -->
      
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  
}

nav {
  padding: 15px;
  background: rgb(88,24,69);
  background: linear-gradient(164deg, rgba(88,24,69,1) 41%, rgba(199,0,57,1) 79%, rgba(255,87,51,1) 97%);
  display: flex;
  align-items: start;
  
}

nav a {
  font-weight: bold;
  color: #FFC300;
  margin-left: 3rem;

}



</style>
