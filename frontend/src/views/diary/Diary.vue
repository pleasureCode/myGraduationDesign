<template>
  <div class="diary">
    <div class="diary_left">
      <div class="diary_left_content">
        <h2>每日总结</h2>
        <div class="input_p">
          <label
            >标题：
            <input
              v-model="diaryTitle"
              name="diaryTitle"
              type="text"
              placeholder="请输入标题"
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
            >时间：
            <input v-model="taskTime" name="taskFinishTime" type="date" />
          </label>
        </div>
        <button type="submit" title="发布" @click="submit">发布</button>
      </div>
    </div>
    <div class="diary_right">
      <div class="diary_right_content"></div>
    </div>
  </div>
</template>

<script>
import { addDiary } from '@/network/diary';

export default {
  name: 'Diary',
  data() {
    return {
      userName: '',
      diaryTitle: '',
      taskContent: '',
      taskTime: ''
    };
  },
  methods: {
    submit() {
      this.userName = sessionStorage.getItem('username');
      console.log(
        'userName:',
        this.userName,
        'diaryTitle:',
        this.diaryTitle,
        'taskContent:',
        this.taskContent,
        'taskTime:',
        this.taskTime
      );
      addDiary(this.userName, this.diaryTitle, this.taskContent, this.taskTime)
        .then((res) => {
          alert(res.data.msg);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.diary {
  width: 1300px;
  height: 1000px;
  margin: 30px auto;
  background: rgba(0, 0, 0, 0.1);
}

.diary_left {
  float: left;
  position: relative;
  width: 1240px;
  height: 980px;
  margin: 10px 30px 1px;
  line-height: 20px;
  background-color: rgba(205, 164, 158, 100);
  text-align: center;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.diary_left_content {
  position: absolute;
  left: 23px;
  top: 15px;
  width: 1194px;
  height: 940px;
  line-height: 20px;
  background-color: rgba(249, 205, 173, 100);
  text-align: center;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.diary_left_content h2 {
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 50px;
  color: #fe4365;
}

.input_p {
  font-size: 20px;
  margin: 20px 0;
}

.input_p label {
  color: #fe4365;
  font-size: 30px;
}

.input_p label input {
  width: 422px;
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
  width: 1060px;
  height: 500px;
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

.diary_left button {
  width: 335px;
  height: 54px;
  margin-top: 30px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  background-color: rgba(229, 131, 8, 100);
  color: white;
  font-size: 20px;
  text-align: center;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.3);
}
</style>
