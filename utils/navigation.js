import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * 导航到指定页面，全局可用
 * @param name
 * @param params
 */
export function navigate(name, params){
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

/**
 * 导航返回
 */
export function goBack(){
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
