Để sử dụng Prettier để sắp xếp các import theo thứ tự và loại bỏ các import không sử dụng trong Visual Studio Code, bạn sẽ cần cài đặt và cấu hình thêm một vài công cụ khác, chẳng hạn như `eslint` và `eslint-plugin-import`. Dưới đây là các bước chi tiết để thiết lập và cấu hình:

### Bước 1: Cài đặt Prettier và ESLint

1. **Cài đặt các gói cần thiết:**

    ```bash
    yarn add prettier eslint eslint-config-prettier eslint-plugin-import eslint-plugin-unused-imports -D
    ```

2. **Cài đặt Prettier và ESLint extensions trong VSCode:**
    - Mở VSCode, vào Extensions (`Ctrl + Shift + X` hoặc `Cmd + Shift + X` trên macOS).
    - Tìm và cài đặt các extension: `Prettier - Code formatter` và `ESLint`.

### Bước 2: Cấu hình Prettier và ESLint

1. **Tạo hoặc cập nhật file cấu hình Prettier (`.prettierrc`):**

    ```json
    {
        "singleQuote": true,
        "trailingComma": "all",
        "printWidth": 80,
        "tabWidth": 2,
        "semi": true
    }
    ```

2. **Tạo hoặc cập nhật file cấu hình ESLint (`.eslintrc.json`):**
    ```json
    {
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:prettier/recommended"
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true
            },
            "ecmaVersion": 12,
            "sourceType": "module"
        },
        "plugins": ["react", "@typescript-eslint", "import", "unused-imports"],
        "rules": {
            "prettier/prettier": "error",
            "import/order": [
                "error",
                {
                    "groups": ["builtin", "external", "internal"],
                    "alphabetize": { "order": "asc", "caseInsensitive": true }
                }
            ],
            "unused-imports/no-unused-imports": "error",
            "@typescript-eslint/no-unused-vars": "off",
            "no-unused-vars": "off"
        },
        "settings": {
            "react": {
                "version": "detect"
            }
        }
    }
    ```

### Bước 3: Cấu hình VSCode để sử dụng Prettier và ESLint

1. **Mở cài đặt của VSCode (`Ctrl + ,` hoặc `Cmd + ,` trên macOS).**
2. **Tìm kiếm `Format On Save` và kích hoạt tùy chọn này.**
3. **Cấu hình để Prettier và ESLint tự động fix lỗi khi lưu file:**
    - Tạo hoặc cập nhật file `settings.json` của VSCode (`.vscode/settings.json`):
    ```json
    {
        "editor.codeActionsOnSave": {
            "source.fixAll": true,
            "source.organizeImports": true
        },
        "editor.formatOnSave": true,
        "eslint.alwaysShowStatus": true,
        "eslint.format.enable": true,
        "files.autoSave": "onFocusChange",
        "[javascript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        }
    }
    ```

### Bước 4: Sử dụng

Khi bạn đã hoàn thành các bước trên, mỗi khi bạn lưu một file, Prettier sẽ định dạng mã của bạn, ESLint sẽ sắp xếp các import theo thứ tự và loại bỏ các import không sử dụng.

### Chạy ESLint và Prettier thủ công (nếu cần)

Nếu bạn muốn kiểm tra và fix tất cả các file trong dự án của mình thủ công, bạn có thể chạy lệnh sau trong terminal:

```bash
yarn eslint . --fix
yarn prettier --write .
```

Với cấu hình trên, bạn đã thiết lập môi trường VSCode của mình để sử dụng Prettier và ESLint để tự động sắp xếp các import theo thứ tự và loại bỏ các import không sử dụng.
