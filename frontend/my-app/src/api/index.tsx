const socket = new WebSocket('ws://localhost:8080/ws');


let connect = (cb: (a: any) => any) => {
    console.log("connecting...");

    socket.onopen = () => {
        console.log("sucessfully connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    };

    socket.onclose = event => {
        console.log("socket closed connection: ", event);
    };

    socket.onerror = error => {
        console.log("socket error: ", error);
    };
};

let sendMsg = (msg: any) => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };
