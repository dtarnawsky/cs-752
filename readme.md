# 7.5.2 issue

Getting this error when running on @ionic/angular@7.5.2 (but works fine with 7.5.1):
```
ERROR Error: Uncaught (in promise): TypeError: Cannot redefine property: checked
TypeError: Cannot redefine property: checked
    at Function.defineProperty (<anonymous>)
    at ionic-angular-standalone.mjs:210:16
    at Array.forEach (<anonymous>)
    at proxyInputs (ionic-angular-standalone.mjs:209:12)
    at IonToggle.ngOnInit (ionic-angular-standalone.mjs:2867:9)
    at callHookInternal (core.mjs:3920:14)
    at callHook (core.mjs:3947:13)
    at callHooks (core.mjs:3902:17)
    at executeInitAndCheckHooks (core.mjs:3852:9)
    at refreshView (core.mjs:13496:21)
    at resolvePromise (zone.js:1193:31)
    at resolvePromise (zone.js:1147:17)
    at zone.js:1260:17
    at _ZoneDelegate.invokeTask (zone.js:402:31)
    at core.mjs:10735:55
    at AsyncStackTaggingZoneSpec.onInvokeTask (core.mjs:10735:36)
    at _ZoneDelegate.invokeTask (zone.js:401:60)
    at Object.onInvokeTask (core.mjs:11048:33)
    at _ZoneDelegate.invokeTask (zone.js:401:60)
    at Zone.runTask (zone.js:173:47)
    ```