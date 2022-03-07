<template>
  <v-container> 
      <v-card min-width="500">
          <div class="cardDetails">
          <v-card-title>Card Detail</v-card-title>
          <v-card-text>
                  <p> <span> User name:</span> {{cardDetail.first_name}} {{cardDetail.last_name}}</p>
                  <p> <span>Membership status:</span> {{cardDetail.membership_tier}}</p>
                  <p v-if="cardDetail.description" class="description">User description:</p>
                  <p v-if="cardDetail.description">{{cardDetail.description}}</p>
          </v-card-text>
          </div>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            cardDetail: this.$store.getters.getCardDetailById(this.$route.params.cardNumber)
        }
    }
};
</script>

<style scoped>
.cardDetails {
    background-color: #f1f1f1;
}
.description {
    font-weight: bold;
}
span {
    font-weight: bold;
}
</style>