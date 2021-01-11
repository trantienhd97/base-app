declare module 'react-native-config' {
  export interface ReactNativeEnvironmentVariables {
    DMS_CODE_PUSH_DEPLOYMENT_KEY?: string;

    DMS_RELEASE_DATE?: string;

    DMS_GOOGLE_MAP_API_KEY?: string;

    DMS_BASE_API_URL?: string;
  }

  const Config: ReactNativeEnvironmentVariables;

  export default Config;
}
