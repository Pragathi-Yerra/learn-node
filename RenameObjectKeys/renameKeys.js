//npm i object-rename-keys
import objectRenameKeys from "object-rename-keys";
let databaseObject = {
  "car%_": "cardb",
  "bike%": "bikedb",
  "abc%": "abc" 
};
let originalObject = [
  {
    "car%_": "BMW",
    "bike%": "pulsar",
    "sony": "good",
  },
  {
    "car%_": "audi",
    "bike%": "herohonda",
    "sony": "beautiful",
  },
];
originalObject.map((key) => {
  var result = objectRenameKeys(key, databaseObject);
  console.log(result);
});
let newObject = {
  0: "0",
  new: "key",
  a: "a",
};
let keys = Object.keys(newObject);
console.log("keys are", keys);