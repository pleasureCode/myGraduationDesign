<<<<<<< HEAD
# 初始化

vue/cli v4.5.9

安装：

- Vue3.x
- Router
- CSS Pre-processors，Sass/SCSS (with dart-sass)
- ESlint，ESLint + Prettier
- axios，0.21.0

```
Vue CLI v4.5.9
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) n
```



数据库

```mysql
create database staffSystem
```





# API接口-简易版

## 获取Task页面数据

- http请求：GET

- ```
  http://127.0.0.1:3000/task
  ```

- ```json
  [
    {
      "taskId": 1,
      "taskGetName": "管理员",
      "taskSendName": "主管",
      "taskTitle": "你好",
      "taskContent": "今天是个好日子1",
      "taskTime": "2020-12-02",
      "taskFinishTime": "2020-12-30"
    },
    {
      "taskId": 2,
      "taskGetName": "主管",
      "taskSendName": "管理员",
      "taskTitle": "你好",
      "taskContent": "今天是个好日子2",
      "taskTime": "2020-12-02",
      "taskFinishTime": "2020-12-30"
    }
  ]
  ```



## 添加Task页面数据

- http请求：post

- ```
  http://127.0.0.1:3000/task/addTask
  ```

- 失败返回json数据：

  ```json
  code: 0,
  msg: '添加任务失败'
  ```

  

- 成功返回json数据：

  ```json
  code: 1,
  msg: '添加任务成功'
  ```

  

## 获取Diary页面数据

- http请求：GET

- ```
  http://127.0.0.1:3000/diary
  ```

- ```json
  [
    {
      "diaryId": 1,
      "userName": "管理员",
      "userId": 1,
      "diaryContent": "我是今天的内容",
      "diaryTime": "2020-12-02"
    },
    {
      "diaryId": 2,
      "userName": "主管",
      "userId": 2,
      "diaryContent": "我是主管",
      "diaryTime": "2020-12-02"
    }
  ]
  ```



## 添加Diary页面数据

- http请求：post

- ```
  http://127.0.0.1:3000/diark/addDiary
  ```

- 失败返回json数据：

  ```json
  code: 0,
  msg: '添加总结失败'
  ```

  

- 成功返回json数据：

  ```json
  code: 1,
  msg: '添加总结成功'
  ```

  

## 查看用户数据

- http请求：GET

- ```
  http://127.0.0.1:3000
  ```

- ```json
  [
    {
      "userId": 1,
      "userName": "管理员",
      "email": "1534273733@qq.com",
      "psw": "123456",
      "authorityNames": "管理员"
    },
    {
      "userId": 2,
      "userName": "主管",
      "email": "123654789@qq.com",
      "psw": "123456",
      "authorityNames": "管理员"
    }
  ]
  ```

=======
# myGraduationDesign
>>>>>>> 65e8f4f33cf9d291d51d9c23a780e74c0cc63e4b
