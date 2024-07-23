### 8. Quản lý Forms

#### TextInput và các thành phần nhập liệu khác

Trong React Native, `TextInput` là thành phần chính để người dùng nhập liệu. Bạn cũng có thể sử dụng các thành phần khác như `Picker`, `Switch`, và `Slider` để tạo các form phức tạp hơn.

Ví dụ đơn giản sử dụng `TextInput`:

```jsx
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const SimpleForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log("Name:", name);
        console.log("Email:", email);
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Name:</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                style={{ borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Text>Email:</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                style={{ borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default SimpleForm;
```

#### Form validation với Formik và Yup

**Formik** là một thư viện giúp dễ dàng quản lý và xác thực các form trong React Native. **Yup** là một thư viện xác thực schema cho JavaScript objects, thường được sử dụng với Formik để xác thực form.

Cài đặt Formik và Yup:

```sh
npm install formik yup
```

Sử dụng Formik và Yup để quản lý và xác thực form:

```jsx
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
    email: Yup.string().required("Email is required").email("Invalid email"),
});

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ name: "", email: "" }}
            validationSchema={validationSchema}
            onSubmit={values => {
                console.log("Form values", values);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text>Name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        value={values.name}
                        placeholder="Enter your name"
                    />
                    {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

                    <Text>Email:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />
                    {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
    error: {
        color: "red",
    },
});

export default FormikForm;
```

### Tổng kết

1. **TextInput và các thành phần nhập liệu khác**:

    - Sử dụng `TextInput` cho các trường nhập liệu cơ bản.
    - Sử dụng các thành phần khác như `Picker`, `Switch`, và `Slider` để tạo các form phức tạp hơn.

2. **Form validation với Formik và Yup**:
    - Sử dụng Formik để quản lý trạng thái và hành vi của form.
    - Sử dụng Yup để xác thực dữ liệu nhập liệu trong form, đảm bảo dữ liệu hợp lệ trước khi xử lý.
