import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'eurovision-bingo',
  slug: 'eurovision-bingo',
  scheme: 'eurovision-bingo',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  jsEngine: 'hermes',
  ios: {
    supportsTablet: true,
    jsEngine: 'jsc',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './src/assets/favicon.png',
    bundler: 'metro',
  },
  plugins: ['expo-router', 'expo-localization'],
  experiments: {
    tsconfigPaths: true,
  },
  extra: {
    eas: {
      projectId: '6633ad9d-8377-43b5-ab9d-c10cef2195f5',
    },
  },
});
