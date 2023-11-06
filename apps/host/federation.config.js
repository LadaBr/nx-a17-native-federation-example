const { withNativeFederation, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: {
    ...share({
      "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    })
  },

  skip: [
    '@nguniversal/builders',
    '@angular/platform-server',
    // Add further packages you don't need at runtime
  ]

});
