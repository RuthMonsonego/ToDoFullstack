import axios from 'axios';

// הגדרת כתובת ה-API כ-default
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// הוספת interceptor לטיפול בשגיאות
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response || error.message || error);
    return Promise.reject(error);
  }
);

// יצירת אובייקט service
const apiService = {
  // פונקציה לשאיבת כל המשימות
  getTasks: async () => {
    try {
      const result = await axios.get('/items');
      console.log(result.data)
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      return result.data;
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      throw error;
    }
  },

  // פונקציה להוספת משימה חדשה
  addTask: async (name) => {
    try {
      const result = await axios.post('/items', { name });
      return result.data;
    } catch (error) {
      console.error('Failed to add task:', error);
      throw error;
    }
  },

  // פונקציה לעדכון מצב המשימה (האם הושלמה או לא)
  setCompleted: async (id, isComplete) => {
    try {
      const result = await axios.put(`/items/${id}`, { isComplete });
      return result.data;
    } catch (error) {
      console.error('Failed to update task:', error);
      throw error;
    }
  },

  // פונקציה למחיקת משימה
  deleteTask: async (id) => {
    try {
      const result = await axios.delete(`/items/${id}`);
      return result.data;
    } catch (error) {
      console.error('Failed to delete task:', error);
      throw error;
    }
  }
};

// יצוא האובייקט apiService
export default apiService;
