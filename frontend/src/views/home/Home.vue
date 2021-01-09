<template>
  <div class="home">
    <div class="home_top">
      <div class="home_top_logo">头像</div>
      <div class="home_top_name">公司名</div>
      <div class="home_top_phone">联系电话：1333333</div>
      <div class="home_top_address">地址：广东省广州市番禺</div>
    </div>
    <div class="home_content">
      <div class="home_news">公司 最近 新闻</div>
      <div class="home_task">最近公司任务：</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  width: 1300px;
  height: 800px;
  margin: 30px auto;
  background: rgba(0, 0, 0, 0.1);
}

.home_top {
  position: relative;
  top: 40px;
  margin: 0 auto;
  width: 1100px;
  height: 125px;
  background-color: #f4d000;
  box-shadow: 0 2px 6px 3px rgba(0, 0, 0, 0.2);
}

.home_top_logo {
  position: absolute;
  top: 10px;
  left: 30px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 100px;
  background-color: white;
}

.home_top_name {
  position: absolute;
  top: 10px;
  left: 200px;
  font-size: 30px;
}

.home_top_phone {
  position: absolute;
  top: 70px;
  left: 200px;
  font-size: 20px;
}

.home_top_address {
  position: absolute;
  top: 70px;
  left: 600px;
  font-size: 20px;
}

.home_content {
  position: relative;
  width: 1100px;
  top: 40px;
  margin: 0 auto;
  /*height: 100%;*/
  /*background-color: red;*/
}

.home_content:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.home_content {
  *zoom: 1;
}

.home_news {
  position: absolute;
  width: 380px;
  height: 559px;
  margin: 30px 30px;
  line-height: 20px;
  background-color: rgba(249, 205, 173, 100);
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 100);
  box-shadow: 0 2px 6px 3px rgba(0, 0, 0, 0.2);
}

.home_task {
  position: absolute;
  top: 50px;
  left: 380px;
  width: 600px;
  height: 400px;
  margin: 30px 50px;
  line-height: 20px;
  background-color: rgba(249, 205, 173, 100);
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 100);
  box-shadow: 0 2px 6px 3px rgba(0, 0, 0, 0.2);
}
</style>
