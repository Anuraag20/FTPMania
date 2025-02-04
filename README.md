# FTPMania: Create a Room, Share, Disappear.
![image](frontend/static/images/banner.png)

This project was created to allow sharing files amongst multiple people without the need for an account
- You create a room (no login required)
- Share the code
- Once everyone's in, then lock the room (optional)
- Share upto 500 MB!
- The room and all its contents become inaccessible within one hour of creation

To run the project on your machine:

1. Clone the repository
2. Run the following commands:
```
docker compose build
docker compose up
```
You'll need to have docker installed and ports 8000, 8001, 6379, 5432 should be available.

Click [here](https://ftpmania.anuraag.tech) to test the online version!
