package neo

type IClient interface {
}

type Client struct {
}

func New() IClient {
	return &Client{}
}
