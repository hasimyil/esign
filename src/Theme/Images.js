/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    logo: require('@/Assets/Images/logo.png'),
    signInImage: require('@/Assets/Images/auth/img_sign_in_02.png'),
    document_tick: require('@/Assets/Images/document/document_tick.png'),
    folder_1: require('@/Assets/Images/media/folder_1.png'),
    background_1: require('@/Assets/Images/img_intro_background.png'),
  }
}
