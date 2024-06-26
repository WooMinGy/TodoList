module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '@/redux': './app/redux',
          '@/redux/*': './app/redux/*',
          '@/components': './app/components',
          '@/components/*': './app/components/*',
          '@/hooks': './app/hooks',
          '@/providers': './app/providers',
          '@/screens': './app/screens',
          '@/screens/*': './app/screens/*',
          '@/containers': './app/containers',
          '@/containers/*': './app/containers/*',
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
