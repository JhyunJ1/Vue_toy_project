<template>
    <div>
    <ul class="list">
      <li v-for="item in listData" :key="item.id">
        <b>{{ item.time_ago }}</b>

        <template v-if="$route.name ==='news'" ><!--실제로 dom에 태그가 생성되지 않는다.-->
          <span>by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></span><br/>
          <a :href="item.url">{{ item.title }}<i>{{ item.comments_count }}</i></a>
        </template>
        <template v-else-if="$route.name === 'ask'"><!--실제로 dom에 태그가 생성되지 않는다.-->
          <span>by {{ item.user }}</span><br/>
          <router-link :to="item.url">{{ item.title }}<i>{{ item.comments_count }}</i></router-link>
        </template>
        <template v-else><!--실제로 dom에 태그가 생성되지 않는다.-->
          <span>by {{ item.user }}</span><br/>
          <a :href="item.url">{{ item.title }}<i>{{ item.comments_count }}</i></a>
        </template>

      </li>
    </ul>
  </div>
  </template>
  
  <script>
  // import axios from 'axios';
  export default {
    props: ['listData']
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