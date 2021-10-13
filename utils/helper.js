import Toast from "react-native-root-toast";

export function toast(msg){
  let notify = Toast.show(msg, {
    duration: Toast.durations.SHORT,
    shadow: false,
  });
}
