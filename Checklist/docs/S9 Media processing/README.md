### 9. Xử lý media

#### Camera và Image Picker

Để sử dụng camera và chọn hình ảnh từ thư viện, bạn có thể sử dụng các thư viện như `react-native-image-picker` hoặc `expo-image-picker` (nếu bạn đang sử dụng Expo).

**Sử dụng `react-native-image-picker`**:
Cài đặt:

```sh
npm install react-native-image-picker
```

Ví dụ sử dụng:

```jsx
import React from "react";
import { View, Button, Image, Text } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const ImagePickerExample = () => {
    const [imageUri, setImageUri] = React.useState(null);

    const openCamera = () => {
        launchCamera({ mediaType: "photo" }, response => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
            } else {
                const uri = response.assets[0].uri;
                setImageUri(uri);
            }
        });
    };

    const openImageLibrary = () => {
        launchImageLibrary({ mediaType: "photo" }, response => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
            } else {
                const uri = response.assets[0].uri;
                setImageUri(uri);
            }
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title="Open Camera" onPress={openCamera} />
            <Button title="Open Image Library" onPress={openImageLibrary} />
            {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
        </View>
    );
};

export default ImagePickerExample;
```

**Sử dụng `expo-image-picker`**:
Cài đặt:

```sh
expo install expo-image-picker
```

Ví dụ sử dụng:

```jsx
import React, { useState } from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ExpoImagePickerExample = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
};

export default ExpoImagePickerExample;
```

#### Video playback với React Native Video

**React Native Video** là một thư viện mạnh mẽ để phát video trong các ứng dụng React Native.

Cài đặt:

```sh
npm install react-native-video
```

Ví dụ sử dụng:

```jsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";

const VideoExample = () => {
    return (
        <View style={styles.container}>
            <Video
                source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
                style={styles.video}
                controls={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    video: {
        width: 320,
        height: 240,
    },
});

export default VideoExample;
```

#### Audio playback với React Native Sound

**React Native Sound** là một thư viện đơn giản để phát âm thanh.

Cài đặt:

```sh
npm install react-native-sound
```

Sử dụng `react-native-sound`:

```jsx
import React from "react";
import { View, Button } from "react-native";
import Sound from "react-native-sound";

const AudioExample = () => {
    let sound;

    const playSound = () => {
        sound = new Sound("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
                console.log("Failed to load the sound", error);
                return;
            }
            sound.play(success => {
                if (success) {
                    console.log("Successfully finished playing");
                } else {
                    console.log("Playback failed due to audio decoding errors");
                    sound.reset();
                }
            });
        });
    };

    const stopSound = () => {
        if (sound) {
            sound.stop(() => {
                console.log("Stop playback");
            });
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title="Play Sound" onPress={playSound} />
            <Button title="Stop Sound" onPress={stopSound} />
        </View>
    );
};

export default AudioExample;
```

### Tổng kết

1. **Camera và Image Picker**:

    - Sử dụng `react-native-image-picker` hoặc `expo-image-picker` để chụp ảnh và chọn ảnh từ thư viện.

2. **Video playback với React Native Video**:

    - Sử dụng `react-native-video` để phát video trong ứng dụng của bạn.

3. **Audio playback với React Native Sound**:
    - Sử dụng `react-native-sound` để phát âm thanh.

#### Khi chúng ta sử dụng react-native-video thì chúng ta có thể mở fullscreen màn hình video đó được không

Có, bạn có thể mở fullscreen cho video khi sử dụng `react-native-video` bằng cách sử dụng thư viện `react-native-video-controls`, giúp bạn dễ dàng thêm các điều khiển và tính năng fullscreen cho video.

Để cài đặt và sử dụng `react-native-video-controls`, bạn có thể làm theo các bước sau:

### 1. Cài đặt `react-native-video-controls`

```sh
npm install react-native-video-controls
```

### 2. Sử dụng `react-native-video-controls` trong dự án của bạn

Dưới đây là một ví dụ về cách sử dụng `react-native-video-controls` để phát video và mở fullscreen:

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import VideoPlayer from "react-native-video-controls";

const VideoControlsExample = () => {
    return (
        <View style={styles.container}>
            <VideoPlayer
                source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
                style={styles.video}
                fullscreenOrientation="all"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    video: {
        width: "100%",
        height: 200,
    },
});

export default VideoControlsExample;
```

### Giải thích mã nguồn

1. **Import `VideoPlayer` từ `react-native-video-controls`**:

    - `VideoPlayer` cung cấp các điều khiển như play/pause, seek, và fullscreen.

2. **Cấu hình `VideoPlayer`**:
    - `source`: Đường dẫn tới video cần phát.
    - `style`: Định dạng cho thành phần video.
    - `fullscreenOrientation`: Cho phép bạn xác định hướng khi video ở chế độ fullscreen. Sử dụng `"all"` để cho phép cả chế độ landscape và portrait.

### Thêm một số tùy chọn

-   **Control display**: Bạn có thể tùy chỉnh hiển thị các điều khiển, như thời gian hiển thị hay tự động ẩn điều khiển.
-   **Custom controls**: Bạn có thể thay thế các điều khiển mặc định bằng các thành phần tùy chỉnh của riêng bạn.
