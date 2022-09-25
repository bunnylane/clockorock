FROM golang:1.18 as base
ARG service

# Restore dependencies
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download

# Copy Repository
COPY . ./

# Build Image
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app

# Use a small runtime environemnt for minimizing container size
FROM alpine:latest
RUN apk --no-cache add ca-certificates
COPY --from=base /src/app ./
CMD ["./app"]