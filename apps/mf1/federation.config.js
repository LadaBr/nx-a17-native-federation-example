const { withNativeFederation, shareAll, share} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mf1',

  exposes: {
    './Component': './apps/mf1/src/app/test/test.component.ts',
  },

  shared: {
    ...share({
      "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    })
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

});
