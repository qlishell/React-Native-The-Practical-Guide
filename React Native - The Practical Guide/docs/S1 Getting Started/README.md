# S1 Getting Started

## What is React Native?

`React.js` + `React Native` => `Real Native Mobile Apps`

| React.js                                             | React Native                                                                    |
| ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| Thư viện JavaScript để xây dựng giao diện người dùng | Bộ sưu tập các thành phần React "đặc biệt"                                      |
| Thường được sử dụng để phát triển web                | Các thành phần được biên dịch thành các thành phần UI gốc                       |
| Nhưng thực tế là React-dom có ​​thêm hỗ trợ web!     | API nền tảng gốc tiếp xúc với JavaScript                                        |
| **Bản thân React là nền tảng bất khả tri!**          | **React Native giống như Reac-dom: Nó "kết nối" React với một nền tảng cụ thể** |

### **Đặc điểm chính của React Native:**

1. **Cross-Platform Development (Phát triển đa nền tảng):**

    - React Native cho phép viết mã một lần và chạy trên cả iOS và Android, giúp tiết kiệm thời gian và công sức so với việc phát triển riêng lẻ cho từng nền tảng.

2. **Native Components (Thành phần gốc):**

    - Sử dụng các thành phần gốc của nền tảng để cung cấp trải nghiệm người dùng mượt mà và hiệu suất cao. Điều này có nghĩa là các thành phần giao diện người dùng trong React Native được dịch thành các thành phần giao diện gốc tương ứng của iOS và Android.

3. **Hot Reloading (Tải lại nhanh):**

    - Tính năng này cho phép nhà phát triển thấy ngay lập tức các thay đổi trong mã nguồn mà không cần phải build lại toàn bộ ứng dụng.

4. **Large Community and Ecosystem (Cộng đồng và hệ sinh thái lớn):**

    - React Native có một cộng đồng lớn và phát triển mạnh mẽ, cung cấp rất nhiều thư viện và công cụ hỗ trợ.

5. **JavaScript and React (JavaScript và React):**
    - Sử dụng JavaScript và React, một thư viện phổ biến của Facebook để xây dựng giao diện người dùng, giúp dễ dàng học và chuyển đổi từ phát triển web sang phát triển di động.

### **Lợi ích của React Native:**

-   **Tiết kiệm chi phí và thời gian:** Việc phát triển một ứng dụng cho nhiều nền tảng từ một mã nguồn duy nhất giúp giảm chi phí và thời gian.
-   **Tái sử dụng mã:** Có thể tái sử dụng mã JavaScript đã viết sẵn cho web, giúp tiết kiệm công sức khi mở rộng ứng dụng.
-   **Hiệu suất cao:** Ứng dụng được biên dịch thành mã gốc giúp tối ưu hóa hiệu suất.

### **Ứng dụng của React Native:**

-   **Ứng dụng doanh nghiệp:** Tạo các ứng dụng quản lý nội bộ hoặc ứng dụng khách hàng.
-   **Ứng dụng thương mại điện tử:** Phát triển các ứng dụng mua sắm, bán hàng.
-   **Ứng dụng xã hội:** Xây dựng các ứng dụng tương tác xã hội, mạng xã hội.

## A Glance Under The Hood Of React Native

### Tóm tắt nội dung:

**Cách hoạt động của React Native:**

1. **Viết Mã:**

    - Khi phát triển ứng dụng với React và React Native, bạn viết mã bằng các thành phần (components) React.
    - Mã này sẽ được biên dịch thành mã gốc (native code) của ứng dụng di động.

2. **Thành Phần JSX Đặc Biệt:**

    - Các thành phần JSX như `View` và `Text` trong React Native sẽ được biên dịch thành các thành phần gốc tương ứng trên nền tảng di động (iOS/Android).

3. **Bảng So Sánh Thành Phần:**

    - Ví dụ: `input` trong React DOM tương ứng với `TextInput` trong React Native, sẽ được biên dịch thành `EditText` trên Android và `UITextField` trên iOS.

4. **Logic JavaScript:**

    - Mã logic JavaScript không được biên dịch mà sẽ chạy trên một luồng JavaScript được React Native quản lý.
    - Luồng JavaScript này sẽ giao tiếp với nền tảng gốc thông qua một cầu nối (bridge).

5. **Kết Luận:**
    - React Native giúp bạn phát triển ứng dụng di động đa nền tảng bằng cách biên dịch các thành phần giao diện và quản lý luồng logic JavaScript.

**Để hiểu thêm, bạn có thể tham khảo tài liệu chính thức của React Native.**

## Creating React Native Projects: Expo CLI vs React Native CLI

### Tóm tắt nội dung:

**Tạo dự án React Native: Expo CLI vs React Native CLI**

1. **Giới thiệu:**

    - Để bắt đầu với React Native, truy cập trang web chính thức [reactnative.dev](https://reactnative.dev).
    - Trang web cung cấp tài nguyên học tập và hướng dẫn thiết lập môi trường phát triển.

2. **Hai phương pháp chính:**

    - Có hai cách chính để tạo dự án React Native: sử dụng Expo CLI hoặc React Native CLI.

3. **Expo CLI:**

    - Expo là một dịch vụ bên thứ ba miễn phí, giúp tạo và quản lý dự án dễ dàng hơn.
    - Cung cấp workflow phát triển ứng dụng được quản lý, giúp dễ dàng sử dụng các chức năng gốc của thiết bị như camera.
    - Dễ dàng chuyển đổi sang sử dụng React Native CLI nếu cần thiết.
    - Expo CLI phù hợp cho người mới bắt đầu và những ai muốn phát triển nhanh chóng.

4. **React Native CLI:**

    - Công cụ gốc được cung cấp bởi nhóm phát triển React Native.
    - Cung cấp môi trường phát triển cơ bản, yêu cầu cấu hình và thiết lập nhiều hơn.
    - Dễ dàng tích hợp với mã nguồn gốc (Java, Objective-C, Swift, Kotlin).
    - Thích hợp cho những trường hợp cần tích hợp mã nguồn JavaScript và mã nguồn gốc.

5. **Lựa chọn phương pháp:**
    - Sử dụng Expo CLI được khuyến nghị vì tính dễ sử dụng và linh hoạt.
    - Có thể chuyển sang React Native CLI bất kỳ lúc nào nếu cần tích hợp sâu hơn với mã nguồn gốc.

**Kết luận:** Sử dụng Expo CLI giúp quá trình phát triển ứng dụng React Native dễ dàng và thuận tiện hơn, đặc biệt cho người mới bắt đầu. Tuy nhiên, nếu cần tích hợp sâu hơn với mã nguồn gốc, có thể chuyển sang sử dụng React Native CLI.

## Creating a New React Native Project

```base
yarn create expo-app --template blank AwesomeProject

cd AwesomeProject
yarn expo start
```

## Running Our First App On A Real Device!
