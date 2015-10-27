scpd.js
=======

scpd.js is a Tampermonkey script to allow for Youtube-like keybindings inside of
Stanford's SCPD videos. I found this pretty useful, as when I often watch the
videos split-screen with an iTerm taking notes, and found it distracting to
remove my fingers from the keyboard to click back **exactly** 10 seconds to hear
something I missed.

Installing
----------

Install the Tampermonkey extension on a browser that supports it. I've only
tested it on Chrome, so if you find issues on other platforms let me know!

1. Go to **Utilities**
2. In the section that says **URL**, enter
   ``https://raw.githubusercontent.com/andreweduffy/scpd.js/master/scpd.js``,
    then click **Import**

Current Features
----------------

* **J/K/L**: Back 10 seconds / Toggle Play / Forward 10 seconds
* **H/;**: Backward / Forward 30 seconds
* **G**: "Goto Time": opens an alert box prompting you for the exact ``mm:ss``
  you'd like to jump to.

TODOs (Feel free to PR!)
------------------------
* Bindings to change video speed
* Prettier interface for Goto Time (add some sort of prompt in the DOM for this,
  because gross alert boxes are gross).
* Error checking on the time entered for Goto Time
