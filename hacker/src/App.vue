<template>
  <tool-bar></tool-bar>
  <router-view/>
</template>

<script>
import ToolBar from "./components/ToolBar.vue"
import NewsView from "./views/NewsView.vue"
import AskView from "./views/AskView.vue";
import JobsView from "./views/JobsView.vue";

export default {
  components: {ToolBar, NewsView, AskView, JobsView}
}
</script>


<style>
  body {font-family: 'Playfair Display', serif; font-size:18px; padding:0; margin:0;}
  a {color: black;}
  * {margin:0; padding:0}
  li {list-style-type: none;}
  p + p {margin-top:20px}
  #app {padding:0 20px}
  .content {padding:30px 20px}
</style>
