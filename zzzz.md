NO WINDOWS

- Abra o PROMPT de COMANDO
  - netstat -a -n -o => vai listar as portas em uso e dar o numero de pid de cada processo
  - Taskkill /PID <pid> /F => substitua <pid> pelo numero corespondente da porta que vc deseja derrubar

NO LINUX UBUNTO

- Abra o terminal
  - sudo lsof -i => vai listar as portas em uso e dar o numero de pid de cada processo
  - kill -9 <pid> => substitua <pid> pelo numero corespondente da porta que vc deseja derrubar
