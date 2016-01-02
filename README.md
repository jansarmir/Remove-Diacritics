# Remove Diacritics
Remove diacritics, accent from text.

## API
```js
console.log(removeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"));

console.log("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ".removeDiacritics());

// prints "Internationalizati0n"
```

## Tests
String.removeDiacritics is **16-20%** slower then removeDiacritics

## Links
* [Speed tests](https://jsperf.com/diacritics/36) - adopted **What?**
* [sync with](https://github.com/andrewrk/node-diacritics) - chars cleanup, sorting and some corrections