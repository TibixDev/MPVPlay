<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TibixDev/MPVPlay">
    <img src="https://i.imgur.com/2t1lkUp.png" alt="MPVPlay Logo" width="80" height="80">
  </a>

<h3 align="center">MPVPlay</h3>

  <p align="center">
    MPVPlay is a combination of a `.desktop` file and a userscript that allows you to play YouTube videos directly in MPV with the click of a button. The UI integrates nicely into the YouTube button bar where the likes/dislike buttons reside aswell.
    <br />
    <br />
    <a href="https://github.com/TibixDev/MPVPlay/issues">Report Bug</a>
    ·
    <a href="https://github.com/TibixDev/MPVPlay/issues">Request Feature</a>
  </p>
</div>

## Getting Started

### Dependencies
* Linux
* [mpv](https://github.com/mpv-player/mpv)
* [yt-dlp](https://github.com/yt-dlp/yt-dlp)
* A Chromium or Firefox based browser that supports custom protocols
* A userscript manager extension, for example [ViolentMonkey](https://violentmonkey.github.io/)

### Installing & Running
**Step 1 - `.desktop` installation**
```
git clone https://github.com/TibixDev/MPVPlay
cd MPVPlay
cp mpv-opener.desktop ~/.local/share/applications/
cd ~/.local/share/applications/
xdg-mime default mpv-opener.desktop x-scheme-handler/mpv
update-desktop-database
```

**Step 2 - Userscript installation**

1. Downloading the [ViolentMonkey](https://violentmonkey.github.io/get-it/) extension for your browser.
2. Click the extension icon, click the + button.
3. Paste in the contents of `userscript/mpv.js`, save (CTRL + S).
4. Enjoy! Now when you visit any YouTube video, you will see a button in the like/dislike bar to play the video with MPV.



## Roadmap
* Windows Support
* Whatever the community wants

## Help
If you encounter any issues feel free to open an issue.

## Contribution
If you feel like this project could use some improvements feel free to open a PR. I'll make sure to review it. :)

## Authors
[@TibixDev](https://github.com/TibixDev)

## Version History
* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Special thanks, inspiration, code snippets, etc.
* [Levev](https://github.com/Levev) - Massive thanks to you for helping me with the bash!
* [StackOverflow - Creating URL schemes in Linux](https://unix.stackexchange.com/a/497147)
* [StackOverflow - Escaping single-quotes in bash](https://stackoverflow.com/a/1250279/10771609)
* [StackOverflow - Replacing stuff in bash](https://stackoverflow.com/a/13210909/10771609)
