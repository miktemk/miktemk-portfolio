# Miktemk Portfolio

Generate thumbnail using [magick CLI](https://imagemagick.org/script/command-line-tools.php).

 - use `choco install imagemagick.app` to install magick CLI, if you don't have it.
 - run `zz-convert-thumbs.sh`

Build like this:

    rm -rf ../miktemk.github.io/assets
    ng build --output-path ../miktemk.github.io --delete-output-path false --configuration=production

Or without the hashing in the filename

    ng build --output-path ../miktemk.github.io --delete-output-path false --output-hashing none --configuration=production

