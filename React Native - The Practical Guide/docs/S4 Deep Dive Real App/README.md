# S4 Deep Dive into Components, Layouts & Styling - Building a Mini-Game App

Trong quá trình này, chúng ta sẽ học các khái niệm mới như sử dụng gradient hoặc hình nền, điều hướng giữa nhiều màn hình, và các thành phần cơ bản mới. Chúng ta sẽ làm việc với các bố cục phức tạp, tìm hiểu kỹ thuật tạo kiểu mới, và xây dựng các thành phần có thể tái sử dụng. Cuối cùng, chúng ta sẽ viết mã tốt để tạo ra ứng dụng này một cách đúng đắn.

## Analyzing The Target App

Trong phần này, chúng ta sẽ xây dựng trò chơi mà tôi đã giới thiệu. Trò chơi này có nhiều màn hình: màn hình bắt đầu, nơi người dùng chọn một số từ 1 đến 99. Chúng ta sẽ đảm bảo rằng không có số nào nhỏ hơn 1 hoặc lớn hơn 99 được chọn. Người dùng có thể đặt lại số nhập và chọn số mới hoặc bắt đầu trò chơi, khi đó chúng ta sẽ điều hướng đến màn hình trò chơi.

Trên màn hình trò chơi, điện thoại sẽ đoán số và người dùng phải cho biết điện thoại nên đoán cao hơn hay thấp hơn để đến gần số của mình. Mỗi lần đoán của điện thoại sẽ được ghi lại và danh sách này có thể cuộn nếu vượt quá chiều cao tối đa. Khi điện thoại đoán đúng số, màn hình "Game Over" sẽ hiển thị một tóm tắt và hình ảnh đẹp. Từ màn hình này, người dùng có thể bắt đầu trò chơi mới.

Chúng ta sẽ thêm tất cả các màn hình này và nhiều thành phần có thể tái sử dụng khác, như các nút mà chúng ta sẽ tự xây dựng từ đầu. Bạn có thể thử xây dựng nguyên mẫu trò chơi này với kiến thức cơ bản về React và React Native mà bạn đã có, nhưng cũng có thể theo dõi và xây dựng trò chơi cùng tôi từng bước một. Trong quá trình này, chúng ta sẽ học nhiều điều mới quan trọng về React và React Native.
