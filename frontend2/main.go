package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/roylisto/gin-golang-react/api"
)

func main() {
	router := api.NewRouter()

	app := gin.Default()
	app.Use(static.Serve("/", static.LocalFile("./dist", true)))
	app.GET("hello", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "Nice!",
		})
	})
	app.GET("home")
	router.SetupRouter(app)
	app.Run("127.0.0.1:3000")
}
