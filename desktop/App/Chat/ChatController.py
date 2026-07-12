from PySide6.QtCore import QObject, Slot
from PySide6.QtQml import QmlElement

QML_IMPORT_NAME = "Chat"
QML_IMPORT_MAJOR_VERSION = 1

@QmlElement
class ChatController(QObject):
  
  @Slot(str, result=bool)
  def sendMessage(self, text: str) -> bool:
    print(f'message: {text}')
    return True
