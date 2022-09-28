.PHONY: init build run

init:
	@yarn install -D --unsafe-perm --cwd ./app
	@go mod tidy
	@echo "*** Done Downloading Dependencies ***"

buildjs:
	@yarn --cwd ./app run build
	@echo "*** Done Building JS ***"

build: buildjs 
	@go build
	@echo "*** Done Building Go ***"

run: buildjs
	@go run main.go