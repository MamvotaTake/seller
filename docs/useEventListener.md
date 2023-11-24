# `useEventListener`
The useEventListener hook is a custom React hook that allows you to attach an event listener to a specified element.

### `Parameters`
`event:`   A string representing the event type to listen for (e.g., 'keydown')

`callback:` A function that will be called when the specified event is triggered.

`element:` The DOM element to attach the event listener to.

## Usage

```jsx
import React from 'react';
import { useEventListener } from './useEventListener';

const MyComponent = () => {
const onClickOutside = (event) => {
// handle click outside logic
};

const referenceElement = document.getElementById('myElement');

useEventListener('keydown', (event) => {
if (event.key === 'Escape') {
onClickOutside?.(event as Event);
}
}, referenceElement);

return <div id="myElement">My Component</div>;
};

```

