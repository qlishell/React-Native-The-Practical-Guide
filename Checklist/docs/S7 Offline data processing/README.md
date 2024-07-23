### 7. Xử lý dữ liệu ngoại tuyến

#### AsyncStorage

**AsyncStorage** là một thư viện lưu trữ dữ liệu key-value đơn giản và không đồng bộ dành cho các ứng dụng React Native. Nó được sử dụng để lưu trữ dữ liệu đơn giản như token xác thực, cài đặt ứng dụng, hoặc thông tin người dùng.

Cài đặt AsyncStorage:

```sh
npm install @react-native-async-storage/async-storage
```

Sử dụng AsyncStorage:

```jsx
import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageExample = () => {
    const [input, setInput] = useState("");
    const [storedData, setStoredData] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem("myData");
                if (value !== null) {
                    setStoredData(value);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, []);

    const storeData = async () => {
        try {
            await AsyncStorage.setItem("myData", input);
            setStoredData(input);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Enter some data"
                value={input}
                onChangeText={setInput}
                style={{ borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
            />
            <Button title="Save Data" onPress={storeData} />
            <Text>Stored Data: {storedData}</Text>
        </View>
    );
};

export default AsyncStorageExample;
```

#### Realm

**Realm** là một cơ sở dữ liệu di động hiệu suất cao được thiết kế để dễ sử dụng và có thể được sử dụng như một lựa chọn thay thế cho SQLite. Realm cung cấp một API đơn giản và thân thiện với lập trình viên.

Cài đặt Realm:

```sh
npm install realm
```

Sử dụng Realm:

```jsx
import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Realm from "realm";

const TaskSchema = {
    name: "Task",
    properties: {
        id: "int",
        name: "string",
    },
    primaryKey: "id",
};

const realm = new Realm({ schema: [TaskSchema] });

const RealmExample = () => {
    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = () => {
            const tasks = realm.objects("Task");
            setTasks(tasks);
        };

        getTasks();
    }, []);

    const addTask = () => {
        realm.write(() => {
            realm.create("Task", {
                id: tasks.length + 1,
                name: taskName,
            });
        });
        setTasks(realm.objects("Task"));
        setTaskName("");
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Enter task name"
                value={taskName}
                onChangeText={setTaskName}
                style={{ borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
            />
            <Button title="Add Task" onPress={addTask} />
            {tasks.map(task => (
                <Text key={task.id}>{task.name}</Text>
            ))}
        </View>
    );
};

export default RealmExample;
```

#### SQLite

**SQLite** là một thư viện cơ sở dữ liệu SQL nhẹ được sử dụng rộng rãi cho các ứng dụng di động. React Native cung cấp nhiều gói để làm việc với SQLite, trong đó `react-native-sqlite-storage` là một gói phổ biến.

Cài đặt SQLite:

```sh
npm install react-native-sqlite-storage
```

Sử dụng SQLite:

```jsx
import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);

const SQLiteExample = () => {
    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState([]);
    const [db, setDb] = useState(null);

    useEffect(() => {
        const initDb = async () => {
            const database = await SQLite.openDatabase({ name: "taskdb", location: "default" });
            setDb(database);
            await database.executeSql(
                "CREATE TABLE IF NOT EXISTS Tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",
            );
            const results = await database.executeSql("SELECT * FROM Tasks");
            setTasks(results[0].rows.raw());
        };

        initDb();

        return () => {
            if (db) {
                db.close();
            }
        };
    }, []);

    const addTask = async () => {
        if (db) {
            await db.executeSql("INSERT INTO Tasks (name) VALUES (?)", [taskName]);
            const results = await db.executeSql("SELECT * FROM Tasks");
            setTasks(results[0].rows.raw());
            setTaskName("");
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Enter task name"
                value={taskName}
                onChangeText={setTaskName}
                style={{ borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
            />
            <Button title="Add Task" onPress={addTask} />
            {tasks.map(task => (
                <Text key={task.id}>{task.name}</Text>
            ))}
        </View>
    );
};

export default SQLiteExample;
```

### Tổng kết

-   **AsyncStorage**: Phù hợp cho lưu trữ dữ liệu key-value đơn giản.
-   **Realm**: Cơ sở dữ liệu di động hiệu suất cao, dễ sử dụng.
-   **SQLite**: Cơ sở dữ liệu SQL nhẹ, phổ biến cho các ứng dụng di động.
