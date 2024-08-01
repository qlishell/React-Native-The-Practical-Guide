# React Native Project Structure: A Best Practices Guide

![image](https://assets-global.website-files.com/62cee6c92b9c3a6e6cab65e3/62e8465d4a23eff07d9ba23b_62504998a2838547106eca9d_Screen-Shot-2022-04-01-at-21.37.43-e1648818456813.png)

- [React Native Learn once, write anywhere](https://reactnative.dev/)

- [7 Most Popular & Best React Native Apps in 2023](https://www.linkedin.com/pulse/7-most-popular-best-react-native-apps-2023-openxcell/)

## Initial Structure

First, we'll create an Expo-based project. So, inside a directory of your choice, run the following command:

```bash
expo init rn-project-structure
```

## Break Down the Project

Now let's talk about some common project structures you can implement no matter what technology you're using.

```base
yarn create expo-app --template blank AwesomeProject

cd AwesomeProject
yarn expo start
```

A command-line tool to create a new Expo and React Native project.
[create-expo-app](https://docs.expo.dev/more/create-expo/)

You can always break your front-end app into three layers:

1. **UI or Presentation Layer**. Represents all the components or UI elements the user interacts with like buttons, popups, text, etc.
2. **Logic Layer**. Responsible for maintaining your core business logic. It's also responsible for all the events and managing the interactions with the presentation layer.
3. **API Layer**. Responsible for all the back-end interactions. This is where your app makes API calls to a database server or an external web service.

![image](https://assets-global.website-files.com/62cee6c92b9c3a6e6cab65e3/62e8465d4a23ef84e69ba239_625049da7f721f86e7afe02a_Screen-Shot-2022-04-01-at-21.37.43-e1648818456813.png)
