import QtQuick
import QtQuick.Controls.Basic
import QtQuick.Window

import Chat
import Base

Root {
    id: root
    ChatController {
        id: controller
    }

    Rectangle {
        anchors.centerIn: parent
        width: 500
        height: 60
        opacity: 1

        TextArea {
            id: noteInput
            anchors.fill: parent
            anchors.margins: 10
            placeholderText: "Type your note..."
            focus: true
            color: Theme.primary
            background: Rectangle {
                color: "black"
            }

            Keys.onEscapePressed: root.close()
            Keys.onPressed: function (event) {
                if (event.key === Qt.Key_Return && event.modifiers & Qt.ControlModifier) {
                    controller.sendMessage(noteInput.text);
                    root.close();
                } else if (event.key === Qt.Key_S && event.modifiers & Qt.ControlModifier) {
                    console.log("Ctrl+S pressed, calling backend.saveNote");
                    controller.sendMessage(noteInput.text);
                    event.accepted = true;
                }
            }
        }
    }
}
