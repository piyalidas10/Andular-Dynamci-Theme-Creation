# Theme

Considering the directory scenario you mentioned in your OP, you can add your library via local path, as mentioned in the NPM docs: Local Paths:

- Root
|
 -- Project One 
|
 -- Project Two
|
 -- Library usued across both projects
For example in the package.json of Project One, you can add the library as dependency:

"dependencies" : {
  "my-shared-library" : "file:../Library usued across both projects",
}