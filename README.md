# DarkModeBrowser
A Chromium extension to set any website into dark theme.

Links used on project: 
https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part1-simple-extension,
https://developer.chrome.com/docs/extensions/reference/tabs/,
https://darkreader.org/ OR https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc

How to Enable Dark Theme in SQL Server Management Studio:
https://www.prajwaldesai.com/how-to-enable-dark-theme-in-sql-server-management-studio/
On the machine where SSMS is installed, browse to the following location to change the configuration file ssms.pkgundef. 
The file path for SSMS 17 is C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio. 
In case you are using SSMS 2016, the path is C:\Program Files (x86)\Microsoft SQL Server\130\Tools\Binn\ManagementStudio.
Right click ssms.pkgundef and edit with Notepad++. Look for the line // Remove Dark Theme. This is usually on the line number 241. 
Add // to the beginning of very next line and save the file. Open the SSMS again and under General > Options you will find a new color theme “Dark”. 
Select the Dark color theme and click OK.
