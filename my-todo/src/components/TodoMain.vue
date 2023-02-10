<template>
        
    <div class="page">
    <header><h1>Vue Fire todo1
        <span class="pie">
          <svg viewBox="0 0 64 64">
          <circle class="pie" r="32" cx="32" cy="32" style="stroke-width: 64;"></circle>
          <circle class="slice" r="32" cx="32" cy="32" 
          :style="{ 
            strokeWidth: 64,
            strokeDasharray: totalTodo + ', 201',
            transition: 'all 0.3s linear'
            }">
            </circle>
        </svg>
        </span>
    </h1></header>
    <main>
      <div class="todos">
        <transition name="fade">
            <div class="write add" v-if="writeState" key="add"> <!-- 등록 -->
                <input type="text" ref="writeArea" v-model="addItemText" @keyup.enter="addItem"/>
                <button class="btn add" @click="addItem">Add</button>
            </div>
            <div class="write edit" v-else key="edit"> <!-- 수정 -->
                <input type="text" ref="writeArea" v-model="editItemText" @keyup.enter="addItem"/>
                <button class="btn add" @click="editSave">Save</button>
            </div>
        </transition>
        <ul class="list" ref="list">
          <li v-for="(todo, i) in todos" :key="i">
            <i 
            @click="checkItem(i)"
            :class="[todo.state === 'yet'? 'far':'fas' ,'fa-check-square']"></i>
            <span>
              {{ todo.text }}
              <b>
                <a href="" @click.prevent="editShow(i)">Edit</a>
                <a href="" @click.prevent="delItem(i)">Del</a>
              </b>
            </span>
          </li>
        </ul>
      </div>
    </main>
    </div>
</template>

<script>
import {db} from '../firebase/db';
console.log(db)

export default {
    data() {
        return {
            addItemText: '',
            editItemText: '',
            crrEditItem: '',
            writeState: true,
            todos:[],
        }
    },
    computed: {
        totalTodo() {
            let totalNum = 0;
            this.todos.forEach(item => {
                if(item.state ==='done') totalNum++;
            });
            return totalNum / this.todos.length * 201;
        }
    },
    methods: {
        addItem() {
            if (!this.addItemText) return;
            db.collection('todos').add({
                text: this.addItemText,
                state: 'yet',
                createdAt: new Date(),
            }).then(sn => {
                db.collection('todos').doc(sn.id).update({
                    id: sn.id
                })
            });
            // this.todos.unshift({
            //     text: this.addItemText,
            //     state: 'yet'
            // })
            this.addItemText = ''
        },
        checkItem(i) {
            if (this.todos[i].state === 'yet') {
                // this.todos[i].state='done'; 
                db.collection('todos').doc(this.todos[i].id).update({state: 'done'});
            }
            else {
                // this.todos[i].state='yet';
                db.collection('todos').doc(this.todos[i].id).update({state: 'yet'});
            }
        },
        editShow(i) {
            this.writeState = false;
            this.crrEditItem = i;
            this.editItemText = this.todos[i].text;
            this.$refs.list.children[i].className = 'editing';
        },
        editSave() {
            db.collection('todos')
                .doc(this.todos[this.crrEditItem].id)
                    .update({
                        text: this.editItemText
                    })
            //this.todos[this.crrEditItem].text = this.editItemText;
            this.writeState = true;
            this.$refs.list.children[this.crrEditItem].className = '';
        },
        delItem(i) {
            db.collection('todos').doc(this.todos[i].id).delete()
            // this.todos.splice(i, 1);
        }
    },
    mounted() {
        this.$refs.writeArea.focus();
        // db.collection('todos').get().then((result) => {
        //     result.forEach((doc)=>{
        //         console.log(doc.data())
        //         this.todos.unshift(doc.data());
        //     })
        // });
    },
    firestore: {
        todos: db.collection('todos').orderBy('createdAt', 'desc')
    }
 
}
</script>

<style>

</style>