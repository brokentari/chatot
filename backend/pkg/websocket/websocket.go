package websocket

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// define upgrader
// requires read and write buffer size
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,

	// check connection origin
	CheckOrigin: func(r *http.Request) bool { return true },
}

// Upgrade upgrade connection to websocket
func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	return conn, nil
}
