import QtQuick
import QtQuick.Controls.Basic
import QtQuick.Window

import Base

Root {
    id: root

    Overlay {
        Rectangle {
            anchors.centerIn: parent
            width: 500
            height: 420
            color: "black"
            border.color: "red"
            border.width: 1

            FocusScope {
                anchors.fill: parent
                anchors.margins: 10
                focus: true

                Text {
                    id: header
                    anchors.top: parent.top
                    anchors.left: parent.left
                    text: "Select a task"
                    color: "red"
                    font.pixelSize: 16
                }

                ListView {
                    id: list
                    anchors.top: header.bottom
                    anchors.topMargin: 8
                    anchors.left: parent.left
                    anchors.right: parent.right
                    anchors.bottom: parent.bottom
                    focus: true
                    clip: true
                    keyNavigationWraps: true
                    highlightFollowsCurrentItem: true
                    currentIndex: 0
                    model: ["Write project proposal", "Review pull requests", "Update documentation", "Fix login bug", "Deploy to staging", "Refactor auth module", "Schedule team meeting"]

                    highlight: Rectangle {
                        color: "red"
                    }

                    delegate: ItemDelegate {
                        width: list.width
                        height: 36
                        highlighted: ListView.isCurrentItem

                        contentItem: Text {
                            text: modelData
                            color: highlighted ? "black" : "red"
                            verticalAlignment: Text.AlignVCenter
                            leftPadding: 10
                        }

                        background: Rectangle {
                            color: "transparent"
                        }

                        onClicked: list.currentIndex = index
                    }

                    Keys.onReturnPressed: {
                        console.log("selected:", list.model[list.currentIndex]);
                    }
                    Keys.onEnterPressed: {
                        console.log("selected:", list.model[list.currentIndex]);
                    }
                }

                Keys.onEscapePressed: root.close()
            }
        }
    }
}
