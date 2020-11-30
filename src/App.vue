<template>
  <div id="root">
    <Input />
    <Output />
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Output from '@/components/Output.vue'

export default {
  name: 'App',

  components: {
    Input,
    Output,
  },
 }
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 95%;
}

#root {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  background: linear-gradient(66deg, rgba(31,60,136,1) 45%, rgba(238,111,87,1) 100%);
}

.app {
  background: #001F3F;
  color: #fff;
  height: 100%;
}

.app__header {
  font-size: 1.8em;
  padding: 20px;
  text-align: left;
  background: #002D5E;
  height: 80px;
  color: #ccc;
  border-bottom: 5px solid #ee6f57
}

.app__content {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 79%;
}

.btn {
  display: inline-block;
  padding: 1rem 2.3rem;
  margin-bottom: 0;
  font-weight: normal;
  font-family: GothamPro, sans-serif;
  font-size: 1rem;
  line-height: 1.3rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background: #182f69;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all .3s ease-in-out;
  margin: 20px 0;
}

.btn:disabled {
    background: #ccc !important;
    border: 1px solid #ccc;
    color: #000;
    cursor: not-allowed;
}

.btn:active {
    transition: transform .1s ease-in-out, box-shadow .1s ease-in-out !important;
    transform: none !important;
    box-shadow: none !important;
}

.btn:hover {
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, .2);
    transform: translateY(-1px);
    background: #ee6f57;
}

</style>

