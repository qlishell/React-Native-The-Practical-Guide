import { Platform } from "react-native";

import GuessLogItem from "./game/GuessLogItem";
import NumberContainer from "./game/NumberContainer";
import Card from "./ui/Card";
import InstructionText from "./ui/InstructionText";
import PrimaryButton from "./ui/PrimaryButton";

const Title = Platform.OS === "ios" ? require("./ui/Title.ios").default : require("./ui/Title.android").default;

export { Card, GuessLogItem, InstructionText, NumberContainer, PrimaryButton, Title };
