package main

import (
	"os"

	"github.com/bunnylane/clockorock/frontend/routes"
	"github.com/gin-gonic/gin"
)

func main() {

	port := os.Getenv("PORT")

	if port == "" {
		port = "8000"
	}

	router := gin.New()
	router.Use(gin.Logger())

	router.GET("/", routes.ServeApp)

	//this runs the server and allows it to listen to requests.
	router.Run(":" + port)
}
