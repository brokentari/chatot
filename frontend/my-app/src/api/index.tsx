const socket = new WebSocket('ws://localhost:8080/ws');


let connect = (cb: (a: MessageEvent) => void) => {
    console.log("connecting...");

    socket.onopen = () => {
        console.log("sucessfully connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
        //const obj = JSON.parse(msg.data);
        cb(msg);
    };

    socket.onclose = event => {
        console.log("socket closed connection: ", event);
    };

    socket.onerror = error => {
        console.log("socket error: ", error);
    };
};

let sendMsg = (msg: string) => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };
