# React Autosave by Example

Auto save runs every time a user clicks something (e.g. button, option, select) or leaves an input field.

![Sep-05-2020 11-08-47](https://user-images.githubusercontent.com/2479967/92301951-44e95100-ef68-11ea-9b28-bc4211b9063d.gif)

If a user navigates away or hides the component, the form is autosaved if all required fields are filled.

![Sep-05-2020 11-19-44](https://user-images.githubusercontent.com/2479967/92302116-c8577200-ef69-11ea-96a2-3309ccfba63b.gif)

If a required field isn't filled, there will be an intercepting dialog which asks you to discard the changes (Discard) or to continue with the form (Cancel).

![Sep-05-2020 11-10-48](https://user-images.githubusercontent.com/2479967/92301977-824dde80-ef68-11ea-926f-f9af751be778.gif)

Caveat: The Dialog is triggered whenever a user clicks outside of the form and not all required fields are filled to be saved. An alternative implementation would be to call this dialog only when a user navigates away (e.g. click "Home" link) or removes the component (e.g. click "User ID: 2" option). The former could be easily integrated once for all navigation in React Router. However, the latter would need to create intercepting higher-order functions which are applied to all click events which would lead to removing the component.

## Installation

- `git clone git@github.com:rwieruch/react-autosave-example.git`
- cd react-autosave-example
- npm install
- npm start
- visit `http://localhost:3000`
