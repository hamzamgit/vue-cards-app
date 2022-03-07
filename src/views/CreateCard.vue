<template>
<div class="main">
  <v-container class="createCard" fluid>
    <v-form ref="form" lazy-validation v-model="valid">
      <v-row align="start">
        <v-col class="d-flex" cols="6">
          <v-text-field
            label="Frist Name"
            hide-details="auto"
            v-model="firstName"
            :rules="nameRules"
          ></v-text-field>
        </v-col>
        <v-col class="d-flex" cols="6">
          <v-text-field
            label="Last Name"
            hide-details="auto"
            v-model="lastName"
            :rules="nameRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="start">
        <v-col class="d-flex" cols="12">
          <v-select
            :rules="memberShipTierRules"
            :items="items"
            v-model="memberShipTier"
            label="Membership Tier"
            dense
          ></v-select>
        </v-col>
      </v-row>
      <v-row align="start">
        <v-col class="d-flex" cols="12">
          <v-textarea
            name="input-7-1"
            label="Description of user"
            auto-grow
            v-model="userDescription"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-form>
    <v-btn class="" color="success" @click="clickHandler">
      Add Card
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "NewCard",
  data: () => ({
    valid: true,
    nameRules: [(value) => value.length > 0 || "Can't not be empty"],
    memberShipTierRules: [
      (value) => !!value || "Membership tier can't be empty",
    ],
    items: ["Gold", "Silver", "Platinum"],
    firstName: "",
    lastName: "",
    memberShipTier: "",
    userDescription: "",
  }),
  methods: {
    clickHandler() {
      this.$store.dispatch('newCardAction', {
            first_name: this.firstName,
            last_name: this.lastName,
            membership_tier: this.memberShipTier,
            description: this.userDescription
        })
        this.$router.push("/")
    },
  },
};
</script>

<style scoped>
.createCard{
  width: 50%;
  justify-content: center;
  align-items: center;
}

</style>>
  