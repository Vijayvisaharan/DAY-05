
  //// For Loop
  const detail = 
    [{
    "firstName": "vijay",
    "lastName": "s",
    "email": "vijayvisaharan@gmail.com",
    "phone": "9944393086",
    "address": "namakkal",
     "githubProfile": "https://github.com/Vijayvisaharan"
  }
]
   for(let i = 0; i < detail.length; i++){
    console.log(detail[i]);
}

////for in

for (var i = 0; i < detail.length; i++) {
    var obj = detail[i];
    for (var key in obj) {
        console.log(`
            Key: ${key}
            Value: ${obj[key]}
            `);
        }
    };
///for Each
const objectkeys = Object.keys(detail);
console.log(objectkeys);
for(let i = 0; i < objectkeys.length; i++){
   console.log(objectkeys[i]);
} 
const objectvalues = Object.values(detail);
console.log(objectvalues);
for(let i = 0; i < objectvalues.length; i++){
   console.log(objectvalues[i]);
} 
objectkeys.forEach((value) => {
 console.log(`
       key : ${value}
       value : ${detail[value]}
 `)
}) 
////for of

for (key of objectkeys) {
    console.log(`
     Key: ${key}
     Value: ${detail[key]}
     `);
  }
    // Resume Data in JSON format
    const resumedata = {
        "personalInformation": {
          "firstName": "vijay",
          "lastName": "s",
          "email": "vijayvisaharan@gmail.com",
          "phone": "9944393086",
          "address": "namakkal",
           "githubProfile": "https://github.com/Vijayvisaharan"
        },
        "education": [
          {
            "degree": "Bachelor of engineering",
            "department":"mechanical",
            "Passed year": "2013-2017"
          },
          {
            "school": "sri maha bharathi High School",
            "Passed year": "2011-2013"
          }
        ],
        "skills": [
          
          "JavaScript",
          
          "Responsive Web Design",
        ],
        "languages": ["English", "Tamil"],
        "interests": [
            {
              "name": ["cricket,vollyball,batminton,chess,kabbadi"],
              "keywords": [
                "all rounder in cricket and also hard hitter and decent speed bowler"
              ]
            }
          ]
        } 
      
    
      console.log(resumedata);

   