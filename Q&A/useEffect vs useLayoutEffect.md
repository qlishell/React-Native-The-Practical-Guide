# What are the different between useEffect and useLayoutEffect

![image](https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt3-dark-1200x303.png?sfvrsn=66825c30_3)

Các hook `useLayoutEffect` và `useEffect` trong React có những điểm tương đồng về chức năng nhưng khác nhau về thời gian thực hiện. Trong bài viết này, chúng ta sẽ đi sâu vào sự khác biệt chính này, cung cấp thông tin chi tiết về thời điểm và lý do nên sử dụng từng hook một cách hiệu quả.

## **Sự Khác Biệt Giữa `useEffect` và `useLayoutEffect`**

`useEffect` và `useLayoutEffect` đều là các hook trong React cho phép bạn thực hiện các tác động phụ trong các thành phần hàm. Mặc dù chúng có mục đích tương tự, nhưng có sự khác biệt quan trọng về thời điểm và cách chúng thực thi:

### **1. Thời Điểm Thực Thi**

-   **`useEffect`**

    -   Chạy sau khi render: Hook `useEffect` chạy sau khi component đã render và DOM đã được cập nhật. Điều này có nghĩa là nó thực thi bất đồng bộ và không làm chặn quá trình vẽ của trình duyệt.
    -   Phù hợp với: Các tác động phụ như lấy dữ liệu, cập nhật DOM, hoặc đăng ký các dịch vụ bên ngoài.

                        ```javascript
                        useEffect(() => {
                            // Code ở đây chạy sau khi DOM đã được cập nhật
                            console.log("useEffect được thực thi");
                        }, [dependencies]); // Mảng phụ thuộc
                        ```

-   **`useLayoutEffect`**

    -   Chạy trước khi vẽ: Hook `useLayoutEffect` chạy đồng bộ ngay sau khi DOM đã được cập nhật nhưng trước khi trình duyệt có cơ hội vẽ. Điều này hữu ích khi bạn cần thực hiện tính toán hoặc thay đổi DOM mà phải được nhìn thấy ngay lập tức.
    -   Phù hợp với: Các tác động phụ yêu cầu đọc thông tin bố trí hoặc áp dụng các điều chỉnh bố trí, chẳng hạn như đo các phần tử DOM hoặc đồng bộ hóa DOM.

                        ```javascript
                        useLayoutEffect(() => {
                            // Code ở đây chạy trước khi DOM được vẽ
                            console.log("useLayoutEffect được thực thi");
                        }, [dependencies]); // Mảng phụ thuộc
                        ```

### **2. Các Trường Hợp Sử Dụng**

-   **`useEffect`**

    -   Thích hợp cho các tác động phụ không yêu cầu tương tác ngay lập tức với bố trí hoặc DOM. Ví dụ phổ biến bao gồm:
        -   Lấy dữ liệu hoặc yêu cầu mạng
        -   Thiết lập các đăng ký hoặc bộ đếm thời gian
        -   Ghi log hoặc phân tích

-   **`useLayoutEffect`**
    -   Thích hợp cho các tác động phụ yêu cầu tương tác ngay lập tức với DOM hoặc cần đo các phần tử DOM. Ví dụ phổ biến bao gồm:
        -   Đo kích thước của một phần tử DOM
        -   Điều chỉnh vị trí hoặc kiểu của các phần tử dựa trên sự thay đổi bố trí
        -   Đồng bộ hóa với các thư viện bên thứ ba cần thao tác với DOM

### **3. Xem Xét Hiệu Suất**

-   **`useEffect`**

    -   Thường ít ảnh hưởng đến hiệu suất hơn vì nó không chặn quá trình vẽ của trình duyệt. Nó chạy bất đồng bộ sau khi component đã render.

-   **`useLayoutEffect`**
    -   Có thể ảnh hưởng đến hiệu suất nếu được sử dụng quá mức hoặc không chính xác, vì nó chặn quá trình vẽ cho đến khi tác động phụ hoàn tất. Nên được sử dụng khi bạn cần đọc hoặc ghi vào DOM trước khi nó được vẽ.

### **4. Ví Dụ Thực Tế**

Giả sử bạn cần đo chiều rộng của một phần tử sau khi nó đã được render:

-   **Sử Dụng `useEffect`:**

    ```javascript
    useEffect(() => {
        const element = document.getElementById("my-element");
        console.log(element.clientWidth); // Điều này có thể không chính xác cho đến khi vẽ tiếp theo
    }, []);
    ```

-   **Sử Dụng `useLayoutEffect`:**

    ```javascript
    useLayoutEffect(() => {
        const element = document.getElementById("my-element");
        console.log(element.clientWidth); // Điều này sẽ chính xác vì nó chạy trước khi vẽ
    }, []);
    ```

### **Tóm Tắt**

-   **`useEffect`**: Chạy sau khi DOM đã được cập nhật và vẽ. Phù hợp với hầu hết các tác động phụ không cần tương tác ngay lập tức với DOM.
-   **`useLayoutEffect`**: Chạy trước khi DOM được vẽ. Phù hợp với các trường hợp bạn cần đo lường hoặc điều chỉnh DOM ngay sau khi cập nhật nhưng trước khi trình duyệt vẽ.

Chọn giữa `useEffect` và `useLayoutEffect` dựa trên yêu cầu về thời gian của các tác động phụ và ảnh hưởng của chúng đối với hiệu suất render của ứng dụng của bạn. Nếu bạn cần thêm thông tin hoặc có yêu cầu khác, hãy cho tôi biết!

Tóm lại, sự khác biệt giữa `useEffect` và `useLayoutEffect` trong React nằm ở thời điểm chúng được thực thi. Khi quyết định sử dụng hook nào, hãy luôn chọn hook `useEffect` nếu hiệu ứng không cần đồng bộ ngay lập tức với DOM, chẳng hạn như khi gọi API hoặc lấy dữ liệu. Điều này thường đủ cho hầu hết các tình huống liên quan đến việc thực thi hiệu ứng.

`useLayoutEffect` được dành riêng cho các hoạt động phức tạp hơn đòi hỏi tương tác với DOM hoặc thời gian cụ thể, chẳng hạn như phép đo DOM hoặc ngăn chặn hiện tượng nhấp nháy thị giác.
