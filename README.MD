foto's toevoegen

1. stop ze in een mapje
2. navigeer naar dat mapje
3. converteer naar jpg: `for i in *.heic(:r) ; sips -s format jpeg "$i.heic" --out "$i.jpg"` (let op, dit commando is case sensitive)
4. verwijder heic files: `rm *.heic`
5. extract filename en gps data: `exiftool -gpslatitude -gpslongitude -imageSize -n -json ./ > output.js`
8. voeg inhoud van output.js samen met photos.js
9. check of het werkt
10. verwijder output.js
