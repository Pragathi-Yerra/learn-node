// const keyify = (obj, prefix = '') => 
//   Object.keys(obj).reduce((res, el) => {
//     if( Array.isArray(obj[el]) ) {
//         console.log("res in if",res)
//       return res;
//     } else if( typeof obj[el] === 'object' && obj[el] !== null ) {
//         console.log("res in",res)
//       return [...res, ...keyify(obj[el], prefix + el + '.')];
//     }
//     return [...res, prefix + el];
//   }, []);

// const input = {
//    "check_id":12345,
//    "check_name":"Name of HTTP check",
//    "check_type":"HTTP",
//    "tags":[
//      "example_tag"
//    ],
//    "check_params":{
//       "basic_auth":false,
//       "params":[
//         "size"
//       ],
//       "encryption": {
//         "enabled": true,
//         "testNull": null,
//       }
//    }
// };

// const output = keyify(input);

// console.log("output is",output);

// const deepKeys = (t, pre = []) =>
//   Array.isArray(t)
//     ? []
// : Object(t) === t
//    ? Object
//       .entries(t)
//       .flatMap(([k, v]) => deepKeys(v, [...pre, k]))
// : pre.join(".")

// const input =
//   {check_id:12345,check_name:"Name of HTTP check",check_type:"HTTP",tags:["example_tag"],check_params:{basic_auth:false,params:["size"],encryption:{enabled:true,testNull:null,}}}
 
// console.log(deepKeys(input))
