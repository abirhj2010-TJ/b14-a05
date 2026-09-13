# Dev Stack
The Name of this project is Dev Stack.
It is a modern web application. It helps developers explore different technologies and build their development stack. Users can browse technologies by category and name and choose or add to their stack.

# Technology I Use

1. React
2. TypeScript
3. Tailwind CSS
4. Node js
5. Figma
6. Git

# Features

1. Explore Technologies : Users can browse different technologies of categories like frontend, backend, database, and tools. Also they can know a little description about the technology they choose.
2. Add to Your Stack : Users can add technologies to build their ideal Your Stack. The chosen technologies can also be removed individually and all at once by a single button.
3. Responsive Design : Fully responsive for mobile device, tablet and laptop/desktop for smooth and excellent user experience.



# React Questions with Answers

1. What is JSX, and why is it used in React?

Answer: JSX means javascript XML. It is a syntax extension that allows us write HTML like code inside javaScript. It is used in React because it makes the codes simpler and easier to write, read and understand. Also it allows javascript expressions to write using {}.

2. What is the difference between props and state?

Answer: Props are the data that are passed from the parent component to the child component. They are read-only data.

State is created and managed inside a component. It can be modified using a setter function.


3. What does the useState hook do, and where did you use it in this project?

Answer: useState hook allows a component store and update data.

I used useState hook in this project in the "Technologies" component to store the technologies that are added to the "Your Stack" component.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

Answer: useEffect runs code after a component renders. It is used for side effects such as fetching data from an API, updating the browser title, starting timers etc.

I did not use useEffect hook in this project. But it can be used to fetch json data from an API or public file in the project.

1. Why does every item in a .map() list need a unique key prop?

Answer: React uses the key to identify each item in a list. A unique key helps React understand which item has changed or added or removed and update the UI accordingly. Without an unique key, React may update the wrong element.

6. What is conditional rendering? Show one place you used it.

Answer: Conditional rendering means showing different element or component or UI based on conditions.
I used it in several places in this project. One place is in the button of the "TechnologyCard" component. It is shown below:

```tsx
<button
        onClick={handleAddToStack}
        disabled={isStacked}
        className={`btn btn-block rounded-lg ${
          isStacked
            ? "bg-brand-middle/10 text-brand-middle"
            : "bg-black text-white"
        }`}
      >
        {isStacked ? (
          <>
            <TiTick />
            Added to Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
```
here, based on the condition, different classNames will be added to the button element. Also, the text of the button element will change based on the condition. The condition here is the "isStacked" being true or false.


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Answer: I can pass data from a parent component to a child component through props.A child can send something back to the parent by using a function passed through the props.

In this project, I sent "setTechnologyStack" function as a prop from the parent "Technologies" component to the child component "TechnologiesList" and then from this component to another child component "TechnologyCard". The child component "TechnologyCard" then call this function "setTechnologyStack" based on users activity and update the 'technologyStack" which is located in the parent component "Technologies".

