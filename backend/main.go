package main

import (
	"net/http"
	"time"

	"github.com/bunnylane/clockorock/backend/routes"
	"github.com/gin-gonic/contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {

}

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Nice!",
		})
	})

	r.Use(cors.New(cors.Config{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET"},
		AllowedHeaders:   []string{"Origin"},
		ExposedHeaders:   []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.GET("/market", routes.GetMarket)
	r.Run("127.0.0.1:5000")
}
