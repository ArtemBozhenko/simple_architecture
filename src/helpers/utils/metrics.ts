
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375; // use your guidelines
const guidelineBaseHeight = 812; // use your guidelines

// use for: height, marginTop, marginBottom, marginVertical, line-height, paddingTop, paddingBottom, paddingVertical
const hScale = (size) => (width / guidelineBaseWidth) * size;
// use for: width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight, paddingHorizontal
const wScale = (size) => (height / guidelineBaseHeight) * size;
// use for: font-size, borderRadius 
const mScale = (size, factor = 0.5) => size + (hScale(size) - size) * factor;

export { hScale, wScale, mScale };