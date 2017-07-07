import { createSocket, Socket, RemoteInfo } from "dgram";
export { RemoteInfo }
export function CreatMsgSrv(srvName: string, listPort: number, msgcallback: (msg: Buffer, rinfo: RemoteInfo) => void) {
    const server = createSocket('udp4', msgcallback);
    server.on('error', (err) => {
        console.log(`server ${srvName} error:\n${err.stack}`);
        server.close();
    });

    server.on('listening', () => {
        var address = server.address();
        console.log(`server ${srvName} listening ${address.address}:${address.port}`);
    });

    server.bind(listPort);
}


