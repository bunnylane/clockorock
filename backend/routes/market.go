package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetMarket(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, []map[string]interface{}{
		{
			"id":          "1",
			"description": "cool cake 1",
		},
		{
			"id":          "2",
			"description": "cool cake 2",
		},
		{
			"id":          "4",
			"description": "Johnny er as",
		},
		{
			"id":          "3",
			"description": "hehehe",
		},
	})
}
