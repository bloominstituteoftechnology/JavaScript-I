# JavaScript - I

- The point of these assignments is to take your knowledge of JavaScript and start putting into practice the principles learned throughout JavaScript I.

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.

## Assignment Description

- Complete all the exercises as described inside each assignment file.
- Use `console.log()` statements to check to see if your code does what it is supposed to do.
- To test your `console.log()` statements open up the index.html file found in the assignments folder and use the developer tools to view the console.

**Note:**You could also run `node /assignments/<fileName>` and see what prints in your terminal.

- Once you finish the exercises in each file, commit your code, and push it to your fork.

### Objects

To better understand objects, you really just need to write more of them. The [objects.js](assignments/objects.js) file contains several challenges centered around a theme of interns starting at a new job. The Human Resources team needs information about the new hires. Use your new found object skills to answer vital questions for HR.

- Read the instructions found within the file carefully to finish the challenges
- Don't work on stretch until you have completed all assignments

### Arrays

The [arrays.js](assignments/arrays.js) assignment takes us through a large data set of used cars. You have been asked to help a used car business with some customer requests based on their inventory. Use for loops and arrays to solve their problems.

- Utilize the the array `inventory` to complete your challenges
- Use any array method you see fit to solve the problem
- Don't work on stretch until you have completed all assignments

### Arrow Function Syntax

- [ ] Arrow Function Syntax - [Check out this awesome guide for ES6 arrow syntax](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26). 

/*Notes*/

var timesTwo = params => params * 2
timesTwo(4);  // 8

&lt; stands for the less-than sign ( < )
&gt; stands for the greater-than sign ( > )
&le; stands for the less-than or equals sign ( ≤ )
&ge; stands for the greater-than or equals sign ( ≥ )

NO PARAMETERS
    If there are no parameters, you can place an empty parentheses before =&gt;. 
    () => 42

    In fact, you don’t even need the parentheses!
    _ => 42

SINGLE PARAMETER
    With these functions, parentheses are optional:
    x => 42  || (x) => 42

MULTIPLE PARAMETERS
    Parentheses are required for these functions:
    (x, y) => 42

STATEMENTS (as opposed to expressions)
In its most basic form, a FUNCTION EXPRESSION produces a value, while a FUNCTION STATEMENT performs an action.
    With the arrow function, it is important to remember that statements NEED TO HAVE CURLY BRACES. Once the curly braces are present, you ALWAYS NEED TO WRITE RETURN as well.

    Here is an example of the arrow function used with an if statement:
            var feedTheCat = (cat) => {
                if (cat === 'hungry') {
                    return 'Feed the cat';
                } else {
                    return 'Do not feed the cat';
                }
                }

BLOCK BODY
    If your function is in a BLOCK, you must also USE THE EXPLICIT RETURN STATEMENT:
        var addValues = (x, y) => {
            return x + y
            }
    
OBJECT LITERALS
    If you are returning an OBJECT LITERAL, it needs to be WRAPPED IN PARENTHESES. This forces the interpreter to evaluate what is inside the parentheses, and the object literal is returned.
            x =>({ y: x })


SYNTACTICALLY ANONYMOUS
    It is important to note that ARROW FUNCTIONS are anonymous, which means that they are NOT NAMED.

        1. HARDER TO DEBUG
        When you get an error, you will NOT BE ABLE TO TRACE THE NAME of the function OR THE EXACT LINE NUMBER where it occurred.

        2. NO SELF-REFERENCING
        If your function needs to have a self-reference at any point (e.g. RECURSION, EVENT HANDLER that needs to unbind), IT WILL NOT WORK.

    MAIN BENEFIT: NO BINDING of 'THIS'
        In CLASSIC FUNCTION EXPRESSIONS, the this keyword is BOUND TO DIFFERENT VALUES BASED ON THE CONTEXT in which it is called. With ARROW FUNCTIONS however, THIS IS LEXICALLY BOUND. It means that it USES THIS FROM THE CODE THAT CONTAINS THE ARROW FUNCTION.

        For example, look at the setTimeout function below:

                // ES5
                var obj = {
                id: 42,
                counter: function counter() {
                    setTimeout(function() {
                    console.log(this.id);
                    }.bind(this), 1000);
                }
                };
            In the ES5 example, .bind(this) is required to help pass the this context into the function. Otherwise, by default this would be undefined.

                // ES6
                var obj = {
                id: 42,
                counter: function counter() {
                    setTimeout(() => {
                    console.log(this.id);
                    }, 1000);
                }
                };
            ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.

WHEN YOU SHOULD NOT USE ARROW FUNCTIONS
    After learning a little more about arrow functions, I hope you understand that they do not replace regular functions.

    Here are some instances where you probably wouldn’t want to use them:
    
        1.OBJECT METHODS
            When you call cat.jumps, the number of lives does not decrease. It is because this is not bound to anything,and will inherit the value of this from its parent scope.

                var cat = {
                lives: 9,
                jumps: () => {
                    this.lives--;
                }
                } // -- is the opposite of ++
                
        2. CALLBACK FUNCTIONS WITH DYNAMIC CONTEXT
            If you need your context to be dynamic, arrow functions are not the right choice. Take a look at this EVENT HANDLER BELOW:

                var button = document.getElementById('press');
                button.addEventListener('click', () => {
                this.classList.toggle('on');
                });
            If we click the button, we would get a TypeError. It is because this is not bound to the button, but instead bound to its parent scope.

        3. WHEN it makes your CODE LESS READABLE

            It is worth taking into consideration the variety of syntax we covered earlier. With regular functions, people know what to expect. With arrow functions, it may be hard to decipher what you are looking at straightaway.

WHEN YOU SHOULD USE THEM

        ARROW FUNCTIONS shine BEST WITH ANYTHING THAT REQUIRES THIS TO BE BOUND TO THE CONTEXT, and NOT THE FUNCTION, ITSELF.

        Despite the fact that they are anonymous, I also like USING THEM WITH METHODS SUCH AS MAP AND REDUCE, because I think it makes my code more readable. To me, the pros outweigh the cons.

        Thanks for reading my article, and share if you liked it! Check out my other articles like How I built my Pomodoro Clock app, and the lessons I learned along the way, and Let’s demystify JavaScript’s ‘new’ keyword.





You will see more and more arrow functions as you progress deeper into JavaScript. Use the [function-conversion.js](assignments/function-conversion.js) file as a helper challenge to showcase some of the differences between ES5 and ES6 syntax.

### Stretch

- Move on to tomorrow's content and start studying callbacks, write a few of your own to get the hang of it.
- Look at array methods like .map(), .reduce(), .filter(). use them on the data in the arrays assignment to accomplish the same things you did with the ES5 for loop.
