## Create and Build a Docker Image

### Prerequisites
1. Ensure Docker is installed on your system. You can download it from [Docker's official website](https://www.docker.com/).
2. Verify Docker is running by executing:
    ```bash
    docker --version
    ```

### Steps to Create and Build a Docker Image

1. **Navigate to the Project Directory**  
    Open a terminal and navigate to the directory containing your `Dockerfile`:
    ```bash
    cd /c:/Users/raneem.rashid/Desktop/Modules/Deployment/Week\ 2/Demo
    ```

2. **Build the Docker Image**  
    Run the following command to build the Docker image:
    ```bash
    docker build -t <image-name>:<tag> .
    ```
    Replace `<image-name>` with your desired image name and `<tag>` with a version tag (e.g., `v1.0`).

3. **Verify the Image**  
    After building, verify the image exists by running:
    ```bash
    docker images
    ```

4. **Run the Docker Container**  
    Start a container from the image:
    ```bash
    docker run -d -p <host-port>:<container-port> --name <container-name> <image-name>:<tag>
    ```
    Replace `<host-port>` and `<container-port>` with the appropriate ports, and `<container-name>` with a name for your container.

5. **Check Running Containers**  
    Verify the container is running:
    ```bash
    docker ps
    ```

6. **Stop the Container**  
    To stop the container, use:
    ```bash
    docker stop <container-name>
    ```

7. **Remove the Container**  
    If needed, remove the container:
    ```bash
    docker rm <container-name>
    ```

8. **Remove the Image**  
    To delete the image:
    ```bash
    docker rmi <image-name>:<tag>
    ```

### Notes
- Ensure the `Dockerfile` is correctly configured before building the image.
- Use `docker logs <container-name>` to debug if the container fails to start.

### Additional Resources
- [Docker Documentation](https://docs.docker.com/)
- [Docker CLI Reference](https://docs.docker.com/engine/reference/commandline/)
