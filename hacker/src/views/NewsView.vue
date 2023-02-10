<template>
  <div>news</div>
  <list-item :listData="list"></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import axios from 'axios';

export default {
  components: { ListItem },
  computed: {
    list() {
      return this.$store.state.list; // store에 있는 state의 list 데이터 리턴
    }
  },  
  created() {
    this.$store.dispatch('FETCH_LIST', 'news') // store에 있는 index.js의  FETCH_LIST 함수를 실행함
    // axios
    //   .get('https://api.hnpwa.com/v0/news/1.json')
    //     .then( res => {this.list = res.data})
    //       .then(()=> {console.log(this.list[0])})

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