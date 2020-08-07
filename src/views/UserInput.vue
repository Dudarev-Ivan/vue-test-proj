<template>
  <div style="margin: 16px; color: white">
    <button @click="onBtnClick" style="background: grey; padding: 8px">Btn: {{ btnClicks }}</button>
    <br> <br>

    <label>
      <input v-model="inputField" style="color: white; background: grey">
    </label>
    <br> <br>


    <input type="checkbox" id="checkbox" v-model="checkBox">
    <label for="checkbox">{{ checkBox }}</label>
    <br> <br>


    <input type="radio" id="one" value="One" v-model="radio">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="radio">
    <label for="two">Two</label>
    <br> <br>

    <label>
      <select v-model="select" style="background: grey; width: 150px; color: white;">
        <option disabled value="" style="color: black">Please select one</option>
        <option v-for="item in selectItems" style="color: white">{{ item }}</option>
      </select>
    </label>

  </div>
</template>

<script>
export default {
  name: "UserInput",
  data: () => ({
    btnClicks: 0,
    inputField: "input",
    checkBox: true,
    radio: null,
    select: "",
    selectItems: ['Foo', 'Bar', 'Fizz', 'Buzz']
  }),
  methods: {
    onBtnClick() {
      this.btnClicks++;
      this.$emit('btnClicks', this.btnClicks)
    }
  }
}
</script>

<style scoped>

</style>