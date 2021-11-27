install:
	go mod init minos

build:
	cd functions/minos && GOOS=linux GOARCH=amd64 go build -o main main.go

sp:
	go env -w GO111MODULE=on && go env -w GOPROXY=https://goproxy.cn,direct
