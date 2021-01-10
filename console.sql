create database staffSystem;
# 用户
create TABLE staffUsers
(
    userId         INT          NOT NULL AUTO_INCREMENT,
    userName       VARCHAR(50)  NOT NULL,
    email          VARCHAR(200) NOT NULL,
    psw            VARCHAR(200) NOT NULL,
    authorityNames VARCHAR(30)  NOT NULL,
    PRIMARY KEY (userId)
);

# 员工每日总结
create TABLE staffDiary
(
    diaryId      INT           NOT NULL AUTO_INCREMENT,
    userName     VARCHAR(50)   NOT NULL,
    diaryTitle   VARCHAR(100)  NOT NULL,
    diaryContent VARCHAR(1000) NOT NULL,
    diaryTime    VARCHAR(60)   NOT NULL,
    PRIMARY KEY (diaryId)
);

# 任务
create TABLE task
(
    taskId         INT           NOT NULL AUTO_INCREMENT,
    taskGetName    VARCHAR(100)  NOT NULL,
    taskSendName   VARCHAR(100)  NOT NULL,
    taskTitle      VARCHAR(100)  NOT NULL,
    taskContent    VARCHAR(1000) NOT NULL,
    taskTime       VARCHAR(60)   NOT NULL,
    taskFinishTime VARCHAR(60)   NOT NULL,
    PRIMARY KEY (taskId)
);

insert into staffusers
values (1, "管理员", "1534273733@qq.com", "123", "管理员");
insert into staffusers
values (null, "员工1", "12365@qq.com", "123", "员工");
insert into staffusers
values (null, "员工2", "12365@qq.com", "123", "员工");
insert into staffusers
values (null, "员工3", "12365@qq.com", "123", "员工");


insert into staffdiary
values (1, "管理员", "我是标题1", "我是今天的内容，我是管理员", "2020-12-02");
insert into staffdiary
values (null, "员工1", "今天的工作进度", "我是员工1，今日（2020-12-02）我完成了公司布置下来的工作", "2020-12-02");
insert into staffdiary
values (null, "员工1", "今天的工作进度", "我是员工1，今日（2020-12-0）我们项目定下来了。", "2020-12-03");
insert into staffdiary
values (null, "员工2", "今天的工作进度", "我是员工2，今日（2020-12-02）我完成了公司布置下来的工作", "2020-12-02");
insert into staffdiary
values (null, "员工2", "今天的工作进度", "我是员工2，今日（2020-12-0）我们项目定下来了。", "2020-12-03");
insert into staffdiary
values (null, "员工3", "今天的工作进度", "我是员工3，今日（2020-12-02）我完成了公司布置下来的工作", "2020-12-02");
insert into staffdiary
values (null, "员工3", "今天的工作进度", "我是员工3，今日（2020-12-0）我们项目定下来了。", "2020-12-03");

insert into task
values (1, "管理员", "员工1", "完成A进度工作", "员工1你好，你今天完成A进度的工作", "2020-12-02", "2020-12-30");
insert into task
values (1, "管理员", "员工1", "完成B进度工作", "员工1你好，你今天完成B进度的工作", "2020-12-02", "2020-12-30");
insert into task
values (1, "管理员", "员工2", "完成A进度工作", "员工2你好，你今天完成A进度的工作", "2020-12-02", "2020-12-30");
insert into task
values (1, "管理员", "员工2", "完成B进度工作", "员工2你好，你今天完成B进度的工作", "2020-12-02", "2020-12-30");
insert into task
values (1, "管理员", "员工3", "完成A进度工作", "员工3你好，你今天完成A进度的工作", "2020-12-02", "2020-12-30");
insert into task
values (1, "管理员", "员工3", "完成B进度工作", "员工3你好，你今天完成B进度的工作", "2020-12-02", "2020-12-30");
