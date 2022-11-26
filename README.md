Hosting Nestjs App with Github actions and EC2

# create AWS EC2 instance

# set security rules by going the below

- click security
- click security groups
- click Edit Inbound rules
- click add rules
- set type to custom TCP
- set port range to '80'
- 0.0.0.0.
- save rules
- check instance and click connect
- click ssh cient
- run ssh command with sudo # you should be connected to the EC2

# On github

- go to settings
- click on actions and then runner
- follow the instruction to install github actions on on EC2
  sudo apt update
  sudo apt install nodejs npm nginx
  sudo npm install -g pm2
  sudo ./svc.sh install
  sudo ./svc.sh start
  cd \_work # move to that directory
  sudo pm2 start dist/main.js --name=<app-name>
  sudo pm2 restart <app-name>
  cd etc/nginx/sites-available
  sudo nano default

# Add the piece of code below

location /api/ {
proxy_pass http://localhost:3000/;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}

# restart nginx with the code below

sudo systemctl restart nginx

Voila it is up
