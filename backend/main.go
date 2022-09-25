package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func init() {

}

func main() {
	r := gin.Default()
	game_version := 3
	fmt.Printf("Super Mario %s\n", game_version)
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
