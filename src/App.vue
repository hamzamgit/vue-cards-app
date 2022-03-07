<template>
  <v-app>
    <div id="nav" class="homeNav">
      <router-link to="/" class="allcard">All Card</router-link>
      <router-link to="/card/add" class="createcard">Create card</router-link> 
    </div>
    <router-view/>
  </v-app>
</template>

<style scoped>
  .homeNav {
  display: flex;
  width: 100%;
  margin-left: 70%;
  }
  .allcard {
    text-decoration: none;
    background: #4caf50;
    color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
  .allcard:hover {
    background: hsl(122, 40%, 59%);
  }
  .createcard {
    text-decoration: none;
    background: #4caf50;
    color: white;
    padding: 10px;
    margin: 10px 0px;
    border-radius: 5px;
  }
  .createcard:hover {
    background: hsl(122, 40%, 59%);
  }


</style>