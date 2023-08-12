import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.newapp',
  appName: 'newapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
