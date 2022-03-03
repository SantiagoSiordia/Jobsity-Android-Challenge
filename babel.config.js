module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': ['./src/components'],
            '@services': ['./src/services'],
            '@resources': ['./src/resources'],
            '@screens': ['./src/screens'],
          },
        },
      ],
    ],
};
