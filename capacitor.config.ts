import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fermemoutcho.app',
  appName: 'Ferme Moutcho',
  webDir: 'www',
  server: {
    url: 'https://fermemoutcho.netlify.app',
    cleartext: true
  }
};

export default config;
