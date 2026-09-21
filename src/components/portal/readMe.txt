Portal: Protal is a feature that allow you to rendrs a child component into DOM node that exist outside the hierarchy of the parent component. This can be useful for scenarios like modals, tooltip, or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM.

it is a way to render a component's HTML outside its normal parent DOM element while keeping it part of the same React application.

const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Modal />
        </div>
    );
};

Why use Portal?

Portals are especially useful for:

🪟 Modals
🔔 Notifications
📋 Dropdowns
💬 Tooltips
🛑 Dialog boxes

For example:

React Tree
   │
   └── App
       │
       └── Modal
             │
             └── Portal ──────→ #modal-root