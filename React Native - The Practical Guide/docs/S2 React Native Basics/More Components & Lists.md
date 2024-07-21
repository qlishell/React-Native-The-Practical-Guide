# More Components & Lists

Question 1: How do you output a list (array) of content in React apps?

You use map() to map (= transform) the array of data into an array of components.

Question 2: Why might you need a <ScrollView> instead of a normal <View>?

Unlike browser, mobile apps don't give you automatic scrolling. <ScrollView> adds it.

> That's correct. By default, the views you're building aren't scrollable. ScrollView changes that.

Question 3: What's the core difference between <FlatList> and <ScrollView>?

FlatList optimizes scrolling by only rendering what's required.
