import QtQuick
import QtQuick.Controls.Basic
import QtQuick.Window

import Notes
import Base

Root {
    id: root
    NoteDialogController {
        id: controller
    }
    Overlay {

        Rectangle {
            anchors.centerIn: parent
            width: 500
            height: 300
            opacity: 1

            TextArea {
                id: noteInput
                anchors.fill: parent
                anchors.margins: 10
                placeholderText: "Type your note..."
                focus: true
                color: "red"
                background: Rectangle {
                    color: "black"
                }

                Keys.onEscapePressed: root.close()
                Keys.onPressed: function (event) {
                    if (event.key === Qt.Key_Return && event.modifiers & Qt.ControlModifier) {
                        controller.saveNote(noteInput.text);
                        root.close();
                    } else if (event.key === Qt.Key_S && event.modifiers & Qt.ControlModifier) {
                        console.log("Ctrl+S pressed, calling backend.saveNote");
                        controller.saveNote(noteInput.text);
                        event.accepted = true;
                    }
                }
            }
        }
    }
}
