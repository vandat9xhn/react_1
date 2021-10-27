import { is_api_fake } from "../../../api/_ConstAPI";

//
export const getRoomChatWebsocket = (new_room_chat = '' || 0) => {
    const ws = !is_api_fake
        ? new WebSocket('ws://127.0.0.1:8000/ws/message/' + new_room_chat)
        : {
              send: (data) => {
                  console.log(data);
              },
          };

    return ws;
};
