<template>
  <div>
  <div>news
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <b>{{ item.time_ago }}</b>
      <span>{{ item.user }}</span><br/>
      <a :href="item.url">{{ item.title }}<i>{{ item.comments_count }}</i></a>
    </li>
  </ul>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    axios
      .get('https://api.hnpwa.com/v0/news/1.json')
        .then( res => {this.list = res.data})
          .then(()=> {console.log(this.list[0])})

  },
}
</script>

<style>

</style>