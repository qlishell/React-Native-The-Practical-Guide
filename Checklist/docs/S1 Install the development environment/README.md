### 1. Cài đặt môi trường phát triển

#### Cài đặt Node.js và npm

Node.js và npm là các công cụ cần thiết để phát triển React Native. Bạn có thể cài đặt chúng như sau:

1. Truy cập trang web [Node.js](https://nodejs.org/) và tải phiên bản LTS (Long Term Support) mới nhất.
2. Chạy tệp cài đặt và làm theo các bước hướng dẫn trên màn hình.
3. Kiểm tra việc cài đặt bằng cách mở terminal và chạy các lệnh sau:

    ```sh
    node -v
    npm -v
    ```

    Nếu bạn thấy phiên bản Node.js và npm hiện lên, việc cài đặt đã thành công.

#### Cài đặt Expo CLI hoặc React Native CLI

**Expo CLI**:
Expo là công cụ giúp dễ dàng phát triển ứng dụng React Native mà không cần cài đặt quá nhiều cấu hình.

1. Mở terminal và chạy lệnh sau để cài đặt Expo CLI:

    ```sh
    npm install -g expo-cli
    ```

2. Kiểm tra việc cài đặt bằng cách chạy lệnh:

    ```sh
    expo --version
    ```

**React Native CLI**:
Nếu bạn muốn có nhiều kiểm soát hơn và khả năng tùy chỉnh, bạn có thể dùng React Native CLI.

1. Mở terminal và chạy lệnh sau để cài đặt React Native CLI:

    ```sh
    npm install -g react-native-cli
    ```

2. Kiểm tra việc cài đặt bằng cách chạy lệnh:

    ```sh
    react-native --version
    ```

#### Thiết lập Android Studio và Xcode

**Android Studio**:

1. Tải và cài đặt [Android Studio](https://developer.android.com/studio).
2. Mở Android Studio, đi đến `Preferences` -> `Appearance & Behavior` -> `System Settings` -> `Android SDK`.
3. Chọn phiên bản Android SDK và cài đặt.
4. Đảm bảo cài đặt các mục sau:
    - SDK Platforms: Android API 30 (hoặc phiên bản mới hơn)
    - SDK Tools: Android SDK Build-Tools, Android Emulator, Android SDK Platform-Tools

**Xcode (nếu phát triển cho iOS)**:

1. Tải và cài đặt [Xcode](https://developer.apple.com/xcode/) từ Mac App Store.
2. Mở Xcode và đi đến `Preferences` -> `Locations`, đặt `Command Line Tools` thành phiên bản Xcode hiện tại.
