dev:
	cd client && yarn start

build:
	cd client && yarn build
	
qa-server:
	node app/src/service.js