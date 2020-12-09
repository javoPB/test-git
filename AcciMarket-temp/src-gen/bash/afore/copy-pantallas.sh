#!/usr/bin/env sh
       
ORIGEN_COMMON="../../banamex/common/src/main/java/com/aforebanamex/plata/comunes"
DESTINO_COMMON="PLATA-Comunes/src/main/java/com/aforebanamex/plata/comunes"
       
ORIGEN_CONFIGURACION="../../banamex/configuracion/src/main"
DESTINO_CONFIGURACION="PLATA-WebApp/src/main"

#CREACION DE DIRECTORIOS
rm -rf $1/$DESTINO_PANTALLAS/repository
mkdir $1/$DESTINO_PANTALLAS/repository
       
rm -rf $1/$DESTINO_PANTALLAS/repository/impl
mkdir $1/$DESTINO_PANTALLAS/repository/impl
       
rm -rf $1/$DESTINO_PANTALLAS/service
mkdir $1/$DESTINO_PANTALLAS/service
       
rm -rf $1/$DESTINO_PANTALLAS/service/impl
mkdir $1/$DESTINO_PANTALLAS/service/impl
       
ORIGEN_PANTALLAS="../../banamex/pantallas/src/main/java/com/aforebanamex/plata/cg/pantallas"
DESTINO_PANTALLAS="PLATA-PANTALLAS/src/main/java/com/aforebanamex/plata/cg/pantallas"
                    
#ARCHIVOS DEL COMPONENTE
#EXCEPTION   
cp $ORIGEN_PANTALLAS/exception/PlantillaNoExisteException.java $1/$DESTINO_PANTALLAS/exception
       
#HELPER
cp $ORIGEN_PANTALLAS/helper/PANTALLASConstantesHelper.java $1/$DESTINO_PANTALLAS/helper
       
#SENTENCES
cp ../../banamex/pantallas/src/main/resorces/sentences/pantallas-sentences.xml $1/PLATA-PANTALLAS/src/main/resources/sentences
       
#MESSAGES
cp $ORIGEN_CONFIGURACION/resources/messages/mensajes-pantallas.properties $1/$DESTINO_CONFIGURACION/resources/messages
       
       
#PANTALLAS  
             
             
#COMMON
#ENUM
#ENUM
       
#BASH DE COPIADO DE ENTIDADES
cd pantallas
       
