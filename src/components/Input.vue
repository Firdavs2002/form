<template>
  <div id="input">
    <div class="app">
      <div class="app__header">
        Ввод
      </div>
      <form method="POST" class="app__content" @submit.prevent="checkForm()">
        <ItemInput v-for="(item, index) of getItems"
                   :key="index"
                   :info="item"/>
        <div class="input">
          <select name="" v-model="select">
            <option value="Star">⭐</option>
            <option value="Heart">❤</option>
            <option value="Octagon">🔶</option>
          </select>
        </div>
        <button type="submit" class="btn">Ok</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ItemInput from './ItemInput.vue';

export default {
  data() {
    return {
      select: '',
      saveValue: {},      
    }
  },
  watch: {
    select() {
      this.selected(this.select)
    }
  },
  computed: mapGetters(["getJSON", "getItems"]),
  components: {
    ItemInput
  },
  methods: {
    ...mapMutations(["setJSON", "selected"]),
    
    checkForm() {
      this.saveValue = this.getItems.map(o => o.value)
      
      const save = {
        name: this.saveValue[0],
        surname: this.saveValue[1],
        date: this.saveValue[2],
        select: this.select
      }

      // отправляем данные по VUEX
      this.setJSON(save)
      
      // имитируем получения JSON запроса и выводим в консоль
      console.log(JSON.parse(JSON.stringify(this.getJSON)))
    }
  }
}
</script>

<style scoped>
    #input {
      width: 50%;
    }
    #input::before {
      content: "";
      display: block;
      height: 100%;
      width: 2px;
      background: rgba(238,111,87,1);
      position: absolute;
      left: 50%;
    }
    .app.input {
      border-radius: 10px 0 0 10px;
    }
    
</style>