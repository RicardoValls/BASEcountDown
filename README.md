# BASEcountDown
This is a countdown for the launch of the BASE Hub website

- index.html is a html file that uses dependencies on /assets folder
- index_all_in_one.html is a file that combines HTML, CSS and JS. Still, needs images from /assets/images.

Version 1.2 avoids the lag of the counter on load by using setTimeout(foo, delay) instead of setInterval(foo, interval)/clearInterval(x).
            Also, some changes to simplify the display.
