import {Platform} from 'react-native';

// export class UIConstants {
//   static AppbarHeight = Platform.OS === 'ios' ? 44 : 56;
//   static StatusbarHeight = Platform.OS === 'ios' ? 20 : 0;
//   static HeaderHeight = UIConstants.AppbarHeight + UIConstants.StatusbarHeight;
// }
const appbarHeight = Platform.OS === 'ios' ? 44 : 56;
const statusbarHeight = Platform.OS === 'ios' ? 20 : 0;

export class UIConstants {
  static AppbarHeight = appbarHeight;
  static StatusbarHeight = statusbarHeight;
  static HeaderHeight = appbarHeight + statusbarHeight;
}