# Redux vs React's Context API

Trong nhiều năm, Redux là giải pháp phổ biến nhất để quản lý trạng thái toàn cầu trong ứng dụng React. Context API có thay đổi điều đó không?

## What is Redux?

Redux được sử dụng để quản lý trạng thái của ứng dụng React ở một nơi tập trung. "State" chỉ đơn giản đề cập đến dữ liệu bạn cần để hiển thị giao diện người dùng một cách chính xác. Ví dụ sẽ là:

-   Sản phẩm trong giỏ hàng
-   Thông tin xem người dùng có đang đợi yêu cầu http hoàn tất .

Về mặt kỹ thuật, Redux không bị giới hạn ở việc sử dụng trong ứng dụng React - và thực tế cũng có những triển khai trong các công nghệ khác (ví dụ: NgRx cho Angular). Nhưng Redux đặc biệt phổ biến với React.

Nó bao gồm bốn khối xây dựng chính:

1. _Một trạng thái tập trung, duy nhất_ (tức là một đối tượng JS toàn cầu mà bạn có thể nói) không thể truy cập trực tiếp hoặc có thể thay đổi.

2. _Các hàm reducer_ chứa logic để thay đổi và cập nhật trạng thái chung (bằng cách trả về bản sao mới của trạng thái cũ với tất cả các thay đổi cần thiết).

3. _Các hành động actions_ có thể được gửi đi để kích hoạt chức năng reducer chạy.

4. _Đăng ký subscriptions_ để lấy dữ liệu ra khỏi trạng thái chung (ví dụ: để sử dụng nó trong các thành phần React).

![image](<https://a.storyblok.com/f/42126/9a59b5128d/redux-overview.png/m/800x0/filters:quality(70)/>)

Ví dụ: trong ứng dụng React, bạn thường có một vài hành động hoặc người tạo hành động (với redux thunk được sử dụng để hỗ trợ các hành động không đồng bộ):

```javascript
// actions.js
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export const addProductToCart = product => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: ADD_PRODUCT_TO_CART,
                payload: product,
            });
        }, 700);
    };
};

export const removeProductFromCart = productId => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: REMOVE_PRODUCT_FROM_CART,
                payload: productId,
            });
        }, 700);
    };
};
```

Sau đó, bạn cũng có reducer (bộ giảm tốc) để cập nhật trạng thái toàn cầu của mình:

```javascript
// reducers.js
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./actions";

const initialState = {
    products: [
        { id: "p1", title: "Gaming Mouse", price: 29.99 },
        { id: "p2", title: "Harry Potter 3", price: 9.99 },
        // ...
    ],
    cart: [],
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            // Shortened! Cart updating logic would be found here
            // See the example project linked above
            return { ...state, cart: updatedCart };
        case REMOVE_PRODUCT_FROM_CART:
            // Shortened, too!
            return { ...state, cart: updatedCart };
        default:
            return state;
    }
};
```

Một store sẽ được xây dựng và chuyển đến một trình bao bọc xung quanh thành phần ứng dụng gốc root:

```javascript
// index.js
// Other imports...
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

// Other imports...
import shopReducer from "./store/reducers";

const store = createStore(shopReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        {/* highlight-line */}
        <App />
    </Provider>,
    document.getElementById("root"),
);
```

Sau đó, mọi thành phần trong ứng dụng đều có thể được kết nối với store Redux toàn cầu (thông qua gói react-redux):

```javascript
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../store/actions";
import MainNavigation from "./MainNavigation";

const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const cartItemCount = useSelector(state => state.cart.reduce((count, curItem) => count + curItem.quantity, 0));

    const handleAddProductToCart = product => {
        dispatch(addProductToCart(product));
    };

    return (
        <React.Fragment>
            <MainNavigation cartItemNumber={cartItemCount} />
            <main className="products">
                {/* Shortened: Content gets rendered here! */}
                {/* Example button to add a product */}
                {products.map(product => (
                    <button key={product.id} onClick={() => handleAddProductToCart(product)}>
                        Add {product.name} to cart
                    </button>
                ))}
            </main>
        </React.Fragment>
    );
};

export default ProductsPage;
```

## What is React's Context API?

React's Context API sẵn sàng giải quyết một vấn đề đơn giản mà bạn sẽ gặp phải trong bất kỳ ứng dụng React không tầm thường nào: Làm cách nào bạn có thể quản lý trạng thái mà bạn cần trong nhiều thành phần không được kết nối trực tiếp?

Chắc chắn, bạn luôn có thể thiết lập các chuỗi props phức tạp được truyền đi khắp nơi (tức là chuyển props qua nhiều lớp thành phần React).

```javascript
const Button = props => (
    <p className={props.theme.light ? "btn--light" : "btn--dark"}>
        {/* highlight-line */}
        Click me
    </p>
);

const Form = props => (
    <form>
        <input type="text" />
        <Button theme={props.theme} /> {/* highlight-line */}
    </form>
);

const App = props => {
    const [theme, setTheme] = useState("light");
    // Theme is managed here
    return (
        <div>
            <Form theme={theme} /> {/* highlight-line */}
        </div>
    );
};
```

Nhưng việc truyền props đi khắp nơi như thế này sẽ khiến các thành phần của bạn khó sử dụng lại hơn vì chúng phải xử lý những props mà chúng không cần. Nó cũng chỉ đơn giản là công việc làm thêm.

Bất kỳ thay đổi nào đối với trạng thái hoặc cấu trúc thành phần của ứng dụng cũng dẫn đến công việc tái cấu trúc đáng kể.

Đó là lý do Redux trở nên phổ biến, nó giải quyết được vấn đề đó! Nó cũng giúp định tuyến những nơi chúng tôi có thể không sử dụng các thành phần của mình thông qua JSX.

```javascript
<Route path="/users" component={Users} />
// Hard to pass props to Users here, since it's not <Users />
```

Tuy nhiên, React's Context API cung cấp một cách truyền dữ liệu có thể so sánh được. Nó thường bao gồm ba khối xây dựng:

-   A Context Object
-   A Context Provider
-   A Context Consumer

React Context API là một công cụ mạnh mẽ để quản lý trạng thái và truyền dữ liệu qua các component trong ứng dụng React mà không cần phải truyền props qua nhiều lớp component. Để sử dụng Context API, bạn thường làm việc với ba thành phần chính:

### 1. Context Object

Đây là đối tượng chính của Context API, được tạo ra bằng cách sử dụng `React.createContext()`. Đối tượng này chứa hai thành phần quan trọng: `Provider` và `Consumer`.

    ```jsx
    const MyContext = React.createContext();
    ```

### 2. Context Provider

Đây là component cung cấp giá trị của context cho các component con. Bạn sử dụng `Provider` từ đối tượng context để bao bọc các component mà bạn muốn chia sẻ dữ liệu với chúng. Nó nhận một prop `value`, chứa dữ liệu hoặc trạng thái mà bạn muốn truyền cho các component con.

    ```jsx
    <MyContext.Provider value={/* giá trị context */}>
      {/* Các component con */}
    </MyContext.Provider>
    ```

### 3. Context Consumer

Đây là component dùng để tiêu thụ giá trị của context. Bạn có thể sử dụng `Consumer` để lấy giá trị từ context và sử dụng nó trong component. Tuy nhiên, trong các phiên bản React mới, bạn có thể sử dụng hook `useContext` thay vì `Consumer`.

    ```jsx
    // Sử dụng Consumer
    <MyContext.Consumer>
      {value => (
        // Sử dụng giá trị context trong component
      )}
    </MyContext.Consumer>

    // Sử dụng hook useContext (cách tiếp cận hiện đại hơn)
    const value = useContext(MyContext);
    ```

Context API rất hữu ích khi bạn cần chia sẻ dữ liệu giữa các component mà không muốn truyền props qua nhiều lớp component. Nó giúp làm cho mã của bạn sạch hơn và dễ duy trì hơn.

## Will React's Context API replace Redux?

Đó là một câu hỏi hay. Thật vậy, có nhiều lý do cho thấy React Context tốt hơn Redux.

Nó được tích hợp vào React và do đó bạn không cần thêm sự phụ thuộc của bên thứ ba - kết quả là gói nhỏ hơn và khả năng bảo trì dự án được cải thiện. API cũng tương đối dễ sử dụng khi bạn đã hiểu rõ về nó (đặc biệt là khi sử dụng hook). Bạn cũng không cần gói như `redux-thunk` để xử lý các hành động không đồng bộ.

Redux không mang lại lợi thế rõ ràng, ngay lập tức ngoài khả năng thêm vào phần mềm trung gian.

**Nhưng có một vấn đề quan trọng!**

Context API (hiện tại) không được xây dựng để cập nhật tần suất cao (trích dẫn của Sebastian Markbage, React Team), nó không được tối ưu hóa cho việc đó. Những người làm `react-redux` đã gặp phải vấn đề này khi họ cố gắng chuyển sang React Context nội bộ trong gói của họ.

Vì vậy, hiện tại, có vẻ như bạn muốn xem xét sử dụng React Context để cập nhật tần suất thấp (ví dụ: thay đổi chủ đề, xác thực người dùng) nhưng không sử dụng nó để quản lý trạng thái chung cho ứng dụng của bạn.
