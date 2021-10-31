foto's toevoegen

1. stop ze in een mapje
2. navigeer naar dat mapje
3. converteer naar jpg: 'for i in *.heic(:r) ; sips -s format jpeg "$i.heic" --out "$i.jpg"' (let op, dit commando is case sensitive)
4. navigeer naar project root
5. extract filename en gps data: 'exiftool -gpslatitude -gpslongitude -n -json <mapje> > output.json'
6. replace keys in output
7. verwijder verwijzing naar zichzelf uit output
8. voeg samen met konijn.js
9. check of het werkt
10. verwijder heic files: 'rm <mapje>/*.heic'
