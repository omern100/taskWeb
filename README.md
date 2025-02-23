# Task Manager - TypeScript Project ✨
![Logo2](https://github.com/user-attachments/assets/6f05255f-bb57-459d-ae1c-05277406ed00)


ברוכים הבאים ל-Task Manager! 🎉 אפליקציית ניהול משימות מודרנית שנבנתה עם **React**, **TypeScript**, ו-**Vite**, עם עיצוב מושך באמצעות **Tailwind CSS**. האפליקציה מאפשרת למשתמשים ליצור, לערוך, לסנן משימות, ולהציג ציטוט השראה ממקור חיצוני😎  

**קישור לאתר:** [לחץ כאן](https://task-manager-ts-jade.vercel.app/) 🚀  

  ![myPhoto](https://github.com/user-attachments/assets/f73cc4f9-6334-477d-8454-eff1cbb49943)



## תכונות עיקריות 🌟
האפליקציה כוללת את הפונקציות הבאות:

### 1. הוספת משימה חדשה ➕
- **תיאור:** מאפשר למשתמש להוסיף משימה חדשה עם כותרת ותיאור אופציונלי.
- **שימוש:** הקלד כותרת ו/או תיאור ולחץ על "Add Task".
- **שמירה:** המשימות נשמרות ב-**LocalStorage** של הדפדפן לשימוש חוזר לאחר רענון.

![image](https://github.com/user-attachments/assets/448b9c69-03b0-4de1-849e-47d9e6ea0f86)


### 2. סימון משימה כהושלמה ✅
- **תיאור:** מאפשר לסמן משימה כבוצעה על ידי לחיצה על **Select Box**.
- **שימוש:** לחץ על תיבת הסימון כדי לסמן/לבטל סימון.
- **שמירה:** השינוי נשמר אוטומטית ב-LocalStorage.

![image](https://github.com/user-attachments/assets/8a4b0913-b1e8-4a29-ad01-4cb6dc9dfed7)

### 3. מחיקת משימה 🗑️
- **תיאור:** מאפשר למחוק משימה מהרשימה.
- **שימוש:** לחץ על "Delete" כדי להסיר את המשימה.
- **שמירה:** הרשימה המעודכנת נשמרת ב-LocalStorage.

![image](https://github.com/user-attachments/assets/74e57e4c-382d-4f9c-85f7-c9bffeaa86d6)

### 4. סינון משימות 🔍
- **תיאור:** מאפשר לסנן את המשימות לפי "הכל", "הושלמו", או "לא הושלמו".
- **שימוש:** לחץ על אחד הכפתורים כדי לעדכן את התצוגה.

![image](https://github.com/user-attachments/assets/def682ac-a0f7-49fc-893d-0afe69e90f30)


### 5. הצגת ציטוט השראה 💡
- **תיאור:** מציג ציטוט אקראי מה-API של API Ninjas (`https://api.api-ninjas.com/v1/quotes`) עם שם המחבר וקטגוריה.
- **שימוש:** נטען אוטומטית מה-API בכל טעינת העמוד.
- **שמירה:** הציטוט אינו נשמר ב-LocalStorage ומוחלף בכל רענון על ידי ציטוט חדש מה-API.

![image](https://github.com/user-attachments/assets/5e8f53fe-fbdc-47ba-b036-d7b780555c64) 


## שירותים וטכנולוגיות בשימוש 🛠️
הפרויקט משתמש בטכנולוגיות ושירותים הבאים:

1. **React ו-TypeScript** ⚛️
   - ספריית React לבניית ממשק המשתמש.
   - TypeScript להוספת טיפוסים סטטיים לבטיחות הקוד.
   - ממשקים מוגדרים ב-`src/interfaces/index.ts` עבור משימות (`Task`) וציטוטים (`Quote`).

2. **Vite** ⚡
   - כלי בנייה מהיר לפרויקטי JavaScript/TypeScript.
   - קובץ תצורה: `vite.config.ts`.

3. **Tailwind CSS** 🎨
   - ספריית עיצוב מבוססת Utility-First ליצירת ממשק מושך ורספונסיבי.
   - מוגדר דרך `@tailwindcss/vite` ב-`vite.config.ts` ו-`@import "tailwindcss"` ב-`styles.css`.

4. **Axios** 🌐
   - ספרייה לביצוע בקשות HTTP ל-API חיצוני.
   - משמשת ב-`QuoteBox.tsx` לשליפת ציטוטים מה-API של API Ninjas.

5. **API Ninjas Quotes API** 📜
   - שירות חיצוני שמספק ציטוטים אקראיים.
   - כתובת: `https://api.api-ninjas.com/v1/quotes`.
   - מחזיר ציטוטים בפורמט JSON עם שדות: `quote`, `author`, ו-`category`.

6. **LocalStorage** 💾
   - ממשק אחסון בדפדפן לשמירת משימות בין רענונים.
   - משמש ב-`App.tsx` לניהול משימות (מפתח: `"tasks"`).

7. **Google Fonts (Inter)** ✍️
   - גופן מודרני ונקי המשמש לטיפוגרפיה של האפליקציה.
   - מיובא ב-`index.html`.  
     
8. **Vercel** 🚀
   - פלטפורמת Serverless לפריסת האפליקציה ברשת.
   - מאפשרת פריסה ישירה מ-GitHub עם בנייה אוטומטית ודומיין חינמי.

## תמונות מסך של האתר
<code>All</code><br>
![image](https://github.com/user-attachments/assets/3a9eab9a-c45a-401e-9ba7-6203e93d6b86)<br>
<code>Completed</code><br>
![image](https://github.com/user-attachments/assets/6200be92-57bf-4bd8-b14c-cfb8b18630f0)<br>
<code>Incomplete</code><br>
![image](https://github.com/user-attachments/assets/e0674aaa-43c2-4d64-a0bc-4f3e6be517f3)<br><br><br> 
## 🌐 קישורים 

**קישור לאתר:** [לחץ כאן](https://task-manager-ts-jade.vercel.app/) 🚀

📧 **ליצירת קשר:** עומר נגר - [לחץ כאן](mailto:omern100@gmail.com)

![myPhoto](https://github.com/user-attachments/assets/f73cc4f9-6334-477d-8454-eff1cbb49943)

