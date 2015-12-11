# uaid-giftbox
## Setting Up a Test Environment
In order to set up a working environment for this repository you will need a Wamp server and a WordPress installation. Setup instructions are detailed below.

### Installing Wamp
Go to [wampserver.com/en](wampserver.com/en) and follow the steps below:

1. Download the 32 or 64-bit option of Wamp (whichever is most appropriate for your computer).
2. Go through the installation process (You may want to customize where the Wamp folder will be installed, but it isn't necessary).
3. If there is a security alert, allow Apache HTTP Server to communicate on private networks.
4. If the setup prompts about PHP mail parameters, leave them set to the default values for now.

After installation, your server will be running. If not, you can start it by:

* double clicking the desktop shortcut if you created one in installation
* searching "Wamp" in the start menu, and selecting the program

Open a browser and navigate to "localhost". If your server is running it will open a page with the Wamp logo.

To stop the server, right click the Wamp icon in the taskbar (bottom right) and click "Exit".

### Installing WordPress
Go to [wordpress.org](wordpress.org) and follow the steps below:

1. Download WordPress.
2. Extract the files into the "www" folder in your Wamp installation.
3. Open your browser to "localhost/<wordpress-folder-name>".
4. In the installation process you will need your database name, your MySQL username and password, and your database host.
  * To access your database click the Wamp icon in the taskbar (bottom right) and click "phpMyAdmin". If a database exists, it will be listed on the left. You can use an existing database (if one exists), or create a new one.
  * Wamp comes with a default MySQL user - "root"
  * "root" has no password. Leave the password field blank.
  * Set the database host to localhost
  * In a production WordPress installation you should change the table prefix, but in a testing environment it's not important.
5. Finish the installation process.

#### Testing Content (optional)
To see how the content would appear in the testing environment you can use the data from UAID's site, or dummy data.

To download UAID's content follow the steps below:

1. Log in to UAID's WordPress back end.
2. Navigate to Tools > Export.
3. Export all content and download the export file.

To download dummy data go to [wptest.io](wptest.io) and click "download". Extract the files.

To install the downloaded content, open the testing environment's WordPress back end and follow the steps below:

1. Navigate to Tools > Import.
2. Click "WordPress" and install and activate the plugin.
3. Upload the export file (.xml file)
4. Check the download and import file attachments.
5. Click submit.
6. The importing process may take a while. Wait for it to finish before clicking any links.

## Integrating the Test Environment With GitHub
Requirements for integration are:

* A GitHub account
* The [GitHub Desktop App](https://desktop.github.com/) OR [Git](https://git-scm.com/downloads) for the command line. (Further instructions will be for the desktop app)
