# JavaScript Refresher

Module này là một khóa học tùy chọn để ôn lại kiến thức cơ bản về JavaScript. Nó không thay thế việc học JavaScript từ đầu, mà chỉ là một tài liệu ôn tập nhanh cho những người đã có chút kiến thức cơ bản về JavaScript, cú pháp cơ bản và ứng dụng của nó.

-   **Nếu bạn đã có kiến thức cơ bản về JavaScript** hoặc biết các tính năng mới như toán tử rest và spread, hay phân tách đối tượng, bạn nên bỏ qua module này.
-   **Nếu bạn mới học JavaScript** hoặc kiến thức của bạn đã cũ, module này sẽ hữu ích để làm quen lại với ngôn ngữ.
-   **Tài nguyên hỗ trợ**: Trong bài học tiếp theo, có các liên kết đến tài nguyên miễn phí để bạn có thể học JavaScript từ đầu nếu cần.

Tóm lại, module này là một ôn tập nhanh cho những ai cần làm mới lại kiến thức cơ bản về JavaScript.

## JavaScript - A Summary

JavaScript là một ngôn ngữ lập trình yếu kiểu và hướng đối tượng với nhiều tính năng linh hoạt:

-   **Yếu kiểu**: JavaScript không yêu cầu khai báo kiểu dữ liệu rõ ràng cho biến hoặc hàm. Bạn có thể thay đổi kiểu dữ liệu của một biến từ số sang văn bản một cách linh hoạt, mặc dù điều này có thể dẫn đến lỗi nếu không cẩn thận.

-   **Hướng đối tượng**: Dữ liệu có thể được tổ chức trong các đối tượng logic. Quan trọng là phân biệt giữa kiểu dữ liệu nguyên thủy (primitive) và kiểu tham chiếu (reference).

-   **Đa dụng**: JavaScript có thể chạy trên nhiều nền tảng. Ban đầu, nó được sử dụng trong trình duyệt để xử lý sự kiện của người dùng và cập nhật DOM. Nó cũng có thể chạy trên máy tính cá nhân hoặc máy chủ thông qua Node.js, cho phép thực hiện các tác vụ như làm việc với tệp và cơ sở dữ liệu.

-   **Khả năng mở rộng**: Trong khóa học, sẽ khám phá các tính năng cốt lõi và các tính năng JavaScript thế hệ mới, cũng như cách sử dụng Node.js để xây dựng máy chủ web.

Tóm lại, JavaScript là một ngôn ngữ linh hoạt và mạnh mẽ, có thể được sử dụng trên nhiều nền tảng và cho nhiều mục đích khác nhau.

| Weakly Typed Language                  | Object-Oriented Language                 | Veratile Language                         |
| -------------------------------------- | ---------------------------------------- | ----------------------------------------- |
| No explicit type assignment            | Data can be organized in logical objects | Runs in browser & directly on a PC/server |
| Data types can be switched dynamically | Primitive and reference types            | Can perform a broad variety of tasks      |

## Core Syntax Refresher

In this module, you'll experiment with JavaScript basics using Node.js. Create a file named `play.js` and explore core language features like variables and functions:

1. **Variables**: Define variables using `var`, `let`, or `const`. Examples include:

    - `var name = 'Max';` (String)
    - `var age = 30;` (Number)
    - `var hasHobbies = true;` (Boolean)

2. **Functions**: Define functions with the `function` keyword. For example:

    ```javascript
    function summariseUser(userName, userAge, userHasHobbies) {
        return "Name is " + userName + ", age is " + userAge + ", has hobbies: " + userHasHobbies;
    }
    ```

    - Call functions using parentheses: `summariseUser('Max', 30, true);`

3. **Execution**: Run your file with Node.js using the command `node play.js` in the terminal to see the output.

4. **Scoping**: Understand that variables defined inside a function (local variables) are not accessible outside the function.

The goal is to become familiar with handling variables, defining and calling functions, and understanding scope. In the next lecture, you'll explore more advanced topics.

## let & const

Trong mô-đun này, bạn sẽ khám phá một số cú pháp JavaScript thế hệ mới:

1. **Khai báo biến**:

    - **`var`**: Từ khóa cũ dùng để tạo biến. Hiện tại nó đã khá lỗi thời.
    - **`let`**: Từ khóa hiện đại tạo biến với phạm vi khối (block-level scope). Được ưa chuộng hơn `var` cho hầu hết các trường hợp.
    - **`const`**: Từ khóa tạo ra các hằng số, chỉ ra rằng giá trị của biến không nên thay đổi. Sử dụng `const` giúp làm rõ ý định của bạn và có thể ngăn ngừa sự thay đổi không mong muốn.

2. **Cách sử dụng**:

    - Sử dụng `let` cho các biến có thể thay đổi giá trị.
    - Sử dụng `const` cho các giá trị nên giữ nguyên suốt mã nguồn.

3. **Ví dụ**:

    ```javascript
    const name = "Max"; // Giá trị hằng số
    let age = 30; // Biến có thể thay đổi
    const hasHobbies = true; // Giá trị hằng số
    ```

4. **Xử lý lỗi**:
    - Nếu bạn cố gắng thay đổi giá trị của biến `const`, bạn sẽ nhận được lỗi. Điều này giúp đảm bảo bạn không vô tình thay đổi các giá trị nên giữ nguyên.

Việc sử dụng `let` và `const` một cách hợp lý giúp bạn viết mã rõ ràng và đáng tin cậy hơn.

## Arrow Functions

**Các hàm mũi tên (Arrow Functions) trong JavaScript**

1. **Giới thiệu:**

    - `let` và `const` là những tính năng tương đối mới trong JavaScript.
    - Một tính năng mới khác là hàm mũi tên (arrow functions).

2. **Cú pháp cơ bản:**

    - Trước đây, bạn có thể định nghĩa hàm bằng cách tạo một hàm ẩn danh và gán nó cho một biến hoặc hằng số. Ví dụ:

        ```javascript
        const summarizeUser = function (userName, userAge, userHasHobbies) {
            return `Name is ${userName}, age is ${userAge}, and has hobbies: ${userHasHobbies}`;
        };
        ```

    - Với hàm mũi tên, cú pháp ngắn gọn hơn. Thay vì dùng từ khóa `function`, bạn dùng toán tử mũi tên (`=>`). Ví dụ:

        ```javascript
        const summarizeUser = (userName, userAge, userHasHobbies) =>
            `Name is ${userName}, age is ${userAge}, and has hobbies: ${userHasHobbies}`;
        ```

3. **Cú pháp rút gọn:**

    - Nếu hàm chỉ có một câu lệnh trả về (return statement), bạn có thể bỏ ngoặc nhọn `{}` và từ khóa `return`. Ví dụ:

        ```javascript
        const add = (a, b) => a + b;
        ```

    - Nếu hàm có một tham số, bạn có thể bỏ ngoặc đơn quanh tham số đó:

        ```javascript
        const increment = a => a + 1;
        ```

    - Nếu hàm không có tham số, bạn phải dùng cặp ngoặc đơn trống:

        ```javascript
        const greet = () => "Hello!";
        ```

4. **Sử dụng trong thực tế:**
    - Hàm mũi tên cung cấp cú pháp ngắn gọn và có sự khác biệt trong cách xử lý từ khóa `this`. Để hiểu rõ hơn về `this` và cách hàm mũi tên hỗ trợ, xem thêm tài liệu đính kèm.

Hàm mũi tên là một phần quan trọng của JavaScript hiện đại và bạn sẽ thấy chúng được sử dụng xuyên suốt khóa học.

## Objects: Properties & Methods

**Làm việc với Đối tượng trong JavaScript**

1. **Tạo Đối tượng:**

    - Đối tượng trong JavaScript được tạo ra bằng cách sử dụng dấu ngoặc nhọn `{}`. Trong đối tượng, bạn có thể định nghĩa các cặp khóa-giá trị. Ví dụ:

        ```javascript
        const person = {
            name: "Max",
            age: 29,
        };
        ```

    - Bạn có thể in đối tượng ra bằng cách sử dụng `console.log(person)`.

2. **Thêm Hàm vào Đối tượng:**

    - Đối tượng không chỉ chứa các biến mà còn có thể chứa các hàm. Ví dụ:

        ```javascript
        const person = {
            name: "Max",
            age: 29,
            greet: () => {
                console.log("Hi, I am " + this.name);
            },
        };
        ```

    - Tuy nhiên, hàm mũi tên (`arrow function`) sử dụng từ khóa `this` không hoạt động như mong đợi trong đối tượng. Trong trường hợp này, `this` tham chiếu đến phạm vi toàn cục, không phải đối tượng. Do đó, `this.name` sẽ không được xác định.

3. **Sửa Lỗi với Hàm Truyền Thống:**

    - Để `this` tham chiếu đúng đối tượng, bạn có thể sử dụng hàm truyền thống thay vì hàm mũi tên:

        ```javascript
        const person = {
            name: "Max",
            age: 29,
            greet: function () {
                console.log("Hi, I am " + this.name);
            },
        };
        ```

    - Trong trường hợp này, `this.name` sẽ trả về 'Max' như mong đợi.

4. **Cú pháp Hàm trong Đối tượng:**

    - Bạn có thể viết hàm trong đối tượng mà không cần sử dụng từ khóa `function`, bằng cách loại bỏ dấu hai chấm `:` và thêm dấu ngoặc đơn `()` sau tên khóa. Ví dụ:

        ```javascript
        const person = {
            name: "Max",
            age: 29,
            greet() {
                console.log("Hi, I am " + this.name);
            },
        };
        ```

5. **Kết quả:**
    - Khi bạn gọi phương thức `greet` trên đối tượng `person`, nó sẽ in ra `Hi, I am Max`.

Đây là cách bạn có thể làm việc với đối tượng trong JavaScript và cách bạn nên định nghĩa các phương thức để `this` hoạt động chính xác trong ngữ cảnh của đối tượng.

## Arrays & Array Methods

**Mảng trong JavaScript và Node.js**

1. **Tạo Mảng:**

    - Mảng trong JavaScript được định nghĩa bằng dấu ngoặc vuông `[]`. Bạn có thể chứa bất kỳ loại dữ liệu nào bên trong mảng, bao gồm chuỗi, số, giá trị boolean, đối tượng hoặc thậm chí là mảng khác.

        ```javascript
        const hobbies = ["sports", "cooking"];
        ```

2. **Lặp qua Mảng:**

    - Bạn có thể sử dụng vòng lặp để duyệt qua các phần tử trong mảng. Ví dụ, vòng lặp `for...of`:

        ```javascript
        for (const hobby of hobbies) {
            console.log(hobby);
        }
        ```

    - Trong ví dụ này, `console.log` sẽ in ra từng phần tử trong mảng, do đó, bạn sẽ thấy 'sports' và 'cooking' được in ra trên hai dòng khác nhau.

3. **Phương thức Mảng:**

    - JavaScript cung cấp nhiều phương thức tích hợp sẵn để làm việc với mảng. Ví dụ, phương thức `map` cho phép bạn biến đổi các phần tử trong mảng:

        ```javascript
        const updatedHobbies = hobbies.map(hobby => "Hobby: " + hobby);
        ```

    - Phương thức `map` không thay đổi mảng gốc mà trả về một mảng mới với các phần tử đã được biến đổi.

4. **Cú pháp Hàm Mũi Tên với `map`:**

    - Trong ví dụ trên, chúng ta sử dụng hàm mũi tên để biến đổi từng phần tử trong mảng. Nếu chỉ có một câu lệnh trong hàm mũi tên, bạn có thể bỏ qua dấu ngoặc nhọn `{}` và từ khóa `return`:

        ```javascript
        const updatedHobbies = hobbies.map(hobby => "Hobby: " + hobby);
        ```

5. **Kết quả:**

    - Khi bạn chạy mã, bạn sẽ thấy mảng gốc không bị thay đổi:

        ```javascript
        console.log(hobbies); // ['sports', 'cooking']
        console.log(updatedHobbies); // ['Hobby: sports', 'Hobby: cooking']
        ```

6. **Tài nguyên thêm:**
    - Có nhiều phương thức khác để làm việc với mảng, chẳng hạn như `filter`, `reduce`, `forEach`, và nhiều phương thức khác. Hãy tham khảo tài liệu MDN để tìm hiểu thêm về các phương thức này và cách sử dụng chúng.

**Tóm tắt:**

-   Mảng là một cấu trúc dữ liệu quan trọng trong JavaScript.
-   Bạn có thể lặp qua các phần tử trong mảng và sử dụng các phương thức tích hợp sẵn để thao tác với mảng.
-   Phương thức `map` là một công cụ mạnh mẽ để tạo ra các mảng mới từ mảng gốc với các phần tử đã được biến đổi.

Nếu có bất kỳ câu hỏi nào về cách sử dụng mảng hoặc các phương thức liên quan, hãy cho tôi biết!

## Arrays, Obejects & Reference Types

**Hiểu về Kiểu Tham Chiếu và Kiểu Nguyên Thủy trong JavaScript**

1. **Kiểu Nguyên Thủy và Kiểu Tham Chiếu:**

    - Trong JavaScript, có hai loại kiểu dữ liệu chính: kiểu nguyên thủy (primitive types) và kiểu tham chiếu (reference types).
    - Kiểu nguyên thủy bao gồm các loại như số, chuỗi, boolean, null, undefined, và symbol. Khi bạn gán một giá trị kiểu nguyên thủy cho một biến, biến đó chứa trực tiếp giá trị đó.
    - Kiểu tham chiếu bao gồm đối tượng (objects) và mảng (arrays). Khi bạn gán một đối tượng hoặc mảng cho một biến, biến đó chứa một địa chỉ (hoặc con trỏ) đến vị trí trong bộ nhớ nơi đối tượng hoặc mảng được lưu trữ, chứ không phải là giá trị thực sự.

2. **Thay Đổi Đối Tượng và Mảng:**

    - Mặc dù bạn không thể thay đổi địa chỉ mà một biến kiểu tham chiếu trỏ đến (vì địa chỉ đó là cố định), bạn vẫn có thể thay đổi nội dung của đối tượng hoặc mảng mà biến đó trỏ đến.
    - Ví dụ, nếu bạn có một mảng được gán cho một biến `const`, bạn không thể gán lại `const` với một mảng khác, nhưng bạn có thể thay đổi nội dung của mảng đó.

3. **Ví dụ với Mảng:**

    ```javascript
    const hobbies = ["sports", "cooking"];
    hobbies.push("programming"); // Thêm một phần tử mới vào mảng
    console.log(hobbies); // ['sports', 'cooking', 'programming']
    ```

    - Trong ví dụ này, mặc dù `hobbies` là một `const`, bạn vẫn có thể sử dụng phương thức `push` để thêm phần tử mới vào mảng. Điều này không vi phạm quy tắc của `const` vì bạn không thay đổi địa chỉ của mảng mà chỉ thay đổi nội dung của mảng đó.

4. **Giải Thích:**
    - Khi bạn sử dụng `const` để khai báo một biến, bạn không thể thay đổi địa chỉ mà biến đó trỏ đến. Tuy nhiên, nếu biến đó trỏ đến một đối tượng hoặc mảng, bạn có thể thay đổi nội dung của đối tượng hoặc mảng đó mà không vi phạm quy tắc `const`.
    - Điều này là do `const` đảm bảo rằng địa chỉ của đối tượng hoặc mảng không thay đổi, nhưng nội dung của đối tượng hoặc mảng có thể thay đổi.

**Tóm tắt:**

-   **Kiểu nguyên thủy**: Chứa giá trị trực tiếp.
-   **Kiểu tham chiếu**: Chứa địa chỉ đến vị trí trong bộ nhớ nơi đối tượng hoặc mảng được lưu trữ.
-   **`const` và kiểu tham chiếu**: `const` không cho phép thay đổi địa chỉ mà biến trỏ đến, nhưng bạn vẫn có thể thay đổi nội dung của đối tượng hoặc mảng mà biến đó trỏ đến.

Nếu có bất kỳ câu hỏi nào hoặc cần thêm thông tin về kiểu dữ liệu trong JavaScript, cứ hỏi nhé!

## Spread operator & Rest Parameters

**Hiểu về Toán Tử Spread và Rest trong JavaScript**

1. **Toán Tử Spread:**

    - **Định Nghĩa:** Toán tử spread (`...`) cho phép bạn "spread" các phần tử của một mảng hoặc các thuộc tính của một đối tượng ra ngoài.
    - **Sử Dụng với Mảng:** Khi bạn muốn sao chép một mảng mà không thay đổi mảng gốc, bạn có thể dùng toán tử spread để tạo một mảng mới bao gồm tất cả các phần tử của mảng gốc.

        ```javascript
        const hobbies = ["sports", "cooking"];
        const copiedHobbies = [...hobbies];
        console.log(copiedHobbies); // ['sports', 'cooking']
        ```

    - **Sử Dụng với Đối Tượng:** Tương tự, bạn có thể sao chép một đối tượng bằng toán tử spread.

        ```javascript
        const person = { name: "Max", age: 29 };
        const copiedPerson = { ...person };
        console.log(copiedPerson); // { name: 'Max', age: 29 }
        ```

2. **Toán Tử Rest:**

    - **Định Nghĩa:** Toán tử rest (`...`) có tác dụng ngược lại, dùng để gộp các đối số của một hàm thành một mảng.
    - **Sử Dụng trong Hàm:** Khi bạn muốn nhận tất cả các đối số truyền vào hàm dưới dạng mảng, bạn có thể sử dụng toán tử rest.

        ```javascript
        const toArray = (...args) => args;
        console.log(toArray(1, 2, 3)); // [1, 2, 3]
        console.log(toArray(1, 2, 3, 4)); // [1, 2, 3, 4]
        ```

3. **So Sánh Toán Tử Spread và Rest:**
    - **Spread Operator:** Sử dụng để "spread" phần tử của mảng hoặc thuộc tính của đối tượng ra ngoài, thường dùng khi tạo bản sao hoặc kết hợp các mảng/đối tượng.
    - **Rest Operator:** Sử dụng để gom tất cả các đối số hàm thành một mảng, thường dùng để xử lý số lượng đối số không xác định trong hàm.

**Tóm tắt:**

-   **Spread Operator (`...`)**: Dùng để sao chép hoặc kết hợp các phần tử/thuộc tính từ mảng hoặc đối tượng.
-   **Rest Operator (`...`)**: Dùng để gom tất cả các đối số hàm vào một mảng.

**Ví dụ:**

-   **Spread Operator:**

    ```javascript
    const arr = [1, 2, 3];
    const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
    ```

-   **Rest Operator:**

    ```javascript
    const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum(1, 2, 3, 4)); // 10
    ```

Nếu bạn có bất kỳ câu hỏi nào về toán tử spread hoặc rest, hay cần thêm ví dụ cụ thể, hãy cho tôi biết nhé!

## Destructuring

**Destructuring trong JavaScript:**

Destructuring là một tính năng mạnh mẽ trong JavaScript cho phép bạn dễ dàng trích xuất các giá trị từ các đối tượng hoặc mảng vào các biến. Đây là cách giúp mã nguồn của bạn gọn gàng và dễ đọc hơn.

### 1. Destructuring Đối Tượng (Object Destructuring)

**Khi sử dụng destructuring đối tượng:**

-   **Cú Pháp:**

    ```javascript
    const person = { name: "Max", age: 29 };
    const { name, age } = person;
    console.log(name); // Max
    console.log(age); // 29
    ```

-   **Trong Hàm:**
    Bạn có thể sử dụng destructuring trong danh sách tham số hàm để chỉ trích xuất các thuộc tính mà bạn cần.

    ```javascript
    function printName({ name }) {
        console.log(name);
    }
    const person = { name: "Max", age: 29 };
    printName(person); // Max
    ```

### 2. Destructuring Mảng (Array Destructuring)

**Khi sử dụng destructuring mảng:**

-   **Cú Pháp:**

    ```javascript
    const hobbies = ["sports", "cooking"];
    const [hobby1, hobby2] = hobbies;
    console.log(hobby1); // sports
    console.log(hobby2); // cooking
    ```

-   **Vị Trí Quan Trọng:**
    Trong destructuring mảng, các giá trị được trích xuất theo vị trí của chúng, không phải theo tên.

    ```javascript
    const [first, , third] = ["apple", "banana", "cherry"];
    console.log(first); // apple
    console.log(third); // cherry
    ```

### **Các Tính Năng Nâng Cao:**

-   **Gán Giá Trị Mặc Định:**
    Bạn có thể gán giá trị mặc định cho các thuộc tính không tồn tại trong đối tượng hoặc các phần tử không có trong mảng.

    ```javascript
    const person = { name: "Max" };
    const { name, age = 30 } = person;
    console.log(name); // Max
    console.log(age); // 30
    ```

-   **Destructuring Nested Objects:**
    Nếu bạn có đối tượng lồng nhau, bạn có thể sử dụng destructuring để trích xuất các thuộc tính từ các đối tượng con.

    ```javascript
    const person = { name: "Max", address: { city: "New York", zip: "10001" } };
    const {
        name,
        address: { city, zip },
    } = person;
    console.log(name); // Max
    console.log(city); // New York
    console.log(zip); // 10001
    ```

-   **Rest Parameters trong Destructuring:**
    Bạn có thể sử dụng toán tử rest (`...`) để thu thập các phần tử còn lại của mảng hoặc các thuộc tính còn lại của đối tượng.

    ```javascript
    const person = { name: "Max", age: 29, country: "USA" };
    const { name, ...rest } = person;
    console.log(name); // Max
    console.log(rest); // { age: 29, country: 'USA' }
    ```

### **Tóm Tắt:**

-   **Destructuring đối tượng:** Trích xuất các thuộc tính từ đối tượng và gán chúng vào biến với tên tương ứng.
-   **Destructuring mảng:** Trích xuất các phần tử từ mảng theo vị trí và gán chúng vào biến.
-   **Giá trị mặc định:** Cung cấp giá trị mặc định cho các thuộc tính không tồn tại hoặc phần tử không có trong mảng.
-   **Destructuring lồng nhau:** Trích xuất các thuộc tính từ các đối tượng lồng nhau.

Destructuring giúp mã nguồn của bạn trở nên rõ ràng hơn và dễ duy trì hơn. Nếu bạn có bất kỳ câu hỏi nào về destructuring hoặc cần thêm ví dụ, hãy cho tôi biết!

## Async Code & Promises

**Mã bất đồng bộ trong JavaScript:**

Mã bất đồng bộ là rất quan trọng để xử lý các thao tác mất thời gian, chẳng hạn như các hoạt động I/O, các yêu cầu mạng, và bộ hẹn giờ. Nó cho phép JavaScript tiếp tục thực thi các tác vụ khác trong khi chờ đợi các thao tác nhất định hoàn tất.

### **1. Hiểu về Mã Bất Đồng Bộ:**

**Mã Đồng Bộ:**

-   Thực thi theo dòng lệnh.
-   Mỗi dòng chờ đợi dòng trước đó hoàn tất.
-   Ví dụ:

    ```javascript
    console.log("Hello");
    console.log("Hi");
    ```

    Kết quả:

    ```
    Hello
    Hi
    ```

**Mã Bất Đồng Bộ:**

-   Thực thi độc lập với luồng chính.
-   Cho phép luồng chính tiếp tục chạy các mã khác trong khi chờ đợi thao tác bất đồng bộ hoàn tất.
-   Ví dụ sử dụng `setTimeout`:

    ```javascript
    console.log("Hello");
    setTimeout(() => {
        console.log("Timer is done");
    }, 2000); // 2000 mili giây = 2 giây
    console.log("Hi");
    ```

    Kết quả:

    ```
    Hello
    Hi
    Timer is done
    ```

### **2. Callback (Hàm Gọi Lại):**

**Hàm Callback:**

-   Các hàm được truyền dưới dạng đối số cho các hàm khác.
-   Được sử dụng để xử lý các hoạt động bất đồng bộ.

**Ví dụ:**

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Done");
    }, 1500); // 1500 mili giây = 1.5 giây
}

fetchData(text => {
    console.log(text);
});
```

**Callback Lồng Ghép:**

-   Có thể dẫn đến "callback hell" hoặc các callback lồng ghép sâu.

**Ví dụ:**

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data");
    }, 1500);
}

setTimeout(() => {
    fetchData(data => {
        console.log(data);
        fetchData(moreData => {
            console.log(moreData);
        });
    });
}, 2000);
```

### **3. Promises (Hứa):**

**Promises:**

-   Đại diện cho một giá trị có thể có ngay bây giờ, trong tương lai, hoặc không bao giờ.
-   Có ba trạng thái: đang chờ, hoàn tất, và bị từ chối.
-   Sử dụng `.then()` để xử lý các giá trị đã hoàn tất và `.catch()` cho lỗi.

**Ví dụ:**

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data");
        }, 1500);
    });
}

fetchData()
    .then(data => {
        console.log(data);
        return fetchData(); // Lồng ghép thêm một promise
    })
    .then(moreData => {
        console.log(moreData);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```

### **4. Lồng Ghép Promises:**

**Lồng Ghép:**

-   Cho phép bạn xử lý nhiều thao tác bất đồng bộ liên tiếp.

**Ví dụ:**

```javascript
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data");
        }, 1500);
    });
}

fetchData()
    .then(data => {
        console.log(data);
        return fetchData(); // Trả về một promise mới
    })
    .then(moreData => {
        console.log(moreData);
    });
```

### **5. Async/Await:**

**Async/Await:**

-   Cú pháp tóm tắt cho promises.
-   Giúp mã bất đồng bộ trông giống như mã đồng bộ.
-   Các hàm `async` trả về một promise.
-   `await` tạm dừng việc thực thi của hàm `async` cho đến khi promise được hoàn tất.

**Ví dụ:**

```javascript
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data");
        }, 1500);
    });
}

async function fetchDataAndLog() {
    const data = await fetchData();
    console.log(data);
    const moreData = await fetchData();
    console.log(moreData);
}

fetchDataAndLog();
```

### **Tóm Tắt:**

-   **Mã Bất Đồng Bộ:** Không chặn, cho phép các mã khác chạy trong khi chờ đợi các thao tác hoàn tất.
-   **Callbacks:** Các hàm được truyền để xử lý kết quả bất đồng bộ.
-   **Promises:** Đại diện cho các giá trị trong tương lai và giúp quản lý các thao tác bất đồng bộ với `.then()` và `.catch()`.
-   **Async/Await:** Làm cho việc xử lý promises trở nên dễ đọc hơn, giúp mã bất đồng bộ trông giống như mã đồng bộ.

Lập trình bất đồng bộ là rất quan trọng cho các ứng dụng JavaScript hiện đại. Hiểu những khái niệm này sẽ giúp bạn xử lý các thao tác liên quan đến việc chờ đợi các quá trình bên ngoài một cách hiệu quả. Nếu bạn có thêm câu hỏi hoặc cần làm rõ, đừng ngần ngại hỏi nhé!
