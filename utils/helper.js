import Toast from "react-native-root-toast";
import {Vibration} from "react-native";

export function toast(msg){
  let notify = Toast.show(msg, {
    duration: Toast.durations.SHORT,
    shadow: false,
  });
}

export function vibrateShort(){
  Vibration.vibrate([0, 150, 1000], false);
}
