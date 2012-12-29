var assert = require('assert');
var diff_match_patch = require('./index');
var dmp = new diff_match_patch();

console.dir(diff_match_patch);

function launch() {
  var text1 = "this is some test. blah blah blah";
  var text2 = "this is other text. blah blah blah";

  var diffs = dmp.diff_main(text1, text2);

  dmp.diff_cleanupSemantic(diffs);

  console.log(diffs;

  var patch = dmp.patch_make(diffs);
  var results = dmp.patch_apply(patch, text1);
  assert.equal(results[0], text2);
}

launch();
