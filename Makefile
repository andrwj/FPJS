all:
	rm -rf ./build
	rm -rf ./dist
	yarn run build
	yarn run dist
	rsync -avr ./build/ ../npm/
	rsync -avr ./dist ../npm/


