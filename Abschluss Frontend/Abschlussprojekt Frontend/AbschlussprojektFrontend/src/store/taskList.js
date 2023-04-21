import { defineStore } from 'pinia';

export const useTaskListStore = defineStore({
  id: 'taskList',
  state: () => ({
    taskListId: localStorage.getItem('taskListId') || '',
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
  },
});
