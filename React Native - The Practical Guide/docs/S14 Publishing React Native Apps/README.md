# S14 Publishing React Native Apps

Trong khóa học này, chúng ta đã học cách xây dựng ứng dụng React Native cả với Expo và không có Expo. Bây giờ, chúng ta sẽ chuyển sang giai đoạn phát hành ứng dụng React Native.

Chúng ta sẽ tìm hiểu các bước cần thiết để phát hành ứng dụng, cấu hình ứng dụng cho sản xuất, và các cài đặt quan trọng cần lưu ý. Cụ thể, chúng ta sẽ xem xét cách thêm biểu tượng và thiết lập màn hình chờ (splash screen) cho ứng dụng.

Khóa học cũng sẽ hướng dẫn quá trình xây dựng ứng dụng, cả với ứng dụng Expo-managed (dễ dàng và thuận tiện) và ứng dụng React Native thuần túy (không sử dụng Expo).

From Development to Production

-   **Configuring For Production**
-   **Icons & Splash Screens**
-   **Build Process in Action**

## Publishing Apps: An Overview

Để phát hành ứng dụng React Native, bạn cần đưa chúng lên Google Play Store hoặc Apple App Store. Có hai cách chính để thực hiện điều này: sử dụng Expo hoặc không sử dụng Expo.

-   **Với Expo**: Bạn có thể sử dụng Expo Managed Workflow hoặc Bare Workflow.

    -   **Cấu hình Dự án**: Cần cấu hình dự án với các thiết lập quan trọng, bao gồm thêm biểu tượng ứng dụng.
    -   **Xây dựng Tệp Cài Đặt**: Bạn có thể sử dụng dịch vụ Cloud Build miễn phí của Expo để xây dựng ứng dụng trên máy chủ của Expo, giúp tiết kiệm tài nguyên máy tính cá nhân và hỗ trợ cả hai nền tảng iOS và Android.
    -   **Nộp Ứng Dụng**: Sau khi xây dựng, bạn có thể nộp ứng dụng vào các cửa hàng ứng dụng một cách thủ công hoặc thông qua dịch vụ nộp ứng dụng tự động của Expo.

-   **Không sử dụng Expo**:
    -   **Cấu hình Dự án**: Bạn vẫn cần cấu hình dự án tương tự như với Expo.
    -   **Xây dựng Tệp Cài Đặt**: Phải xây dựng các tệp cài đặt trên máy tính cá nhân. Đối với ứng dụng iOS, cần một thiết bị Mac để thực hiện việc xây dựng vì hạn chế của Apple.
    -   **Nộp Ứng Dụng**: Phải nộp các tệp cài đặt vào cửa hàng ứng dụng một cách thủ công, không có dịch vụ nộp tự động như Expo.

Tóm lại, việc sử dụng Expo sẽ thuận tiện hơn trong quá trình phát hành ứng dụng, nhưng bạn vẫn có thể xây dựng và phát hành ứng dụng mà không cần Expo.

## Configuring For Production

**Key Configuration Items & Consideration**

-   _Permissions_:
    -   Android: Control permissions requested & shown in app store.
    -   iOS: Define permissions request text snippets.
-   _App Name & Identifier_: Set the visible app name, an app version and unique app identifier (ID).
-   _Environment Variables_: Store app-wide variables securely (e.g API keys)
-   _Icons & Splash Screen_: Configure and generate fitting icons and loading screens.

Khi bắt đầu xây dựng ứng dụng để phát hành, việc cấu hình cho môi trường sản xuất là rất quan trọng. Các điểm chính cần lưu ý bao gồm:

-   **Quyền Truy Cập**: Nếu ứng dụng sử dụng các tính năng thiết bị như camera hoặc định vị, bạn cần cấu hình quyền truy cập đúng cách. Điều này phụ thuộc vào hệ điều hành Android hoặc iOS và các gói bạn sử dụng. Đối với ứng dụng không sử dụng Expo, bạn cần chỉnh sửa các tệp như `info.plist` và `AndroidManifest.xml`.

-   **Cấu Hình Ứng Dụng**: Thiết lập tên ứng dụng, mã định danh duy nhất và phiên bản ứng dụng. Những thiết lập này sẽ được sử dụng bởi các cửa hàng ứng dụng khi nộp ứng dụng.

-   **Biến Môi Trường và Bí Mật**: Quản lý các biến môi trường hoặc bí mật của ứng dụng, điều này có thể được hỗ trợ bởi Expo.

-   **Biểu Tượng và Màn Hình Khởi Động**: Cấu hình biểu tượng và màn hình khởi động (splash screen). Expo cung cấp sẵn biểu tượng và màn hình khởi động, nhưng bạn có thể thay đổi chúng theo ý muốn.

Những cấu hình này cần được xem xét và thực hiện đúng trước khi xây dựng ứng dụng để đảm bảo mọi thứ hoạt động mượt mà khi phát hành.

## Configuring App Names & Versions

Trong phần này, chúng ta sẽ tìm hiểu cách cấu hình và xây dựng ứng dụng với Expo để phát hành. Dưới đây là các bước chính:

1. **Dự Án Ví Dụ**: Chúng ta sẽ sử dụng ứng dụng thực phẩm mà chúng ta đã xây dựng trước đó như một ví dụ để cấu hình và phát hành.

2. **Expo Application Services (EAS)**: Đây là dịch vụ của Expo cho phép xây dựng và phát hành ứng dụng từ đám mây, giúp quá trình này trở nên dễ dàng hơn. Bạn có thể tìm hiểu thêm về dịch vụ này trên trang tài liệu chính thức của Expo.

3. **Cấu Hình Ứng Dụng**:

    - **Tệp `app.json`**: Tệp cấu hình chính cho ứng dụng Expo, nơi bạn có thể thiết lập các tùy chọn như tên ứng dụng, phiên bản và các cài đặt cụ thể cho iOS và Android.
    - **Tên và Phiên Bản**: Cấu hình tên ứng dụng mà người dùng sẽ thấy và phiên bản ứng dụng. Phiên bản này có thể là phiên bản hiển thị cho người dùng (ví dụ: 1.0 hoặc 2.0) và phiên bản nội bộ cho các cửa hàng ứng dụng (buildNumber cho iOS và versionCode cho Android).
    - **Cài Đặt iOS và Android**: Thiết lập các cài đặt cụ thể cho từng nền tảng, chẳng hạn như buildNumber cho iOS và versionCode cho Android. Cần chú ý đến định dạng của các giá trị này.

4. **Các Cài Đặt Khác**: Bạn có thể cấu hình thêm các cài đặt khác như khóa chế độ xoay màn hình, thiết lập biểu tượng và màn hình khởi động.

5. **Tài Liệu Chính Thức**: Đọc tài liệu chính thức của Expo để hiểu rõ hơn về các tùy chọn cấu hình và đảm bảo bạn không bỏ sót các cài đặt quan trọng cho ứng dụng của mình.

Việc hiểu và cấu hình đúng các cài đặt này là quan trọng để đảm bảo ứng dụng của bạn hoạt động tốt và sẵn sàng phát hành.

## Building Expo Apps with EAS

Here's a summary of the process for building an app using Expo Application Service (EAS):

1. **Create an Expo Account:** Go to expo.dev to create a free account.
2. **Install EAS CLI:** Use the terminal command `npm install -g eas-cli` to install EAS CLI, adding `sudo` on MacOS/Linux if necessary.
3. **Log In:** Run `eas login` in the terminal to log into your Expo account.
4. **Configure the Project:** Run `eas build:configure` in your Expo-managed React Native project. This command sets up an `EAS.json` file with build settings.
5. **Set Up Build Type:** For Android, modify `EAS.json` to specify `buildType: APK` under the Android settings.
6. **Run the Build Command:** Execute `eas build -p android --profile preview` to start building an APK. This build is installable for testing purposes.
7. **Enter App Details:** Provide an Android application ID and decide whether to generate a new Android key store or use Expo’s managed key store.
8. **Check Build Status:** If the build fails, check the Expo account for details and error messages. Adjust configurations as needed.
9. **Download APK:** After a successful build, download the APK file from Expo to test on emulators or real devices.
10. **Testing and Publishing:** You can test the APK file on an emulator or device. For app store submissions, use the production profile to generate an AAB file.

For iOS builds, follow similar steps which will be covered in the next lecture.

## EAS for iOS (even on Windows Devices)

Here’s a summary of the process for building and distributing an iOS app with Expo:

1. **Setup `eas.json` for iOS:**

    - Add an iOS-specific setting in the `eas.json` file, setting `simulator` to `true` for building a simulator-compatible version.

2. **Start the Build:**

    - Use the command to start the build with the target platform set to iOS.
    - You need to specify an iOS bundle identifier, which should be unique for your app.

3. **Preview Build:**

    - After the build, you get a `.sip` file which, when extracted, contains a `.app` file that can be installed on an iOS simulator. Note that simulator testing requires a Mac.

4. **Production Build:**

    - For production, you need an Apple Developer account ($99/year).
    - Generate necessary certificates and provisioning profiles:
        - Create an iOS distribution certificate and provisioning profile through your Apple Developer account.
        - Store these files in a secure location (e.g., `certs/iOS` folder) and update your `eas.json` to reference them.

5. **Certificate Handling:**

    - Add the distribution certificate to your Mac's keychain and export it as a `.p12` file.
    - Update your `eas.json` file with the path to this certificate and the provisioning profile.

6. **Local Credential Setup:**

    - If you prefer not to let Expo log into your Apple account, set up credentials locally by adding a `credentials.json` file with your settings.
    - Use `credentialSource: local` in `eas.json` to ensure Expo uses your local credentials.

7. **Build and Submit:**
    - Retry the build with the correct settings. If you still encounter issues, adjust your configuration as needed based on the Expo documentation.

By following these steps, you should be able to build and distribute your iOS app either for testing on a simulator or for production release.

## Building for iOS Without Expo

The content explains the process of building and deploying a React Native app, specifically focusing on a non-Expo workflow using React Native CLI:

1. **Building with React Native CLI:**

    - Unlike Expo, which manages configurations and builds in the cloud, React Native CLI requires local setup.
    - For iOS builds, a macOS system is necessary due to Apple's restrictions.

2. **Setup Requirements:**

    - **Apple Developer Account:** Needed for app deployment, particularly for publishing to the Apple App Store.
    - **Xcode Configuration:** Open the iOS project in Xcode to configure app settings, such as identifiers and version numbers. Set up team and signing configurations.

3. **Icon and Launch Screen Setup:**

    - Unlike Expo, which auto-generates icons, you must manually add icons of different sizes in Xcode.
    - Customize the launch screen using the provided assets and tools in Xcode.

4. **Testing and Building:**

    - Test the app on a simulator within Xcode.
    - For production builds, ensure configurations like App Transport Security settings are adjusted (e.g., remove localhost exceptions for production).

5. **Deployment:**

    - **Apple Developer Account:** Set up app IDs and register them in your Apple Developer account.
    - **iTunes Connect:** Create a new app entry, set up details like name and bundle ID, and manage app settings for the App Store.

6. **Troubleshooting:**

    - Address common build errors, such as setting the build target to "generic iOS device" and adjusting build settings in Xcode.

7. **Archiving and Distribution:**
    - Once the app is built and tested, use Xcode to archive it. The archive can then be distributed to the App Store.

This process contrasts with Expo's managed workflow, highlighting the additional steps and configurations required when working directly with React Native CLI.

## Building for Android Without Expo

The content describes the process of building and deploying an Android app using React Native CLI, focusing on key steps and configurations:

1. **Creating a Keystore:**

    - Unlike Expo, where Expo handles keystore creation, you must manually generate a keystore for signing your app.
    - Use a command-line tool to create the keystore and store it securely, as it's essential for signing your app and updates.

2. **Configuring Gradle:**

    - Move the keystore file into the `Android/app` folder of your project.
    - Update the `gradle.properties` file with keystore credentials.
    - Modify the `build.gradle` file to include the signing configuration for release builds.

3. **Building the APK:**

    - Navigate to the `Android` folder and run Gradle commands to build and sign your app for production.
    - The output is an app bundle (APK) located in `app/build/generated/outputs/bundle/`.

4. **Publishing to Google Play Store:**

    - Create a Google Developer account with a one-time fee of $25.
    - Use the Google Play Console to create a new app and upload the app bundle.
    - Configure app details, manage store appearance, and publish the app.

5. **Adding Icons and Splash Screen:**

    - Use Android Studio to open the `Android` folder of your React Native project.
    - Add icons by navigating to `app/src/main/res`, right-clicking on the `res` folder, and using the Image Asset Studio to generate icons.
    - Customize the splash screen using additional documentation.

6. **Final Steps:**
    - After adding icons and customizing the splash screen, rebuild the app using Gradle and redeploy the updated bundle to the Google Play Store.

This process involves more manual steps compared to Expo’s managed workflow but provides control over configurations and builds.

## Configuring Android Apps

As shown earlier in the course (when adding native modules to non-Expo apps), you can manage certain aspects of your Android app with the AndroidManifest.xml file.

There, you can configure three important things:

-   The App name as it appears on the home screen: <https://stackoverflow.com/questions/5443304/how-to-change-an-android-apps-name>

-   The bundle identifier & package name of the app (also requires tweaking in other files): <https://developer.android.com/studio/build/application-id>

-   The permissions of the app: <https://developer.android.com/guide/topics/manifest/manifest-intro#perms>

You should also set an app version and change it with every app update. This is done in the build.gradle file, see: <https://developer.android.com/studio/publish/versioning>
