# Welcome to TeamKnowlogy Test!

In this test is needed to develop a project that detects if a person has genetic differences based on their DNA sequence. It is necessary to create a program with a method/function with the following signature (in one of the following languages: Java / Golang / C-C ++ / Javascript (node) / Python / Ruby):

**boolean hasMutation (String [] dna); // Java Example**

It must receive as parameter an array of Strings that represent each row of a table **(NxN)** with the DNA sequence. The letters of the Strings can only be: **(A, T, C, G)**, which represents each nitrogenous DNA base.

You will know if there is a mutation if more than one sequence of four equal letters is found, obliquely, horizontally or vertically.

**Without mutation:**
```
A T G C G A
C A G T G C
T T A T T T
A G A C G G
G C G T C A
T C A C T G
```
**With mutation:**
```
A T G C G A
C A G T G C
T T A T G T
A G A A G G
C C C C T A
T C A C T G
```

# Project Documentation

[Prepare your environment for Node.js setup][setup].

First of all you must install all the dependencies of the project a.k.a. `Node Modules` . So execute the next command

```sh
npm install
``` 
After installing dependencies you must configure your environment variables,  it's only one but very important because we are using it in database connection. 
Visual Studio Code supports variable substitution in [Debugging](https://code.visualstudio.com/docs/editor/debugging) and [Task](https://code.visualstudio.com/docs/editor/tasks) configuration files. Variable substitution is supported inside key and value strings in `launch.json` and `tasks.json` files using **${variableName}** syntax. 

variable name : `db`

You can find more information about it in [VS CODE](https://code.visualstudio.com/docs/editor/variables-reference).

An example of the `db` environment variable  structure you have to set is:
`mongodb://user:password@sub.mlab.com:15370/dbname`


## Running Live
If you want to run live while you do changes on this project you can execute the next command set in the package.json file 

```sh
npm run live
```

## Running your API
```sh
npm start
```
