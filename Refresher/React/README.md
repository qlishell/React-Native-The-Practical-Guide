# React Refresher

**Tóm Tắt về React.js:**

**Mục Đích của React:**

-   React là một thư viện JavaScript để xây dựng giao diện người dùng, đặc biệt là các ứng dụng web một trang (single-page applications - SPA).
-   Nó giúp bạn tạo ra các giao diện người dùng tương tác và hiệu suất cao bằng cách chia nhỏ giao diện thành các thành phần.

### **1.**Khái Niệm Cơ Bản về React:\*\*

-   **Thành phần (Components):**

    -   Là đơn vị cơ bản của React.
    -   Có thể là class components hoặc function components.
    -   Chứa logic và giao diện của một phần ứng dụng.

-   **JSX (JavaScript XML):**

    -   Một cú pháp mở rộng cho JavaScript cho phép bạn viết HTML bên trong JavaScript.
    -   Được biên dịch thành JavaScript thuần túy.

-   **Props (Thuộc Tính):**

    -   Được sử dụng để truyền dữ liệu từ thành phần cha sang thành phần con.
    -   Là một cách để cấu hình các thành phần và tái sử dụng chúng.

-   **State (Trạng Thái):**
    -   Quản lý dữ liệu nội bộ của thành phần.
    -   Thay đổi trạng thái sẽ khiến thành phần tự động cập nhật và hiển thị lại.

### **2.**Cách React Hoạt Động:\*\*

-   **Virtual DOM:**

    -   React sử dụng Virtual DOM để tối ưu hóa việc cập nhật giao diện.
    -   Khi trạng thái thay đổi, React tạo ra một Virtual DOM mới và so sánh với Virtual DOM trước đó (sự so sánh gọi là reconciliation).
    -   Chỉ những phần thực sự thay đổi mới được cập nhật trên DOM thực tế.

-   **Phương Pháp Lifecycle:**
    -   Các phương pháp vòng đời của thành phần cho phép bạn thực hiện các hành động ở các giai đoạn khác nhau trong vòng đời của thành phần (như khi thành phần được tạo ra, cập nhật, hoặc xóa).

### **3.**Quản Lý Trạng Thái (State Management):\*\*

-   **Local State:**

    -   Quản lý trạng thái bên trong thành phần.
    -   Có thể sử dụng `useState` trong function components.

-   **Global State:**

    -   Quản lý trạng thái cho toàn bộ ứng dụng hoặc nhiều thành phần.
    -   Có thể sử dụng Context API hoặc thư viện như Redux hoặc MobX.

-   **Context API:**
    -   Cung cấp một cách để truyền dữ liệu qua cây thành phần mà không cần phải truyền props qua từng cấp.

### **4.**Cấu Trúc Ứng Dụng React:\*\*

-   **App Component:**

    -   Thành phần gốc của ứng dụng nơi các thành phần khác được bao gồm.

-   **Router:**

    -   Để quản lý điều hướng giữa các trang hoặc các phần của ứng dụng.

-   **Hooks:**
    -   Các hàm đặc biệt như `useState`, `useEffect` cho phép bạn sử dụng trạng thái và các tính năng của React mà không cần phải viết class components.

### **Tóm Tắt:**

-   **React** giúp xây dựng giao diện người dùng động và hiệu quả bằng cách chia nhỏ ứng dụng thành các thành phần.
-   **JSX** cho phép viết HTML trong JavaScript.
-   **Props** và **State** quản lý dữ liệu và cấu hình các thành phần.
-   **Virtual DOM** tối ưu hóa việc cập nhật giao diện.
-   **Lifecycle Methods** cho phép bạn điều khiển các hành động trong vòng đời của thành phần.
-   **State Management** có thể được thực hiện bằng local state, Context API, hoặc thư viện như Redux.

**Lưu Ý:**

-   Hãy xem xét tham gia một khóa học chi tiết về React để nắm vững các khái niệm và kỹ thuật nâng cao.

Hy vọng bản tóm tắt này giúp bạn có cái nhìn tổng quan về React.js và chuẩn bị cho các bước tiếp theo trong việc học và áp dụng React!

## What is React?

**React.js là gì?**

React.js là một thư viện JavaScript để xây dựng giao diện người dùng. Nó chủ yếu chạy JavaScript trong trình duyệt và giúp phát triển các ứng dụng web mà người dùng thấy trên frontend. Đây là một thư viện phía trình duyệt, không phải là thư viện Node.js.

**1.**React.js là thư viện:\*\*

-   **Thư viện**: React.js tập trung vào việc xây dựng giao diện người dùng. Mặc dù nó đã dẫn đến sự phát triển của một hệ sinh thái rộng lớn với nhiều gói phụ trợ khác, chẳng hạn như quản lý trạng thái toàn bộ ứng dụng hoặc điều hướng frontend, React.js về cơ bản vẫn là một thư viện.

-   **Khác với Framework**: Mặc dù có thể gọi React.js là một framework vì sự kết hợp của nó với các gói khác, về mặt chính thức, nó vẫn được coi là một thư viện.

**2.**Cách React.js hoạt động:\*\*

-   **Giao diện người dùng**: React.js giúp xây dựng giao diện người dùng mà người dùng thấy trên trình duyệt.

-   **Không chạy trên server**: React.js không chạy trên server và không giao tiếp với cơ sở dữ liệu. Nó chỉ chạy trên phía client (trình duyệt).

-   **Cách tiếp cận khai báo (Declarative Approach)**:
    -   Trong React, bạn định nghĩa kết quả mong muốn và các trạng thái khác nhau của kết quả. Bạn xác định cách hiển thị giao diện dựa trên các trạng thái này.
    -   Điều này trái ngược với cách tiếp cận mệnh lệnh (Imperative Approach) của JavaScript thuần túy, nơi bạn phải chỉ định từng bước cụ thể để cập nhật giao diện (như thêm phần tử, thêm lớp CSS, xóa phần tử, v.v.).

**3.**Components (Thành phần):\*\*

-   **Khái niệm Thành phần**: React giới thiệu khái niệm về thành phần, là các khối xây dựng giao diện người dùng. Bạn định nghĩa các thành phần này và sau đó kết hợp chúng để tạo ra giao diện người dùng của bạn.
-   **Kết hợp thành phần**: Mỗi thành phần định nghĩa cách nó nên hiển thị dựa trên các điều kiện cụ thể. React sẽ tự động xử lý mọi bước cần thiết và cập nhật giao diện người dùng mà không cần bạn phải quản lý từng bước.

**Tóm Tắt:**

-   **React.js** giúp xây dựng giao diện người dùng động và hiệu quả cho các ứng dụng web phía client.
-   **Thư viện**: Mặc dù có thể gọi là framework vì sự kết hợp của các gói phụ trợ, React.js chủ yếu là một thư viện.
-   **Cách tiếp cận khai báo**: Bạn định nghĩa kết quả mong muốn và các trạng thái của nó thay vì quản lý từng bước cụ thể.
-   **Thành phần**: Các khối xây dựng giao diện người dùng trong React giúp bạn định nghĩa và kết hợp giao diện dễ dàng.

Với sự hiểu biết này, bạn đã có cái nhìn tổng quan về React.js và cách nó hoạt động để giúp bạn bắt đầu viết mã với React.

## Understanding JSX

**Tóm tắt nội dung:**

Tệp `index.js` chứa mã thực thi đầu tiên khi ứng dụng khởi động và hiển thị một thành phần (component) vào vị trí của một `div`. Thành phần này được nhập từ tệp `app.js`, nơi chứa một hàm JavaScript. Nội dung của hàm này sử dụng JSX, một cú pháp đặc biệt cho phép viết mã HTML trông giống như trong các tệp JavaScript. JSX sẽ được chuyển đổi thành các lệnh mà React hiểu, chẳng hạn như `React.createElement`.

Để xem ứng dụng hoạt động, bạn cần khởi động server phát triển bằng lệnh `npm start`, điều này sẽ mở tab trình duyệt và hiển thị nội dung ứng dụng. JSX giúp đơn giản hóa việc xây dựng giao diện người dùng bằng cách giảm số lượng lệnh cần thiết, vì vậy bạn không phải viết nhiều mã phức tạp.

Mặc dù React sử dụng cú pháp JSX, nó vẫn cần phải nhập React vì JSX thực sự được chuyển đổi thành các lệnh `React.createElement`. Việc này giúp React quản lý và hiển thị các thành phần giao diện người dùng một cách hiệu quả. Trong tệp `index.js`, chúng ta sử dụng cú pháp JSX để làm việc với các thành phần tùy chỉnh thay vì các phần tử HTML DOM thông thường. Đây là một trong những khái niệm quan trọng của React, đó là "thành phần" (components).

## Understanding Components

**Tóm tắt nội dung:**

React chủ yếu dựa trên các thành phần (components). Một thành phần React có thể là một hàm trả về JSX hoặc các lệnh `React.createElement`, hoặc có thể là một lớp JavaScript (class) với phương thức `render`.

Trong React hiện đại, chúng ta thường sử dụng các thành phần hàm (functional components) thay vì các thành phần lớp (class components). Các thành phần hàm là các hàm JavaScript bình thường, nhưng để chúng trở thành thành phần React, hàm phải trả về mã JSX hoặc logic `React.createElement`. Nếu hàm trả về đối tượng khác, nó sẽ không phải là một thành phần React và sẽ gây lỗi.

Các thành phần tùy chỉnh cần bắt đầu bằng chữ cái viết hoa trong JSX để React nhận diện chúng là các thành phần tùy chỉnh chứ không phải thẻ HTML tích hợp sẵn. Sử dụng các thành phần nhỏ, tái sử dụng được giúp xây dựng giao diện người dùng bằng cách kết hợp chúng lại với nhau.

Bây giờ, chúng ta hãy xây dựng một ứng dụng React đơn giản để xem cách các thành phần hoạt động cùng nhau.

## Working with Multiple Components

**Tóm tắt nội dung:**

Trong module refresher này, mục tiêu không phải là xây dựng một ứng dụng React phức tạp mà chỉ tập trung vào các yếu tố cơ bản của React. Chúng ta sẽ xây dựng một ứng dụng đơn giản với các thành phần cơ bản như `h1` và `div`, thêm danh sách mục tiêu vào ứng dụng và áp dụng một số kiểu CSS.

1. **Xây dựng giao diện cơ bản**:

    - Sử dụng JSX để tạo cấu trúc HTML trong React.
    - Thêm các thẻ như `h2` và danh sách mục tiêu vào `div`.
    - Áp dụng kiểu CSS bằng cách thêm `app.css` và sử dụng thuộc tính `className` (thay vì `class` do `class` là từ khóa trong JavaScript).

2. **Tạo và sử dụng các thành phần**:

    - Tạo một thành phần mới `GoalList` và di chuyển danh sách mục tiêu vào thành phần này.
    - Sử dụng `React` để tạo và xuất thành phần.
    - Trong `app.js`, nhập và sử dụng thành phần `GoalList` như một thẻ JSX tự đóng.

3. **Quản lý kiểu dáng**:
    - Tạo một tập tin CSS riêng cho thành phần `GoalList` và nhập vào `GoalList.js` để giữ cho kiểu dáng liên quan gần với thành phần.

**Lợi ích của việc chia nhỏ thành phần**:

-   Giúp giữ cho mã nguồn gọn gàng và dễ quản lý hơn.
-   Cung cấp khả năng tái sử dụng các thành phần và dễ dàng bảo trì trong tương lai.

Mặc dù kết quả cuối cùng không khác nhiều so với khi không chia nhỏ, việc phân chia thành phần giúp cải thiện cấu trúc và tổ chức mã nguồn.

## Working with Props

**Tóm tắt nội dung:**

Trong React, việc chia ứng dụng thành các thành phần nhỏ là một phần quan trọng của triết lý thiết kế. Điều này giúp mã nguồn dễ quản lý hơn, đặc biệt là trong các dự án lớn.

1. **Chia nhỏ thành phần**:

    - Việc chia ứng dụng thành các thành phần nhỏ giúp tách biệt các vấn đề và giữ cho mã nguồn gọn gàng, dễ quản lý.
    - Mỗi thành phần có thể quản lý một phần logic cụ thể và có thể tái sử dụng.

2. **Quản lý dữ liệu động**:

    - Hiện tại, dữ liệu mục tiêu (course goals) trong ứng dụng là cố định. Để làm ứng dụng thực tế hơn, dữ liệu nên được quản lý trong `app.js` và truyền xuống thành phần `GoalList` dưới dạng props.
    - Dữ liệu được truyền vào thành phần qua props, và bạn có thể sử dụng props để truyền dữ liệu từ một thành phần này sang thành phần khác.

3. **Truyền dữ liệu qua props**:

    - Trong `app.js`, bạn tạo một mảng `courseGoals` chứa dữ liệu mục tiêu và truyền mảng này đến `GoalList` qua props.
    - Trong `GoalList`, bạn nhận props và có thể truy cập dữ liệu bằng cách sử dụng `props.goals`.
    - Props là một cách quan trọng để truyền dữ liệu giữa các thành phần trong React.

4. **Hiển thị dữ liệu động**:
    - Để hiển thị danh sách mục tiêu, bạn cần sử dụng JSX để lặp qua mảng dữ liệu và tạo các phần tử danh sách từ dữ liệu đó.

Việc tách thành phần và truyền dữ liệu qua props giúp cải thiện khả năng quản lý và mở rộng của ứng dụng React.

## Rendering Lists of Data

## Handling Events

## Parent-Child Communication

## Managing State

## More on State

## User Input & Two-way binding
