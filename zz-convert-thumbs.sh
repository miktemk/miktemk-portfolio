#!/bin/bash

for i in src/assets/screenshots/*.png; do
	filename=`basename "$i" .png`
    printf "Resize $i --> $filename\n"
    magick convert -resize 'x300' "$i" "src/assets/thumbs/$filename.jpg"
done

for i in src/assets/screenshots/*.jpg; do
	filename=`basename "$i" .jpg`
    printf "Resize $i - $filename\n"
    magick convert -resize 'x300' "$i" "src/assets/thumbs/$filename.jpg"
done

read -p "DONE! Press [Enter] to exit"
