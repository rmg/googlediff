## googlediff

NPM package for [google-diff-match-patch](http://code.google.com/p/google-diff-match-patch/) by Neil Fraser and contributors.

This module is awesome because you can use exactly the same code on the
serverside and on the client side. It is even compatible with Browserify.

### Installation

`npm install googlediff`

### Build/Update

Uses a simple index.js file to wrap the original code from Neil Fraser's
diff_match_patch. To update just copy the 'demos' and 'javascript' folders
into this repo's root.

### Testing

The tests run by `npm test` (or `node test.js`) just do a basic sanity check
of the NPM packaging. To test that the diff/match/patch code is in order, you
can load up `javascript/diff_match_patch_test.html` in your browser and it
will load and run the tests provided by the original project.

### Usage

For full documentation, see the original
[google-diff-match-patch API Docs](http://code.google.com/p/google-diff-match-patch/wiki/API).

Here's a quick usage example:

```javascript
var diff_match_patch = require('googlediff');
var dmp = new diff_match_patch();

var text1 = "this is some test. blah blah blah";
var text2 = "this is other text. blah blah blah";

var diff = dmp.diff_main(text1, text2);
dmp.diff_cleanupSemantic(diff);

console.log(diff);
```

output:
```json
[ [ 0, 'this is ' ],
  [ -1, 'some' ],
  [ 1, 'other' ],
  [ 0, ' te' ],
  [ -1, 's' ],
  [ 1, 'x' ],
  [ 0, 't. blah blah blah' ] ]
```

For a much more compact diff format, you can use the delta format (which is
sadly not documented):

```javascript
var delta = dmp.diff_toDelta(d);
console.dir(delta);
```

output:

```json
'=8\t-4\t+other\t=3\t-1\t+x\t=17'
```

See `demos/` for the demos provided by google-diff-match-patch.

### Credits

Original [google-diff-match-patch](http://code.google.com/p/google-diff-match-patch/) by Neil Fraser and contributors.

This re-package was created by Shimon Doodkin (@shimondoodkin) and updated by Ryan Graham (@rmg).
