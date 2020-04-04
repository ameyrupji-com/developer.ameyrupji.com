# Commands to be run to create the favicons for this website

## Beta: 

```
./icons.sh -i ../src/images/icon-beta.png -o ../src/images/beta-icons
```

## Prod:
```
./icons.sh -i ../src/images/icon.png -o ../src/images/icons
```

## Copy and rename Prod
```
cp ../src/images/icons/favicon-64x64.png ../src/favicon.ico
```



## Reference Links:
- https://realfavicongenerator.net/api/#.XM4ABC-ZPUJ
- https://www.npmjs.com/package/icon-gen 


# Get Api Docs

Run the newly created script. This script creates a folder named docs and copies all the AWS API Gateway documents with this format {Stage}-{API-Gateway}.json inside docs folder.


A `docs-list.json` file will be with the below data format.

```
[
  {
    "url": "file-path/url-link",
    "name": "name-to-display"
  }
]
```