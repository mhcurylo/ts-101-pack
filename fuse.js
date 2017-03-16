const fb = require('fuse-box');

const FuseBox = fb.FuseBox;

const fuse = FuseBox.init({
    homeDir: "src",
    outFile: "bundle.js",
    sourceMaps: true
});

fuse.devServer("> app.ts");


