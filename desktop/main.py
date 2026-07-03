import signal
import sys
from pathlib import Path

from PySide6.QtCore import Qt
from PySide6.QtGui import QColor, QFont, QFontDatabase, QGuiApplication
from PySide6.QtQuick import QQuickView

if __name__ == "__main__":
    app = QGuiApplication(sys.argv)

    fonts_dir = Path(__file__).parent / "assets" / "fonts"
    font_families = set()
    for font_file in sorted(fonts_dir.glob("*.ttf")):
        font_id = QFontDatabase.addApplicationFont(str(font_file))
        if font_id == -1:
            print(f"Failed to load {font_file.name}")
            continue
        font_families.update(QFontDatabase.applicationFontFamilies(font_id))

    print("Loaded font families:", font_families)

    view = QQuickView()
    view.setResizeMode(QQuickView.ResizeMode.SizeRootObjectToView)
    app.setFont(QFont("Red Hat Mono"))

    view.setFlags(
        Qt.Window
        | Qt.FramelessWindowHint
        | Qt.WindowStaysOnTopHint
    )

    screen = app.primaryScreen()
    geometry = screen.geometry()

    view.setPosition(geometry.x(), geometry.y())
    view.setWidth(geometry.width())
    view.setHeight(geometry.height())

    view.engine().addImportPath(sys.path[0])
    view.loadFromModule("App/Tasks", "TaskSelector")
    if view.status() == QQuickView.Status.Error:
        sys.exit(-1)

    view.rootObject().close.connect(view.close)

    view.setColor(QColor(0, 0, 0, 0))
    view.show()

    signal.signal(signal.SIGINT, signal.SIG_DFL)
    exitCode = app.exec()
    del view

    sys.exit(exitCode)