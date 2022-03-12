import { Dimensions } from "react-native";
const wp = Dimensions.get("window").width;

const responsiveFonts = (font) => {
  if (font == 12) return wp * 0.029;
  else return wp * 0.034; // 14
};

export default responsiveFonts;
