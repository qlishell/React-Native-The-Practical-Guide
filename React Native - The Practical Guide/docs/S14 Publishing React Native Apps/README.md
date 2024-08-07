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
