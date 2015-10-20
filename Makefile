test:
	node --harmony_destructuring tests/basictests.js

build-browser-version:
	./node_modules/.bin/browserify index.js -d -t babelify > browser-index.js

pushall:
	git push origin master && npm publish
