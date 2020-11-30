<template>
  <div id="output">
    <div class="app">
      <div class="app__header">
        Вывод
      </div>
      <div class="app__content" v-if="getJSON.name">
        <ul>
          {
          <li v-for="(item, name, index) in getJSON"
            :key="index">

            <span class="key">{{ name }}</span> :
            <span class="value">{{ item }}</span>
          </li>
          }
        </ul>
        <button class="btn clear" @click="clear">Очистеть</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: mapGetters(["getJSON"]),
  methods: {
    ...mapMutations(["clearJSON"]),
    clear() {
      this.clearJSON({})
    }
  }
}
</script>

<style scoped>
  #output {
    width: 50%;
  }
  ul, li {
    list-style: none;
  }
  li {
    margin: 10px 2rem;
  }
  .key {
    color:#ee6f57;
  }
  .value {
    color: #FF8600;
  }
  .btn.clear {
    background: #ee6f57;
    margin-bottom: 0;
  }
  .btn.clear:hover {
    background: #182f69;
  }
</style>