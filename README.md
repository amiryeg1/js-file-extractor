> this project is a part of [nodejs-lessons](https://github.com/amiryeg1/nodejs-lessons) repository. feel free to visit it if you are interested in similar projects.

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
![console.log]()

