package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func init() {

}

func main() {
	r := gin.Default()
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Nice!",
		})
	})
	r.Run("127.0.0.1:5000")
}
