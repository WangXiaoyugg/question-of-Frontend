# 查看进程

- ps ax | grep xxx.js, 查看进程号10000
- node -e "process._degugProcess(10000)"
- kill -SIGUSR1 10000 , 杀掉调试进程