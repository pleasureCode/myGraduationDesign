import { request } from '@/network/request';

export function getDiary() {
  return request({
    url: '/diary'
  });
}

export function addDiary(userName, diaryTitle, diaryContent, diaryTime) {
  return request({
    url: '/diary/addDiary',
    method: 'post',
    data: {
      userName,
      diaryTitle,
      diaryContent,
      diaryTime
    }
  });
}
