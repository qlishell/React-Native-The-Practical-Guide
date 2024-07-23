### 12. Triển khai ứng dụng

#### Build và chạy ứng dụng trên thiết bị thật

**Chạy ứng dụng trên thiết bị Android**:

1. **Kết nối thiết bị**:

    - Kết nối thiết bị Android với máy tính qua cáp USB.
    - Bật chế độ Developer Options và USB Debugging trên thiết bị.

2. **Chạy ứng dụng**:

    ```sh
    npx react-native run-android
    ```

**Chạy ứng dụng trên thiết bị iOS**:

1. **Kết nối thiết bị**:

    - Kết nối thiết bị iOS với máy tính qua cáp USB.
    - Mở Xcode, chọn thiết bị mục tiêu.

2. **Chạy ứng dụng**:

    ```sh
    npx react-native run-ios --device
    ```

#### Triển khai ứng dụng Android lên Google Play Store

1. **Tạo file signing key**:

    ```sh
    keytool -genkey -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
    ```

2. **Thiết lập Gradle cho signing**:
   Thêm thông tin signing vào `android/app/build.gradle`:

    ```gradle
    android {
      ...
      signingConfigs {
        release {
          if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
          }
        }
      }
      buildTypes {
        release {
          ...
          signingConfig signingConfigs.release
        }
      }
    }
    ```

3. **Thiết lập biến môi trường**:
   Thêm biến môi trường vào `~/.gradle/gradle.properties`:

    ```properties
    MYAPP_UPLOAD_STORE_FILE=my-release-key.keystore
    MYAPP_UPLOAD_STORE_PASSWORD=your-store-password
    MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
    MYAPP_UPLOAD_KEY_PASSWORD=your-key-password
    ```

4. **Build file APK**:

    ```sh
    cd android
    ./gradlew assembleRelease
    ```

5. **Đăng tải lên Google Play Store**:
    - Đăng nhập vào Google Play Console.
    - Tạo một ứng dụng mới và làm theo các bước để đăng tải file APK.

#### Triển khai ứng dụng iOS lên Apple App Store

1. **Cài đặt Xcode và Apple Developer Account**:

    - Đảm bảo bạn có tài khoản Apple Developer và cài đặt Xcode phiên bản mới nhất.

2. **Thiết lập thông tin dự án trong Xcode**:

    - Mở dự án trong Xcode.
    - Chọn mục tiêu dự án, điền thông tin Bundle Identifier, Team, và các thông tin khác.

3. **Archive và xuất bản ứng dụng**:

    - Chọn mục tiêu dự án.
    - Chuyển chế độ build sang `Any iOS Device`.
    - Chọn `Product` -> `Archive`.
    - Sau khi build xong, chọn `Distribute App`.

4. **Đăng tải lên App Store Connect**:
    - Đăng nhập vào App Store Connect.
    - Tạo một ứng dụng mới và làm theo các bước để đăng tải bản build của bạn từ Xcode.

### Tổng kết

1. **Build và chạy ứng dụng trên thiết bị thật**:

    - Chạy ứng dụng trên thiết bị Android và iOS bằng cách sử dụng các lệnh `npx react-native run-android` và `npx react-native run-ios`.

2. **Triển khai ứng dụng Android lên Google Play Store**:

    - Tạo file signing key.
    - Thiết lập Gradle cho signing.
    - Build file APK và đăng tải lên Google Play Store.

3. **Triển khai ứng dụng iOS lên Apple App Store**:
    - Thiết lập thông tin dự án trong Xcode.
    - Archive và xuất bản ứng dụng thông qua Xcode.
    - Đăng tải ứng dụng lên App Store Connect.
