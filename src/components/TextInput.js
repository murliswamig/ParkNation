import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {font} from "../assets/url/fontSizes";

const TextInputStyle = (fontSize = 14,height=45) => ({
  height: height,
  fontSize: fontSize,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#E3E3E3',
  borderRadius: 5,
  width: '100%',
  paddingHorizontal: 15,
  color: '#333',
});

const InputLabelStyle = (fontSize = 10) => ({
  fontSize: 13,
  color: '#1F1F1F',
  fontFamily: font.RobotoMedium,
  marginBottom: 5,
  marginLeft:10,
});

export default function({
  onChangeText,
  onBlur,
  onFocus,
  onEndEditing,
  secureTextEntry = false,
  placeholder = '',
  maxLength,
  editable = true,
  inputStyle = TextInputStyle(),
  value,
  defaultValue,
  isLevelShow = true,
  level = '',
  isShowMark = false,
  tooltipText = '',
  isPlaceHolder = false,
  keyboardType = 'default',
  showImage = false,
  onUpKeyPress = onUpKeyPress,
  onDownKeyPress = onDownKeyPress,
  error,
  type,
  multiline=false
}) {
  return (
    <View>
      {isLevelShow ? (
        <View style={{flexDirection: 'row'}}>
          <Text style={InputLabelStyle()}>{level}</Text>
        </View>
      ) : null}

      <TextInput
        underlineColorAndroid="transparent"
        placeholder={isPlaceHolder ? `${placeholder}` : ''}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        maxLength={maxLength}
        editable={editable}
        placeholderTextColor="rgb(183,190,197)"
        value={value}
        onFocus={onFocus}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onEndEditing={onEndEditing}
        keyboardType={keyboardType}
        multiline={multiline}
      />
      <Text
          style={{
            fontSize: 12,
            marginTop: 3,
            letterSpacing: 0,
            color: "red"
          }}
      >
        {error}
      </Text>
      {showImage ? (
        <View
          style={{
            position: 'absolute',
            marginTop: 30,
            marginLeft: '77%',
          }}>
          <TouchableOpacity
            onPress={() => onUpKeyPress(value, type)}
            style={{
              marginBottom: 5,
              padding: 5,
              paddingTop: 10,
              width: 30,
              height: 20,
            }}>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDownKeyPress(value, type)}
            style={{
              padding: 5,
              paddingTop: 0,
              width: 30,
              height: 20,
            }}>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

