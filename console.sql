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
    userId       INT           NOT NULL,
    diaryContent VARCHAR(1000) NOT NULL,
    diaryTime    VARCHAR(60)   NOT NULL,
    PRIMARY KEY (diaryId)
);

# 任务
create TABLE task
(
    taskId         INT           NOT NULL AUTO_INCREMENT,
    taskGetName    VARCHAR(100)           NOT NULL,
    taskSendName   VARCHAR(100)           NOT NULL,
    taskTitle      VARCHAR(100)  NOT NULL,
    taskContent    VARCHAR(1000) NOT NULL,
    taskTime       VARCHAR(60)   NOT NULL,
    taskFinishTime VARCHAR(60)   NOT NULL,
    PRIMARY KEY (taskId)
);

insert into staffusers
values (1, "管理员", "1534273733@qq.com", "123456", "管理员");
insert into staffusers
values (null, "主管", "123654789@qq.com", "123456", "管理员");

insert into staffdiary
values (1, "管理员", 1, "我是今天的内容", "2020-12-02");
insert into staffdiary
values (null, "主管", 2, "我是主管", "2020-12-02");

insert into task
values (1, "管理员", "主管", "你好", "今天是个好日子1", "2020-12-02", "2020-12-30");
insert into task
values (null, "主管", "管理员", "你好", "今天是个好日子2", "2020-12-02", "2020-12-30");