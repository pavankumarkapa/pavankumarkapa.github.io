/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["arc-animation.html","fc743d0a2a535a630796794bf8b7d05e"],["associations.html","41c589b9bb17829072ffaa94d5871f42"],["bonus.html","dfcac73599289950182613715ec01158"],["bonus.json","992e53dcbb6a25fff8f31fc55c7dd1fc"],["bot.html","6ce052b8d246ee50188cfba481a7d638"],["collisions.html","93b062836853c6ad440940b9a3800d5e"],["flare.json","6513f92cc570a53685d4d4324eae1445"],["gameinfo.html","fdfa3d1d5298ad18ccdcb0306d1307d1"],["images/animation-bg-1.png","dfcd1d99b3bec0804bbf46143562bbe5"],["images/animation-bg-2.png","2a9fb0b3bec969c97093645e3fc7581e"],["images/animation-bg-5.png","0301fd47d6b154d28efbbdf258e03e8b"],["images/animation-bg-new.png","494e5e71aed2bde5816d885d6bccfc1b"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/human.png","a75dd0f09d5b70334765622a9a8c4bad"],["images/human.svg","15a2903188420637663a1010227ab4e2"],["images/ic_perm_identity_black_24px.svg","ca2f2314208dd0b9a13925303cffdeda"],["images/icons/1.png","c0196776ae837cbfc1ca25eea85f3f0a"],["images/icons/2.png","19817c54b4264f80dcf99b80e090edfa"],["images/icons/3.png","3751090147fff7edce4d1283182ccfd8"],["images/icons/4.png","135f4e88b3075c28d1c4e0f99625bfad"],["images/icons/5.png","cedd94fcea8e6a0c71edabad9aed85a0"],["images/icons/6.png","fdacbc9816dceee6b0db6dab42421717"],["images/icons/assosiations.png","3751090147fff7edce4d1283182ccfd8"],["images/icons/bonus-abusers.png","135f4e88b3075c28d1c4e0f99625bfad"],["images/icons/bot-user.png","c0196776ae837cbfc1ca25eea85f3f0a"],["images/icons/colluders.png","19817c54b4264f80dcf99b80e090edfa"],["images/icons/money-dumpers.png","cedd94fcea8e6a0c71edabad9aed85a0"],["images/icons/rule-voilation.png","fdacbc9816dceee6b0db6dab42421717"],["images/icons/user (1).png","0d047cf3eaf4b7312008dbccca5a9157"],["images/icons/user (2).png","a75dd0f09d5b70334765622a9a8c4bad"],["images/icons/user (3).png","95e159ab1fd734974b1886cca4c4a984"],["images/icons/user.png","daf67ad0d2912d6f54541bace519516c"],["images/profile.png","a75dd0f09d5b70334765622a9a8c4bad"],["images/profile2.png","9192c75c54631d60c28f3e0ec926e26d"],["images/profile3.png","d2432d2a46d924c5080e1c4d98cd252f"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index-1.html","7eb79367335855aa52b9c469e98a39e7"],["index-3.html","4bc3af6b418072a950b34828357a45fc"],["index.html","7eb79367335855aa52b9c469e98a39e7"],["manifest.json","950c3948d31cfa0ec99e796ef87add11"],["new1.html","0637db89ebce0264283e4536503c4272"],["player-statistics.html","ce9472ad12aaf205a0b09553db86a3ee"],["rule-violation.html","b2a9e6f712cddf8b03036b382a54be24"],["scripts/main.min.js","e4f5ce18e8f8883335241da2fedfb68c"],["scripts/sw/runtime-caching.js","4f3881ee12be74267853341468418ccb"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["statistics.html","8d10cb6c4614930d955051a944f88f3d"],["styles/css/font-awesome.css","baf96097cffdbfc87805eaf46feb7981"],["styles/css/font-awesome.min.css","baf96097cffdbfc87805eaf46feb7981"],["styles/main-1.css","8b10a58cefed98f8b8366eea4e35806e"],["styles/main.css","766f3f00cc3e45c7e2daabcf20a84886"],["styles/particle-effect.css","33ba8e1d33f88d36d289eb6de69bdeb8"],["styles/playerinfo/playerandgameinfo.css","ead282613820461587746ee69bc22799"],["styles/statistics/statistics.css","486f378f1c88ce4a6aca761cc179a978"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




