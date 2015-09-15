test:
	node --harmony_destructuring tests/basictests.js

pushall:
	git push origin master && npm publish
