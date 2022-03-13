import { Dimensions } from "react-native";
const wp = Dimensions.get("window").width;

const responsiveFonts = (font) => {
  if (font == 10) return wp * 0.026;
  else if (font == 12) return wp * 0.029;
  else if (font == 14) return wp * 0.034;
  else if (font == 24) return wp * 0.063;
  else 0;
};

export default responsiveFonts;
