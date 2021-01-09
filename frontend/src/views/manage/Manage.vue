<template>
  <div class="manage">
    <div class="manage_left">
      <div class="manage_left_top">
        <h2>总结</h2>
        <div
          class="manage_left_bottom_content"
          v-for="item in showDiary"
          :key="item"
        >
          <p>用户名：{{ item.userName }}</p>
          <p>标题：{{ item.diaryTitle }}</p>
          <p>内容：{{ item.diaryContent }}</p>
          <p>时间：{{ item.diaryTime }}</p>
          <br />
        </div>
      </div>
      <div class="manage_left_bottom">
        <h2>任务</h2>
        <div
          class="manage_left_bottom_content"
          v-for="item in showTask"
          :key="item"
        >
          <p>接收人：{{ item.taskGetName }}</p>
          <p>发送人：{{ item.taskSendName }}</p>
          <p>标题：{{ item.taskTitle }}</p>
          <p>内容：{{ item.taskContent }}</p>
          <p>发送时间：{{ item.taskTime }}</p>
          <p>预计完成时间：{{ item.taskFinishTime }}</p>
          <br />
        </div>
      </div>
    </div>
    <div class="manage_right">
      <div class="manage_right_content">
        <h2>管理员：</h2>
        <div
          class="manage_right_content_root"
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
          class="manage_right_content_root"
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
import { allUser } from '@/network/userDate';
import { getTask } from '@/network/task';
import { getDiary } from '@/network/diary';
import Login from '@/views/login/Login';

export default {
  name: 'Manage',
  data() {
    return {
      allUserRoot: [],
      allUserStaff: [],
      contentDiary: [],
      contentTask: [],
      showDiary: [],
      showTask: []
    };
  },
  created() {
    this.getAllUser();
    this.getContent();
  },
  methods: {
    getAllUser() {
      allUser().then((res) => {
        res = res.data;
        console.log(res);
        for (let a = 0; a < res.length; a++) {
          if (res[a].authorityNames === '管理员') {
            this.allUserRoot.push(res[a].userName);
          } else {
            this.allUserStaff.push(res[a].userName);
          }
          console.log();
        }
        // this.allUserRoot = res.data;
        console.log(this.allUserRoot);
      });
    },
    getContent() {
      getTask().then((res) => {
        // console.log(res.data);
        this.contentTask = res.data;
      });
      getDiary().then((res) => {
        // console.log(res.data);
        this.contentDiary = res.data;
      });
    },
    enter(item) {
      this.showTask = [];
      this.showDiary = [];
      console.log('enter');
      for (let a = 0; a < this.contentDiary.length; a++) {
        if (this.contentDiary[a].userName === item) {
          this.showDiary.push(this.contentDiary[0]);
        }
      }
      for (let a = 0; a < this.contentTask.length; a++) {
        if (this.contentTask[a].taskGetName === item) {
          this.showTask.push(this.contentTask[0]);
        }
      }
      console.log(this.showDiary);
      console.log(this.showTask);
      console.log(item);
    }
  }
};
</script>

<style scoped>
.manage {
  width: 1300px;
  height: 800px;
  margin: 30px auto;
  background: rgba(0, 0, 0, 0.1);
}

.manage_left {
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

.manage_left_top {
  position: absolute;
  left: 23px;
  top: 15px;
  width: 834px;
  height: 360px;
  line-height: 20px;
  background-color: rgba(249, 205, 173, 100);
  text-align: center;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.manage_left_bottom {
  position: absolute;
  left: 23px;
  top: 400px;
  width: 832px;
  height: 361px;
  line-height: 20px;
  background-color: rgba(249, 205, 173, 100);
  text-align: center;
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

/*.manage_left_bottom_content {*/
/*  size: 50px;*/
/*}*/

.manage_right {
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

.manage_right_content {
  width: 250px;
  height: 720px;
  margin: 30px 15px;
  line-height: 20px;
  background-color: rgba(249, 205, 173, 100);
  text-align: center;
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}
</style>
