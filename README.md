![npm](https://img.shields.io/npm/v/js-file-extractor)
![npm collaborators](https://img.shields.io/npm/collaborators/js-file-extractor)
![npm bundle size](https://img.shields.io/bundlephobia/min/js-file-extractor?color=yellow)
![NPM](https://img.shields.io/npm/l/js-file-extractor)

> this project is a part of [nodejs-lessons](https://github.com/amiryeg1/nodejs-lessons) repository. feel free to visit it if you are interested in similar projects.

[![NPM](https://nodei.co/npm/js-file-extractor.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/js-file-extractor/)
# js-file-extractor
Re-structure your data and convert it into a javascript object in a blink!

using this tool you can convert your external string into a javascript object and store it in a text file.

## Installation 
```
npm install js-file-extractor
```
## Usage
consider having a text file that supports this structure inside example.txt:
```
key1: value1
nested Obj:
  key2: value2
  another Nested Obj:
      key3: value3
      key4: value4
```
```js
const extractor = require("js-file-extractor");
extractor.generete("example.txt");
```
with passing the example file as a parameter to the `generate` method, 
example file will be converted into a javascript object and will be stored inside `new-data.txt` in the root folder
```
root/
├── app.js
├── example.txt
├── new-data.txt
```
here is how our file looks after the proccess:
```
data = { 
key1: "value1",
nestedObj:{
  key2: "value2",
  another Nested Obj:{
      key3: "value3",
      key4: "value4"
} 
}  
}
```
## Example
data.txt:
```
Name: John
Family: Doe
Address:
  City: New York
  Country: United States
  Contact:
      Phone: 123456789
      Email: johnDoe@example.com
```
```js
const extractor = require("js-file-extractor");
const data = extractor.generete("data.txt");
// log the object on the console:
console.log(data);
```
![console log](https://user-images.githubusercontent.com/61851332/113202650-3c4bc580-9280-11eb-8671-a8f50d109d64.png)

