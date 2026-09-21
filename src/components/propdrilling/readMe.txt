Prop Drilling in React

Prop drilling means passing data from a parent component to a deeply nested child component through intermediate components, even when those intermediate components don't actually need the data.

App
 ↓
Parent
 ↓
Child
 ↓
GrandChild

And App has a username:

const App = () => {
    const username = "Birendra";

    return <Parent username={username} />;
};

Parent doesn't need username, but it has to pass it to Child:

const Parent = ({ username }) => {
    return <Child username={username} />;
};

Child doesn't need it either, but it passes it to GrandChild:

const Child = ({ username }) => {
    return <GrandChild username={username} />;
};

Finally, GrandChild uses it:

const GrandChild = ({ username }) => {
    return <h1>Hello {username}</h1>;
};


App
 │
 │ username
 ↓
Parent
 │
 │ username
 ↓
Child
 │
 │ username
 ↓
GrandChild
 │
 ↓
Uses username


Why is it a problem?

Imagine your application becomes:

<App user={user} />
<A user={user} />
<B user={user} />
<C user={user} />
<D user={user} />
<E user={user} />
<F user={user} />

The intermediate components are just passing the prop along.

This can make large applications harder to maintain.


How do we avoid Prop Drilling?

One common solution is Context API.

Instead of:

App
 ↓ props
A
 ↓ props
B
 ↓ props
C
 ↓ props
D

you can use:

        Context
       ↙   ↓   ↘
     App   B    D
              ↓
              Data

Parent → Child → GrandChild

Parent → Child → GrandChild
          ↑
    Child doesn't need the data


        Context
       ↙     ↘
   Parent   GrandChild
              ↓
             data

So, prop drilling isn't an error. It's simply a situation where props have to travel through multiple components unnecessarily. For small component trees, normal props are often perfectly fine; Context becomes useful when the same data needs to be accessed by many components at different levels.