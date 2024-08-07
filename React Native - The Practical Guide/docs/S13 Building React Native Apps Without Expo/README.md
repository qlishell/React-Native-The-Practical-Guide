# S13 Building React Native Apps Without Expo

Trong phần này của khóa học, bạn đã học được nhiều về việc xây dựng ứng dụng React Native bằng cách sử dụng Expo, công cụ đã giúp trong việc tạo dự án và phát triển. Bây giờ, bạn sẽ khám phá cách xây dựng ứng dụng React Native mà không cần Expo. Điều này bao gồm việc tìm hiểu cách Expo hoạt động, vai trò của nó, và sau đó học cách chuyển sang một dự án React Native "Vanilla", tức là một dự án React Native không sử dụng Expo. Khóa học sẽ đề cập đến các lựa chọn thay thế khác nhau, lợi ích và nhược điểm của chúng, và hướng dẫn bạn chọn phương pháp tốt nhất cho các dự án tương lai của bạn.

Expo vs React Native

-   **How does Expo work?**
-   **Building a "Vanilla" React Native project**
-   **Advantages & Disadvantages**

## How does Expo work?

Trước khi bắt đầu với các bản demo và các ứng dụng được xây dựng theo nhiều cách khác nhau, chúng ta cần hiểu cách Expo hoạt động. Trong khóa học này, chúng ta đã sử dụng Expo init để tạo các dự án Expo và ứng dụng Expo Go để xem trước ứng dụng trên thiết bị thực hoặc giả lập trong quá trình phát triển. Expo Go giúp việc phát triển dễ dàng hơn bằng cách cho phép bạn xem trước mã nguồn ngay lập tức mà không cần phải cài đặt hoặc xây dựng ứng dụng mỗi lần thay đổi.

Điều quan trọng là trong quá trình phát triển với Expo, bạn không xây dựng các ứng dụng độc lập thực sự. Mã nguồn chỉ được tải vào ứng dụng Expo Go để thực thi. Tuy nhiên, bạn vẫn có thể xây dựng và xuất bản các ứng dụng độc lập mà không cần Expo Go khi hoàn tất phát triển. Dịch vụ EAS sẽ hỗ trợ bạn trong việc xây dựng các ứng dụng độc lập, bao gồm cả ứng dụng iOS trên máy Windows, điều mà sẽ được khám phá trong phần tiếp theo của khóa học.

Use EAS Build Service

| During Development                                            | For Production                                                  |
| ------------------------------------------------------------- | --------------------------------------------------------------- |
| Move fast with Expo Go app                                    | Build lean, independent standalone apps that don't need Expo Go |
| Shared runtime loads your code and reflects changes instantly | Use EAS (cloud service) to build for all platforms              |

Tóm lại, Expo Go là công cụ hỗ trợ trong quá trình phát triển, cho phép bạn phát triển nhanh chóng và xem trước ứng dụng trên bất kỳ thiết bị nào. Tuy nhiên, để sản xuất, bạn có thể xây dựng các ứng dụng độc lập không phụ thuộc vào Expo Go.

## Expo Alternatives

Expo rất hữu ích trong quá trình phát triển vì nó giúp dễ dàng và nhanh chóng. Trong khóa học này, chúng ta đã sử dụng **Expo Managed Workflow**, nghĩa là dùng Expo Go App và dự án tạo ra bằng lệnh Expo init với mẫu Managed Workflow. Điều này giúp giảm thiểu cấu hình và làm việc với các tính năng như tính năng thiết bị gốc trở nên dễ dàng hơn.

Tuy nhiên, nếu bạn cần nhiều quyền kiểm soát hơn, bạn có thể xem xét sử dụng **Expo Bare Workflow**, nơi bạn có thể viết mã gốc riêng và tích hợp với mã React Native của bạn. Mặc dù Bare Workflow cũng dễ thiết lập và làm việc, nhưng bạn sẽ cần cấu hình nhiều hơn và không thể sử dụng Expo Go App nếu bạn thêm mã gốc tùy chỉnh.

Cuối cùng, bạn cũng có thể xây dựng ứng dụng React Native mà không sử dụng Expo, chỉ với **React Native CLI**. Điều này yêu cầu thiết lập phức tạp hơn và nhiều nỗ lực cấu hình hơn, đặc biệt khi tích hợp các gói bên thứ ba và tính năng thiết bị gốc. Với React Native CLI, bạn cũng phải xây dựng ứng dụng cục bộ và không có sự hỗ trợ tích hợp để xây dựng cho nhiều nền tảng.

| Expo Managed Workflow                          | Expo Bare Workflow                             | React Native CLI                       |
| ---------------------------------------------- | ---------------------------------------------- | -------------------------------------- |
| Easy to setup & work with                      | Relatively easy to setup & work with           | More complex setup                     |
| Quick & frictionless development               | Convenient development                         | Convenient developement                |
| No or very little configuration required       | Some configuration required                    | Can required more configuration effort |
| You can build (cross-platform) standalone apps | You can build (cross-platform) standalone apps | Standalone apps are built locally      |

## Ejecting to the bare workflow

Trong bài giảng trước, chúng ta đã làm việc với một dự án **bare workflow** được tạo bằng Expo. Tuy nhiên, đôi khi bạn có thể muốn chuyển từ **managed workflow** sang **bare workflow** để có nhiều tùy chỉnh hơn hoặc thêm mã gốc. Điều này rất đơn giản: bạn chỉ cần chạy lệnh `expo eject` trong dự án managed workflow của bạn.

Quá trình này sẽ yêu cầu bạn xác nhận và nhập tên gói Android và iOS. Sau khi eject, dự án của bạn sẽ được chuyển thành dạng bare workflow, với các thư mục Android và iOS được tạo ra. Bạn có thể xây dựng và chạy ứng dụng trực tiếp trên máy của mình, không còn phụ thuộc vào Expo Go App nữa.

Sau khi eject, bạn có thể tiếp tục phát triển và kiểm tra ứng dụng trên các thiết bị thực hoặc giả lập như trước. Nếu bạn cần tích hợp các gói bên thứ ba, hãy kiểm tra tài liệu API để biết thêm hướng dẫn cấu hình thêm cho bare workflow.

Cuối cùng, trong các bài học tiếp theo, chúng ta sẽ khám phá cách xây dựng ứng dụng React Native mà không sử dụng Expo.
