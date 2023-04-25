import { defineStore } from 'pinia';
import axios from 'axios';

export const useTaskListStore = defineStore({
  id: 'taskList',
  state: () => ({
    taskListId: localStorage.getItem('taskListId') || '',
    listItems: [],
    answer: '',
    taskId: localStorage.getItem('taskId') || '',
  }),
  actions: {
    async fetchListItems() {
      
      const token = localStorage.getItem('accessToken');
      console.log(token.valueOf());
      if (!token) {
         errorMessage.value =
           "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
          return;
      }
  

  try {
      const response = await axios.get(`https://codersbay.a-scho-wurscht.at/api/tasklist/3373`);
      if (response.status === 200) {
        this.tasks = response.data.tasks
        console.log(response.data.tasks)

      } else {
        console.error('Fehler beim Laden der Liste');
      }
    }
    catch (error) {
      console.error(error);
    }
  },
  
async createTask() {
  const token = localStorage.getItem('accessToken');
  //console.log(token.valueOf());
  if (!token) {
     errorMessage.value =
       "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
      return;
  }
  //const title = localStorage.getItem('title');
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const body = {
    "assignedUserId": 1475,
    "description": "string",
    "taskListId": 3373,
    "status": "TODO",
    "points": 0,
    "estimation": 0,
    "title": "Task" + Math.floor(Math.random() * 100),
  };

  try {
    const response = await axios.post('https://codersbay.a-scho-wurscht.at/api/task', body, config);
    if (response.status === 201) {
      this.answer = response.data;
      console.log(response);
      localStorage.setItem('taskId', response.data.taskId);
      console.log(localStorage.getItem('taskId'));
    } else if (response.status === 401) {
      console.error('Fehler beim Erstellen der Aufgabe. Loggen Sie sich ein.');
    }
  } catch (error) {
    console.error(error);
  }
},

async updateTask() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    errorMessage.value =
      "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
    return;
  }
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const body = { title: '' };

  try {
    const response = await axios.put(`https://codersbay.a-scho-wurscht.at/api/task/${localStorage.getItem('taskId')}`, body, config);
    if (response.status === 200) {
      this.answer = response.data;
      console.log(response);
    } else {
      console.error('Fehler beim Updaten der Aufgabe');
    }
  } catch (error) {
    console.error(error);
  }
},
  async deleteTask() {
    const token = localStorage.getItem("accessToken");
    if (!token) {
       errorMessage.value =
         "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
        return;
    }
const config = { headers: { Authorization: `Bearer ${token}` } };


  try {
      const response = await axios.delete(`https://codersbay.a-scho-wurscht.at/api/task/${localStorage.getItem('taskId')}`, config);
      if (response.status === 200) {
        
        console.log(response)

        return 'Aufgabe gelöscht'
      } else {
        console.error('Fehler beim Löschen der Aufgabe');
      }
    }
    catch (error) {
      console.error(error);
    }
  },
  async updateTask() {
    const token = localStorage.getItem("accessToken");
    if (!token) {
       errorMessage.value =
         "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
        return;
    }
const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
        const response = await axios.put(`https://codersbay.a-scho-wurscht.at/api/task/${localStorage.getItem('taskId')}`, {title: ''}, config);
        if (response.status === 200) {
          this.answer = response.data
          console.log(response)
        } else {
          console.error('Fehler beim Updaten der Aufgabe');
        }
      }
      catch (error) {
        console.error(error);
      }
    }
}



});
