<template>
    <div>
    <ul class="list">
      <li v-for="item in listData" :key="item.id">
        <b>{{ item.time_ago }}</b>
        <span>{{ item.user }}</span><br/>
        <a :href="item.url">{{ item.title }}<i>{{ item.comments_count }}</i></a>
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