console.log("Args file");
console.log(process.argv);
/*
Args file
[
  '/usr/local/bin/node', -> Path where node is being installed
  '/Users/madhurkohli/Desktop/WebDevelopment/Html_Css_Js/Node_Intro/Args.js' ->path which is being run by node

]
first two array string will depend on system to system, next strings in the array will be termed as arguments
for example:
madhurkohli@Madhurs-MacBook-Pro Node_Intro % node Args.js cat dog chicken
Args file
[
  '/usr/local/bin/node',
  '/Users/madhurkohli/Desktop/WebDevelopment/Html_Css_Js/Node_Intro/Args.js',
  'cat',    -
  'dog',     | -> arguments
  'chicken' -
]
*/