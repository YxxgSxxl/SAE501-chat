# Behh-chat

To make everything work fine, check the .env-template file and add your configuration, then rename to ".env".

After that, go to server/assets/behhchat-module and change the server that it is aiming to your API server IP.

### What I needed to do to make this work

- Create a ExpressJS server to make API calls
- Create a SocketIO server to make the chat
- Create a MySQL database to store and communicate
- Create a PrestaShop module to make the API calls
- Securize the chat app and the database
