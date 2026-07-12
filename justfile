set shell := ["pwsh", "-c"]

gen:
    cd desktop
    uvx pyside6-qml-stubgen ./ --out-dir ./qmltypes