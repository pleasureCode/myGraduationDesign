import { request } from '@/network/request';

export function getTask() {
  return request({
    url: '/task'
  });
}

export function addTask(
  taskGetName,
  taskSendName,
  taskTitle,
  taskContent,
  taskTime,
  taskFinishTime
) {
  return request({
    url: '/task/addTask',
    method: 'post',
    data: {
      taskGetName,
      taskSendName,
      taskTitle,
      taskContent,
      taskTime,
      taskFinishTime
    }
  });
}
