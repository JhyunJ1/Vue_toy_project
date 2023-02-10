<template>
  <div>ask</div>
  <list-item :listData="list"></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: { ListItem },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },

  created() {
    this.$store.dispatch('FETCH_LIST', 'ask')
  },
}
</script>

<style>
.list li {padding-left:10px; list-style-type: none}
.list li + li {margin-top:20px}
.list li > a {text-decoration: none; font-size:22px}
.list li > b {font-style: normal; font-size:12px; color:#999}
.list li span {font-style: normal; font-weight:700; font-size:12px; color:#999;}
.list li i {font-style: normal; font-size:12px; color:cornflowerblue}
</style>