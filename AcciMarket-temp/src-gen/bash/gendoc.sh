#!/usr/bin/env sh
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/domain-model/DOM-Pantallas/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/UCD-Pantallas/*.plantuml

#java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/technical-specs/uml/object-model/OM-Pantallas/*.plantuml
#java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/technical-specs/uml/sequence-diagrams/SD-Pantallas/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/SearchActivityUCD-Pantallas/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/CreateActivityUCD-Pantallas/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/DeleteActivityUCD-Pantallas/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/UpdateActivityUCD-Pantallas/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/domain-model/DOM-Dominio/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/UCD-Dominio/*.plantuml

#java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/technical-specs/uml/object-model/OM-Dominio/*.plantuml
#java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/technical-specs/uml/sequence-diagrams/SD-Dominio/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/SearchActivityUCD-Dominio/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/CreateActivityUCD-Dominio/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/DeleteActivityUCD-Dominio/*.plantuml
java -jar /c/@Programs/plantuml.jar -charset UTF-8 $1/functional-specs/use-cases/diagrams/UpdateActivityUCD-Dominio/*.plantuml

cd $1/functional-specs	
pdflatex -quiet --synctex=1 "functional-spec.tex"
pdflatex -quiet --synctex=1 "functional-spec.tex"

