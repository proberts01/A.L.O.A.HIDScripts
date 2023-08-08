/*
   HIDScript for Alien Message Prank
   Objective: Create an Alien Message prank using PowerShell

   Steps:
   1. Open the Run dialog
   2. Open PowerShell
   3. Create a Python script file
   4. Write code into the script file
   5. Execute the Python script
   6. Close PowerShell

   Notes:
   - This script is for educational purposes and should be used ethically.
   - Always ensure proper authorization and adhere to legal and ethical guidelines.
*/

layout("us");  // Set keyboard layout to US

// Initial delay to ensure the system recognizes the HID device
delay(1000);

// Open the Run dialog
press("GUI r");
delay(500);

// Type "powershell" to open PowerShell
type("powershell");
press("ENTER");
delay(1500);

// Create the Python script file
type("New-Item -Path \".\\script.py\" -ItemType \"file\" -Force");
press("ENTER");
delay(1000);

// Write the code into the script file
type("Set-Content -Path \".\\script.py\" -Value \"import os; from time import sleep; os.system('pip install pyttsx3'); import pyttsx3; sleep(60); alien_message = 'Greetings to the inhabitants of planet Earth. I am an alien from a distant planet named Hak5 and I have taken control of this computer to communicate with you. I want to announce to you that in exactly one year's time our invasion fleet will arrive on your planet because we have heard that you make very good fries. Resistance is useless. Your only option is to give us all the fries you have and to produce as many as possible to satiate us. Your planet will become a potato chip colony and you will produce forever. Get ready, earthlings. Our hunger is near.'; motore = pyttsx3.init(); voce_alienea = motore.getProperty('voices')[1]; motore.setProperty('voice', voce_alienea.id); motore.setProperty('pitch', 70); motore.say(alien_message); motore.runAndWait();\"");
press("ENTER");
delay(1000);

// Execute the Python script
type("Start-Process python.exe -ArgumentList \"script.py\" -WindowStyle Hidden");
press("ENTER");
delay(1000);

// Close the PowerShell
press("ALT F4");
