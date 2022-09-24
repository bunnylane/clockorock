package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/roylisto/gin-golang-react/api"
)

func main() {
	router := api.NewRouter()

	// Set the router as the default one shipped with Gin
	app := gin.Default()

	// Serve frontend static files
	app.Use(static.Serve("/", static.LocalFile("./dist", true)))

	// Initialize the route
	router.SetupRouter(app)

	// Start and run the server on localhost as default
	app.Run("127.0.0.1:5555")
}
