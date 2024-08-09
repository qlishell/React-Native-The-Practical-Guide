# S15 Push Notifications

Trong phần này của khóa học, bạn sẽ tìm hiểu về thông báo trong React Native, bao gồm cả thông báo cục bộ và thông báo đẩy. Dưới đây là nội dung mà bạn sẽ khám phá:

1. **Thông Báo Cục Bộ:**

    - **Định Nghĩa và Sử Dụng:** Thông báo cục bộ là các thông điệp do chính ứng dụng tạo ra, được kích hoạt bởi các sự kiện nội bộ (ví dụ: một bộ hẹn giờ hoặc hành động của người dùng). Chúng không được gửi từ máy chủ mà được quản lý trong ứng dụng.
    - **Triển Khai:** Bạn sẽ học cách thiết lập và hiển thị thông báo cục bộ trong ứng dụng của bạn.

2. **Thông Báo Đẩy:**

    - **Định Nghĩa và Sử Dụng:** Thông báo đẩy là các thông điệp được gửi từ một máy chủ từ xa đến ứng dụng. Chúng có thể thông báo cho người dùng về nội dung mới, cập nhật, hoặc các sự kiện quan trọng ngay cả khi ứng dụng không đang chạy.
    - **Triển Khai:** Khóa học sẽ hướng dẫn bạn qua quy trình thiết lập thông báo đẩy, bao gồm:
        - **Gửi Thông Báo:** Cách gửi thông báo đến các thiết bị khác bằng dịch vụ backend.
        - **Xử Lý Thông Báo:** Cách xử lý và quản lý các thông báo đẩy đến trong ứng dụng của bạn, bao gồm việc hiển thị chúng và phản hồi các tương tác của người dùng.

3. **Ví Dụ Cơ Bản:**
    - Bạn sẽ xem một ví dụ thực tế về cách:
        - Kích hoạt thông báo trên các thiết bị khác.
        - Xử lý và xử lý các thông báo đẩy đến trong ứng dụng của bạn.

Hiểu biết về cả thông báo cục bộ và thông báo đẩy sẽ giúp bạn nâng cao sự tương tác của người dùng và cung cấp các cập nhật kịp thời trong ứng dụng của bạn.

-   **Working with Local Notifications**
-   **Understanding Push Notifications**
-   **Example: Send+Handle Push Notifications**

## What are (Local) Notifications?

Chúng ta sẽ bắt đầu tìm hiểu về Thông Báo Cục Bộ, bắt đầu từ việc hiểu rõ khái niệm của nó. Thông báo cục bộ là thông báo được kích hoạt bởi ứng dụng trên cùng một thiết bị mà ứng dụng được cài đặt, không gửi đến thiết bị khác. Các thông báo này có thể được lên lịch và cấu hình từ trong ứng dụng, chẳng hạn như khi một công việc đến hạn hoặc một nhắc nhở cần thực hiện. Việc thêm thông báo cục bộ trong React Native, đặc biệt là với Expo, là khá đơn giản.

## Adding the Expo Notification Package

Trong phần này, chúng ta sẽ bắt đầu với thông báo cục bộ trong một dự án mới sử dụng Expo. Thông báo cục bộ đơn giản là thông báo được kích hoạt bởi ứng dụng trên cùng một thiết bị. Để thực hiện điều này, chúng ta sẽ sử dụng gói `expo-notifications`, giúp việc lập lịch và quản lý thông báo dễ dàng hơn. Gói này hỗ trợ cả thông báo cục bộ và thông báo đẩy.

Trước tiên, cần cài đặt gói bằng lệnh `expo install expo-notifications`. Sau khi cài đặt, chúng ta có thể cấu hình gói này trong tệp `app.json`, nơi có thể thiết lập các thuộc tính như biểu tượng và màu sắc cho thông báo. Tuy nhiên, một số thuộc tính chỉ áp dụng cho Android và không ảnh hưởng đến iOS.

Khi làm việc với thông báo đẩy, có thể cần thêm bước cấu hình nếu không thử nghiệm trong Expo Go, và cần xem xét hướng dẫn cụ thể cho việc triển khai thông báo đẩy trên cả Android và iOS. Tuy nhiên, hiện tại chúng ta sẽ chỉ tập trung vào thông báo cục bộ trước.

## Scheduling Notifications

Chúng ta sẽ bắt đầu với thông báo cục bộ trong dự án hiện tại. Trong `App.js`, ta sẽ tạo một nút bấm để lập lịch thông báo.

1. **Nhập các thư viện cần thiết**: Nhập `Button` từ `react-native` và `Notifications` từ `expo-notifications`.
2. **Tạo hàm lập lịch thông báo**: Trong hàm `scheduleNotificationHandler`, sử dụng `scheduleNotificationAsync` từ `Notifications` để lập lịch thông báo.
3. **Cấu hình thông báo**: Cung cấp các thuộc tính như tiêu đề (`title`), nội dung (`body`), và dữ liệu thêm (`data`) cho thông báo. Ví dụ, tiêu đề có thể là "My first local notification" và nội dung có thể là "This is the body of the notification".
4. **Thiết lập kích hoạt thông báo**: Cấu hình thuộc tính `seconds` trong đối tượng `trigger` để chỉ định thời gian khi thông báo sẽ được gửi. Trong ví dụ, thời gian là 5 giây.
5. **Thử nghiệm và xử lý lỗi**: Sau khi lập lịch thông báo, nếu thông báo không xuất hiện, điều này có thể do chưa được hiển thị, và cần kiểm tra thêm.

Chúng ta sẽ tiếp tục xử lý việc hiển thị thông báo sau khi lập lịch thành công.

## Understanding Push Notifications

Chúng ta đã khám phá thông báo cục bộ, mà thực chất là thông báo được gửi từ chính ứng dụng đến chính thiết bị đó. Tuy nhiên, trong nhiều trường hợp, bạn cần gửi thông báo đến các thiết bị khác, ví dụ như thông báo chat hoặc thông báo tiếp thị. Đây là lúc Push Notifications (thông báo đẩy) trở thành hữu ích.

**Đặc điểm của Push Notifications:**

1. **Mục đích**: Gửi thông báo đến các thiết bị khác ngoài thiết bị gốc mà thông báo được gửi từ đó. Có thể gửi đến một thiết bị hoặc nhiều thiết bị.
2. **Cách hoạt động**:
    - Có thể xảy ra trên ứng dụng hoặc backend của ứng dụng.
    - Để gửi thông báo, bạn cần sử dụng máy chủ Push Notification do Apple hoặc Google cung cấp, vì ứng dụng của bạn không thể gửi thông báo trực tiếp.
    - Expo cung cấp máy chủ Push Notification để đơn giản hóa việc gửi thông báo đến cả Android và iOS từ một điểm duy nhất.
3. **Quy trình gửi thông báo**:
    - Gửi yêu cầu HTTP đến máy chủ Push Notification từ backend của bạn hoặc từ ứng dụng.
    - Máy chủ Push Notification sẽ gửi yêu cầu đến các máy chủ của Google và Apple để chuyển tiếp thông báo đến các thiết bị.

Chúng ta sẽ tìm hiểu chi tiết từng bước để gửi Push Notifications trong các bài học tiếp theo.

## Push Notifications Setup

Để bắt đầu với Push Notifications, bạn nên tham khảo tài liệu chính thức của công cụ bạn đang sử dụng, như Expo. Dưới đây là các bước chuẩn bị cần thiết:

1. **Tài liệu và Cài đặt**:

    - Tham khảo tài liệu Expo về Push Notifications để hiểu rõ cách gửi và xử lý thông báo đẩy.
    - Cài đặt gói Expo Notifications và thực hiện các bước thiết lập cần thiết.

2. **Yêu cầu Quyền**:

    - Đối với iOS, bạn cần yêu cầu quyền gửi thông báo.

3. **Lấy ExpoPushToken**:

    - ExpoPushToken là một chuỗi duy nhất cho mỗi thiết bị, được sử dụng để gửi thông báo đẩy đến các thiết bị.
    - Bạn có thể lấy token này ngay khi ứng dụng khởi chạy bằng cách sử dụng phương thức `getExpoPushTokenAsync` từ gói Notifications.

4. **Kiểm Tra Thiết Bị**:

    - Push Notifications không hỗ trợ trên các trình giả lập; bạn cần kiểm tra trên thiết bị thực.

5. **Thực Hiện Gửi Thông Báo**:
    - Sử dụng token này để gửi thông báo đẩy từ máy chủ Expo hoặc máy chủ Push Notification khác.

Chúng ta sẽ đi qua từng bước cụ thể trong các bài học tiếp theo.
