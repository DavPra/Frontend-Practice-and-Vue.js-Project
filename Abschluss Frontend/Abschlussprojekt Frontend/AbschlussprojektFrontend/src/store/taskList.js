import { defineStore } from 'pinia';
import axios from 'axios';

export const useTaskListStore = defineStore({
  id: 'taskList',
  state: () => ({
    taskListId: localStorage.getItem('taskListId') || '',
    listItems: [],
    answer: '',
  }),
  actions: {
    setTaskListId(taskListId) {
      this.taskListId = taskListId;
      localStorage.setItem('taskListId', taskListId);
    },
    clearTaskListId() {
      this.taskListId = '';
      localStorage.removeItem('taskListId');
    },
    async fetchListItems() {
      
      const token = localStorage.getItem("accessToken");
      if (!token) {
         errorMessage.value =
           "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
          return;
      }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
      const response = await axios.get(`https://codersbay.a-scho-wurscht.at/api/tasklist/${this.taskListId}`, config);
      if (response.status === 200) {
        this.listItems = response.data.tasks
        this.answer = response.data.tasks
        console.log(response)
      } else {
        console.error('Fehler beim Laden der Liste');
      }
    }
    catch (error) {
      console.error(error);
    }
  }
}});
