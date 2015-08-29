# Overview
	    This is a simple chat app. This app is created with help of [socket.io](socket.io), 
		[redis-server](http://redis.io/), socket.io-redis, 
		[nodejs](https://nodejs.org/),  [angularjs](https://angular.io/) and 
		[angular-material](https://material.angularjs.org/latest/#/).
	
# Setup App Environment
## Component Installation
	1. Install NodeJs
	2. clone form github
	3. In the folder run below commands
		a. [sudo] npm install 
	 	b. [sudo] bower install
	4. Download  [redis-server](http://redis.io/download)
		a. In redis-server folder run: make
		
		
## Environment Setup
	This app used redis server and socket.io.
	If you are using Nginx server plase run the app acordingly.
	
	Setps:
	1. in src folder run ./redis-server
	2. run server.js using node
	3. give port name in process environment variable
	4. give Redis server ip in process environment variable
	 example: [sudo] Redis="127.0.0.1:6379" PORT=4000 npm start
	 it will automatically start the server using nodemon.
	
	IF YOU ARE USING LOAD BALANCING USING NGINX BELOW IS A SAMPLE .conf file
		```
		upstream chat {
			# ip_hash;
			#server chat.vagrant;
			server dev.chat.server1.try:4000;
			server dev.chat.server2.try:4000 weight=1;
		
		}
	
		server {
			listen 80;
			server_name dev.mac.chat-app.try;
			location / {
				#chat app config
				proxy_pass http://chat;
				proxy_http_version 1.1;
				proxy_set_header Upgrade $http_upgrade;	
				proxy_set_header Connection 'upgrade';
				proxy_set_header Host $host;
				proxy_cache_bypass $http_upgrade;
				proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			}
		
		}
	```