/*
   AUTOinCORRECT Prank
   Author: the-jcksn

   Description: Creates a custom Microsoft Word Autocorrect rule to change "the" to "teh".
   Modify the script to change other words as needed.

   Target: Windows 10 / Microsoft Word

   Notes:
   - This script is for educational and prank purposes only.
   - Always ensure proper authorization and adhere to ethical guidelines.
*/

// Initial delay to ensure the system recognizes the HID device
delay(2000);

// Open the Run dialog
press("GUI r");
delay(200);

// Type "winword" to open Microsoft Word
type("winword");
press("ENTER");
delay(1000);
press("ENTER");
delay(200);

// Edit Autocorrect rules
press("ALT q");
delay(300);
type("options spelling");
delay(500);
press("ENTER");
delay(200);
press("TAB");
delay(200);
press("ENTER");
delay(200);

// Autocorrect "the" to "teh" (modify as needed)
type("the");
delay(200);
press("TAB");
type("teh");
delay(200);
press("ALT a");
delay(200);

// Save and exit
press("ENTER");
delay(200);
press("SHIFT TAB");
delay(200);
press("ENTER");
delay(200);
press("ALT F4");
delay(200);