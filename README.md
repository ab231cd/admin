## 参考文档  ##
###  目录结构 ###
~~~
/
├── lib/      第三方包
│    
├── dist/     最终发布使用目录
│
├── src/      源文件
├── 
├── 
└── 


└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.min.js
    ├── bootstrap.js
    └── bootstrap.min.js
~~~


### 初始化安装
1. git 拉取
2. 进入目录 
~~~ javascript
npm instal 或 npm i windows //下边如果部分包不能拉取成功；以管理员身份运行
cnpm instal
~~~
3. 打包js文件
运行命令
~~~
npm build
~~~
4. 在web服务器下访问 index.html