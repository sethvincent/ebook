# ebook

> generate epub, mobi, pdf, and html books from markdown using javascript

`ebook` uses pandoc and kindlegen to create epub, mobi, pdf, and html files from markdown.

## WARNING:
This is a very bare-bones proof of concept super-quick demo. It might not work for you.

So far it only works on Mac 10.5 plus, because it only bundles the Mac version of kindlegen right now.

Right now the mobi file builds with warnings. The output isn't clear what the warnings are.

## Usage:

### In your code:
```
var ebook = require('ebook');

ebook({
  source: 'some-markdown-file.md',
  folder: 'the-folder-you-want-the-files-to-be-put-in'
});
```

### With the command line:
```
npm install -g ebook
```

```
ebook --source some-markdown-file.md --folder the-folder-you-want-the-files-to-be-put-in
```

## Roadmap:
- move kindlegen.js and pandoc.js into their own repos, and make them more useful on their own.
- clean up the code and allow the inclusion of additional options.
- make it possible to create ebooks from multiple files, set a cover image, and allow custom styles.

## License
MIT