<template>
  <div class="task">
    <div class="task_left">
      <div class="task_left_content">
        <h2>发布</h2>
        <div class="input_p">
          <label
            >接收方名字：
            <input
              v-model="taskGetName"
              name="taskGetName"
              type="text"
              id="taskGetName"
              placeholder="请输入接收方名字"
            />
          </label>
        </div>
        <div class="input_p">
          <label
            >任务标题：
            <input
              v-model="taskTitle"
              name="taskTitle"
              type="text"
              placeholder="请输入任务的标题"
            />
          </label>
        </div>
        <div class="input_p_content">
          <label
            >内容：
            <br />
            <textarea
              v-model="taskContent"
              name="taskContent"
              placeholder="请输入文本内容"
            />
          </label>
        </div>
        <div class="input_p">
          <label
            >完成时间：
            <input v-model="taskFinishTime" name="taskFinishTime" type="date" />
          </label>
        </div>
        <button type="submit" title="发布" @click="submit">发布</button>
      </div>
    </div>
    <div class="task_right">
      <div class="task_right_content">
        <h2>管理员：</h2>
        <div
          class="task_right_content_root"
          v-for="(item, index) in allUserRoot"
          :key="index"
        >
          <br />
          <button type="submit" title="点击显示" @click="enter(item)">
            {{ item }}
          </button>
        </div>
        <h2>员工：</h2>
        <div
          class="task_right_content_root"
          v-for="item in allUserStaff"
          :key="item"
        >
          <br />
          <button type="submit" title="点击显示" @click="enter(item)">
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addTask } from '@/network/task';
import { allUser } from '@/network/userDate';

export default {
  name: 'Task',
  data() {
    return {
      taskGetName: '',
      // 用户NAME
      taskSendName: '',
      taskTitle: '',
      taskContent: '',
      taskTime: '',
      taskFinishTime: '',
      allUserRoot: [],
      allUserStaff: []
    };
  },
  created() {
    this.getAllUser();
  },
  methods: {
    getAllUser() {
      allUser().then((res) => {
        res = res.data;
        // console.log(res);
        for (let a = 0; a < res.length; a++) {
          if (res[a].authorityNames === '管理员') {
            this.allUserRoot.push(res[a].userName);
          } else {
            this.allUserStaff.push(res[a].userName);
          }
          // console.log();
        }
        // this.allUserRoot = res.data;
        // console.log(this.allUserRoot);
      });
    },
    submit() {
      let myDate = new Date();
      this.taskTime = myDate.toLocaleDateString();
      this.taskSendName = sessionStorage.getItem('username');
      console.log(
        'taskGetName：',
        this.taskGetName,
        'taskSendName：',
        this.taskSendName,
        'taskTitle：',
        this.taskTitle,
        'taskContent：',
        this.taskContent,
        'taskTime：',
        this.taskTime,
        'taskFinishTime：',
        this.taskFinishTime
      );
      addTask(
        this.taskGetName,
        this.taskSendName,
        this.taskTitle,
        this.taskContent,
        this.taskTime,
        this.taskFinishTime
      )
        .then((res) => {
          alert(res.data.msg);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    enter(item) {
      this.taskGetName = item;
      // console.log(item);
    }
  }
};
</script>

<style scoped>
.task {
  width: 1300px;
  height: 800px;
  margin: 30px auto;
  background: rgba(0, 0, 0, 0.1);
}

.task_left {
  float: left;
  position: relative;
  width: 880px;
  height: 780px;
  margin: 10px 30px 1px;
  line-height: 20px;
  background-color: rgba(205, 164, 158, 100);
  text-align: center;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.task_left_content {
  position: absolute;
  left: 23px;
  top: 15px;
  width: 834px;
  height: 740px;
  line-height: 20px;
  background-color: rgba(249, 205, 173, 100);
  text-align: center;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.task_left_content h2 {
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 50px;
  color: #fe4365;
}

.input_p {
  font-size: 20px;
  margin: 20px 0;
}

.input_p:first-child {
  color: red;
}

.input_p label {
  color: #fe4365;
  font-size: 30px;
}

.input_p label input {
  width: 386px;
  height: 73px;
  border-radius: 10px;
  background-color: rgba(200, 200, 169, 100);
  color: rgba(114, 83, 52, 100);
  font-size: 16px;
  text-align: left;
  border: 1px solid rgba(187, 187, 187, 100);
}

.input_p_content label {
  display: inline-block;
  font-size: 30px;
  color: #fe4365;
  text-align: left;
}

.input_p_content textarea {
  width: 700px;
  height: 220px;
  margin-top: 10px;
  line-height: 29px;
  border-radius: 10px;
  background-color: rgba(200, 200, 169, 100);
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  text-align: left;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.task_left button {
  width: 335px;
  height: 54px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  background-color: rgba(229, 131, 8, 100);
  color: white;
  font-size: 20px;
  text-align: center;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.3);
}

.task_right {
  float: right;
  width: 280px;
  height: 780px;
  margin: 10px 30px 0;
  line-height: 20px;
  background-color: rgba(205, 164, 158, 100);
  text-align: center;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.task_right_content {
  width: 250px;
  height: 720px;
  margin: 30px 15px;
  line-height: 20px;
  background-color: rgba(249, 205, 173, 100);
  text-align: center;
  overflow: auto;
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.task_right_content_root button {
  bottom: 48px;
  width: 200px;
  height: 60px;
  line-height: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px 5px 5px 5px;
  background-color: rgba(229, 131, 8, 100);
  color: white;
  font-size: 20px;
  text-align: center;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.3);
}
</style>
