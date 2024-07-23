### 11. Testing và Debugging

#### Debugging trong React Native

Có nhiều công cụ và phương pháp để debug ứng dụng React Native, bao gồm:

1. **React Native Debugger**:

    - React Native Debugger là một công cụ độc lập kết hợp DevTools của Chrome và Redux DevTools.
    - Cài đặt:

        ```sh
        brew install --cask react-native-debugger
        ```

    - Sử dụng:
        - Mở React Native Debugger.
        - Trong ứng dụng React Native của bạn, mở Developer Menu (Cmd + D trên iOS Simulator, Cmd + M trên Android Emulator), chọn "Debug" và điều chỉnh URL của trình gỡ lỗi thành `localhost:8081/debugger-ui`.

2. **Flipper**:

    - Flipper là một nền tảng mở để debug các ứng dụng Android, iOS và React Native.
    - Cài đặt:

        ```sh
        npm install --save-dev @react-native-community/cli
        npm install --save-dev flipper
        ```

    - Sử dụng:
        - Mở Flipper.
        - Chạy ứng dụng của bạn, Flipper sẽ tự động phát hiện và kết nối với ứng dụng của bạn.

3. **Console Logs**:

    - Sử dụng `console.log`, `console.warn`, `console.error` để ghi log và xem trong trình gỡ lỗi.

4. **Breakpoints**:
    - Sử dụng breakpoints trong VSCode hoặc Chrome DevTools để tạm dừng mã và kiểm tra trạng thái ứng dụng.

#### Unit Testing với Jest

Jest là một framework testing mạnh mẽ được tạo bởi Facebook, phù hợp để test ứng dụng React Native.

1. **Cài đặt Jest**:

    ```sh
    npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
    ```

2. **Cấu hình Jest**:
   Thêm cấu hình Jest vào `package.json`:

    ```json
    "jest": {
      "preset": "react-native",
      "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"],
      "transformIgnorePatterns": [
        "node_modules/(?!(@react-native|react-native|@react-navigation|@react-native-firebase)/)"
      ]
    }
    ```

3. **Viết Unit Test**:
   Ví dụ đơn giản về unit test:

    ```jsx
    import React from "react";
    import { render } from "@testing-library/react-native";
    import App from "../App";

    test("renders correctly", () => {
        const { getByText } = render(<App />);
        expect(getByText("Welcome to React Native!")).toBeTruthy();
    });
    ```

#### Integration Testing

Integration testing kiểm tra các thành phần làm việc cùng nhau. Các công cụ phổ biến cho integration testing trong React Native bao gồm:

1. **React Native Testing Library**:

    - Thư viện này mở rộng từ Testing Library, cung cấp các tiện ích để render và tương tác với các thành phần React Native.

    Ví dụ:

    ```jsx
    import React from "react";
    import { render, fireEvent } from "@testing-library/react-native";
    import MyComponent from "../MyComponent";

    test("button click changes text", () => {
        const { getByText } = render(<MyComponent />);
        fireEvent.press(getByText("Press me"));
        expect(getByText("You pressed me!")).toBeTruthy();
    });
    ```

2. **Detox**:

    - Detox là một framework testing end-to-end (E2E) cho các ứng dụng di động.
    - Cài đặt:

        ```sh
        npm install --save-dev detox
        ```

    - Cấu hình Detox:
      Thêm cấu hình Detox vào `package.json`:

        ```json
        "detox": {
          "configurations": {
            "ios.sim.debug": {
              "binaryPath": "path/to/your.app",
              "build": "xcodebuild -project ios/YourProject.xcodeproj -scheme YourScheme -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
              "type": "ios.simulator",
              "device": {
                "type": "iPhone 11"
              }
            }
          }
        }
        ```

    - Chạy Detox:

        ```sh
        detox build --configuration ios.sim.debug
        detox test --configuration ios.sim.debug
        ```

### Tổng kết

1. **Debugging trong React Native**:

    - Sử dụng các công cụ như React Native Debugger, Flipper và các phương pháp console logging và breakpoints.

2. **Unit Testing với Jest**:

    - Sử dụng Jest và Testing Library để viết unit test cho các thành phần React Native.

3. **Integration Testing**:
    - Sử dụng React Native Testing Library để kiểm tra tích hợp các thành phần.
    - Sử dụng Detox để thực hiện các bài kiểm tra end-to-end.
