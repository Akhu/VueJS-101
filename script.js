//A toi de jouer ! https://youtu.be/1dLcnxIock0

const MyTodoList = {
  data() {
    return {
     newTask: {
        title: '',
        completed: false
     },
     todos: [
       {
         title: 'Faire les courses',
          completed: false
       }
     ]
    }
  },
  methods: {
    addTask() {
      this.todos.push(this.newTask)
      this.newTask = {}
    }
  }

}

Vue.createApp(MyTodoList).mount('#app')
