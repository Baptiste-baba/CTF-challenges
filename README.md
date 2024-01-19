# CTF-challenges
CTF Challenges for the Software Cybersecurity project

This Capture The Flag (CTF) project comprises three levels of difficulty: simple, medium, and hard, each with a unique flag to be discovered.

## Quick Start

Follow these steps to access the three levels of the CTF:

1. **Install Node.js**:
   - Ensure Node.js is installed on your system. For installation instructions, refer to the installation guide below.

2. **Install project dependencies**:
   - Once node.js is installed, you also need to run these commands in your terminal to install all the project's dependencies:
     ```bash
     npm install express
     ```
     ```bash
     npm install mongodb
     ```
     ```bash
     npm install bcrypt
     ```
     ```bash
     npm install express-session
     ```
     ```bash
     npm install connect-mongo
     ```
     
    - Une fois que tout est installé, vous pouvez vous lancer le projet
     
3. **Launch the Website Locally**:
   - Navigate to the directory where you've saved the "CTF_Project" folder.
   - Run the following command in your terminal:
     ```bash
     node app.js
     ```
   - You should see a message indicating that the server has started, typically:
     ```
     The server has started! Port: 9000
     ```

4. **Access the Challenges**:
   - Open your web browser and enter the following URL:
     ```
     http://localhost:9000/
     ```
   - The website hosting the three CTF challenges should now be operational. You're all set to start the quest for the three flags!

### Challenges
The project includes three levels:
- **Simple**: A great starting point for beginners.
- **Medium**: For those looking for a bit more challenge.
- **Hard**: Designed for experienced individuals seeking a difficult challenge.

Enjoy the hunt for the flags!

# Node.js Installation Guide

This guide provides instructions for installing Node.js on your system. The steps vary depending on your operating system.

## Windows and macOS

### Steps:

1. **Download the Installer**:
   - Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/).
   - Choose between the LTS (Long Term Support) and Current versions.
   - Download the installer for Windows or macOS.

2. **Run the Installer**:
   - Open the downloaded installation file.
   - Follow the on-screen instructions. The default settings are suitable for most users.

3. **Verify the Installation**:
   - Open a terminal (Command Prompt on Windows, Terminal on macOS).
   - Type `node -v` to check the Node.js version.
   - Type `npm -v` to ensure that npm (Node Package Manager) is installed.

## Linux (Debian and Ubuntu-based distributions)

### Steps:

1. **Add Node.js PPA to Your System**:
   - Open a terminal.
   - Execute the following commands to add the PPA:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
     ```
     - Replace `setup_16.x` with `setup_14.x` if you prefer to install version 14.x LTS.

2. **Install Node.js**:
   - After adding the PPA, install Node.js by running:
     ```bash
     sudo apt-get install -y nodejs
     ```

3. **Verify the Installation**:
   - Confirm the installation by running:
     ```bash
     node -v
     npm -v
     ```

## Troubleshooting

- If you encounter any issues, ensure your system path is properly configured and environment variables are correctly set.
- For specific problems, refer to the official Node.js documentation or seek solutions on forums like Stack Overflow.
