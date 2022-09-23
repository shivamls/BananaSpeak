# BananaSpeak
# Making some notes here

querySelector() is used for fetching the element, say, a button on your HTML or a text box or anything like that

You can use # to access an element by its name inside the querySelector(). For ex: We named our button as btn-translate in the HTML and fetch it in js using document.querySelector("#btn-translate")

Still have to understand why we are using div

Add js script using the 'script' tag with name of file as input src
I think this should be added towards the end (there was some issue when I had this in mid somewhere, I think js file loads as soon as it is mentioned in HTML and if some elements are defined after that and are referenced in js then it will raise an error)

alert() is used to show a banner on the web as user lands

you can log anything on the console using console.log("")

There are certain events like 'onclick' which you can attach to a querySelector element but don't use onclick, 
Rather you should use .addEventListener("click")

For a textbox, 
- if you want to access the value input by user, use '.value'
- if you want to put an output use '.innerText'

callback functions - a method calling another method

There are multiple events, including 'onclick', onscroll, onsubmit, onchange

LiveExervice: querySelector()
1) document.querySelector("textarea")
2) document.querySelector(.btn-primary)
3) "#input-btn"

More reading:
Document.createTextNode()
insertBefore() and appendChild()


What I need to come back to
- create leap year and prime numbers CLI app on browser