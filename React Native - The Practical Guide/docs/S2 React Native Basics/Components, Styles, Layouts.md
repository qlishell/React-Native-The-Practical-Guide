# Components, Styles, Layouts

Question 1: What's one of the main roles of the built-in <View> component?

Structure/ Group other child components.

> That's correct! The <View> allows you to group other components together, structure them (i.e. provide a layout) and (optionally) add some container styling.

Question 2: Can you use HTML elements (e.g. <div>, <p>, <input>) in React Native apps?

No, React Native doesn't recognize these components - it doesn't know how to compile them to native views.

Question 3: What's the relation between React Native component styling and CSS (Cascading Style Sheets) for the Web?

React Native styling is inspired by CSS (comparable/ similar property names and values)

> That's correct. Whilst the exact property names and values you use don't always match the CSS alternative, the goal of RN is to get as close as possible.

Question 4: Which of the following example style rules does NOT work in React Native?

'background-color': '#ccc'

> That's correct. This won't work in React Native because 'background-color' is not a supported property name (even though it's technically valid JS code).

Question 5: Why would you use const styles = StyleSheet.create({}) instead of a regular JavaScript object (const styles = {})?

Using a StyleSheet adds validation and potential performance improvements.

Question 6:
What's "Flexbox"?

A concept/ set of styling properties that allows you to structure content (i.e. create layouts).

Question 7: What's the default styling/ layout behavior of a <View> component?

It uses Flexbox to organize its child components.

Question 8: If a <View> has flexDirection: 'column' (which is the default) - what does alignItems: 'flex-end' do in that case?

It positions all child elements at the end of the column - on the horizontal axis.

> That is correct! alignItems positions elements along the cross axis. For flexDirection: 'column', the cross axis is the horizontal axis.
