from PySide6.QtCore import QObject, Slot
from PySide6.QtQml import QmlElement

QML_IMPORT_NAME = "Notes"
QML_IMPORT_MAJOR_VERSION = 1

@QmlElement
class NoteDialogController(QObject):
  
  @Slot(str, result=bool)
  def saveNote(self, text: str) -> bool:
    print(f'note: {text}')
    return True
