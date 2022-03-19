import styled, { css } from "styled-components/native";
import { Platform, Dimensions} from "react-native";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export const LocationBox = styled.View`
  background: #fff;

  border: 1px solid #ddd;
  border-radius: 3px;
  flex-direction: row;
  ${Platform.select({
    ios: css`
      margin-top: ${height * 0.02}px;
    `,
    android: css`
      margin-top: ${height * 0.01}px;
      margin-left: ${height * 0.01}px;
    `
  })}
`;

export const LocationText = styled.Text`
  margin: ${height * 0.08} ${height * 0.01}px;
  font-size: ${height * 0.014};
  color: #333;
`;

export const LocationTimeBox = styled.View`
  background: #222;
  padding: ${height * 0.04} ${height * 0.08};
`;

export const LocationTimeText = styled.Text`
  color: #fff;
  font-size: ${height * 0.012};
  text-align: center;
`;

export const LocationTimeTextSmall = styled.Text`
  color: #fff;
  font-size: ${height * 0.01};
  text-align: center;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: height * 0.06, android: height * 0.04 })};
  left: ${height * 0.04};
`;