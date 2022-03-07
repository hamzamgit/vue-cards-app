<template>
  <v-container class="homePage">
    <v-row align="start">
    <v-card v-for="card in cards" :key="card.card_number" class="mx-auto my-12" width="30%" max-width="500" min-width="300" @click="() => showDetails(card.card_number)">
      <v-card-title class="cardTitle">{{card.first_name}} {{card.last_name}}</v-card-title>
      <v-card-text>
        <div class="cardTier">A {{card.membership_tier}} member</div>
      </v-card-text>
    </v-card>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      cards: this.$store.state.cards
    }
  },
  methods: {
    showDetails(cardNumber){
      this.$router.push({name: "card detail", params: {cardNumber}})
    }
  }
};
</script>
 <style scoped>

 .homePage{
   background-color: #f1f1f1;
   width: 100%;
   display: flex;
   border-radius: 8px 8px 0 0;
 }
 .cardTitle {
   background-color: gray;
   color: #fff;
   padding: 5px;
   align-items: center;
   justify-content: center;
 }
 .cardTier {
   display: flex;
  margin-top: 15px;
  font-weight: bolder;
 }

 </style>