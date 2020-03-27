build:
	npm run-script build

prepare-deploy: build 
	cp app.yaml dist
	cp package.json dist

deploy: prepare-deploy
	gcloud app deploy --project koa-typescript dist