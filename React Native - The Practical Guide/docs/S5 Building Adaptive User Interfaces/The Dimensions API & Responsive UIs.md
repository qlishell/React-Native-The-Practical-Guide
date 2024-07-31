# The Dimensions API & Responsive UIs

Question 1: What's NOT true about the `Dimensions` API?

-   [ ] It allows you to get the width or height of the current device screen.
-   [x] It automatically updates your code when dimensions change.
-   [ ] It can be used to dynamically calculated sizes or in if checks.

Question 2: When should you add a listener to changes in the device dimensions?

-   [ ] You should never set listeners, it updates automatically.
-   [ ] Set listeners whenever you use width or height from the API.
-   [x] Set listeners whenever you need re-calculated dimensions and your dimensions can change.

> Đúng rồi. Bất cứ khi nào bạn sử dụng chiều rộng hoặc chiều cao từ API Thứ nguyên và cần cập nhật mã của mình khi các kích thước đó thay đổi, bạn có thể muốn sử dụng trình nghe. Tất nhiên, bạn không bao giờ cần người nghe nếu kích thước của bạn không thể thay đổi (ví dụ: vì hướng bị khóa).

Question 3: What does the `Dimensions` API tell you about the device orientation?

-   [ ] You can query `Dimensions.get('window').orientation` to find out whether the device is in landscape or portrait mode.
-   [ ] Values fetched via `Dimensions` automatically update when the device orientation changes.
-   [x] Nothing, `Dimensions` just gives you information about width and height of the device screen.

> Đúng rồi. Mặc dù bạn chắc chắn có thể thay đổi bố cục dựa trên chiều rộng và chiều cao và mặc dù bạn có thể đoán rằng thiết bị đang ở chế độ nằm ngang nếu chiều rộng > chiều cao, nhưng bạn không có quyền truy cập trực tiếp vào hướng màn hình.
