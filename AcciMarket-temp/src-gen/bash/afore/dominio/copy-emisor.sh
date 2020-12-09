#!/usr/bin/env sh
       
ORIGEN_COMMON="../../../banamex/common/src/main/java/com/aforebanamex/plata/comunes"
DESTINO_COMMON="PLATA-Comunes/src/main/java/com/aforebanamex/plata/comunes"
       
ORIGEN_INFRAESTRUCTURA="../../../banamex/infraestructura/src/main/java/com/aforebanamex/plata/base/helper"
DESTINO_INFRAESTRUCTURA="PLATA-Infraestructura/src/main/java/com/aforebanamex/plata/base/helper"
       
ORIGEN_CONFIGURACION="../../../banamex/configuracion/src/main"
DESTINO_CONFIGURACION="PLATA-WebApp/src/main"
       
ORIGEN_DOMINIO="../../../banamex/dominio/src/main/java/com/aforebanamex/plata/cg/dominio"
DESTINO_DOMINIO="PLATA-DOMINIO/src/main/java/com/aforebanamex/plata/cg/dominio"
             
#EXCEPTION
cp $ORIGEN_DOMINIO/exception/EliminarEmisorInactivoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/EmisorDuplicadoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/EmisorException.java $1/$DESTINO_DOMINIO/exception
#REPOSITORY
cp $ORIGEN_DOMINIO/repository/EmisorJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/EmisorJDBCRepository.java $1/$DESTINO_DOMINIO/repository
#REPOSITORY IMPL    
cp $ORIGEN_DOMINIO/repository/impl/EmisorJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/EmisorJDBCRepositoryImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/EmisorMapper.java $1/$DESTINO_DOMINIO/repository/impl        
#SERVICE     
cp $ORIGEN_DOMINIO/service/EmisorService.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/EmisorServices.java $1/$DESTINO_DOMINIO/service
#SERCIVE IMPL
cp $ORIGEN_DOMINIO/service/impl/EmisorServiceImpl.java $1/$DESTINO_DOMINIO/service/impl
cp $ORIGEN_DOMINIO/service/impl/EmisorServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
       
       
#COMMON
#MODEL
cp $ORIGEN_COMMON/model/Emisor.java $1/$DESTINO_COMMON/model     
       
             
#CONFIGURACION
#CONTROLLER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio/EmisorController.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio
#HELPER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio/EmisorHelper.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio
#JS
cp $ORIGEN_CONFIGURACION/webapp/resources/js/dominio/emisor.js $1/$DESTINO_CONFIGURACION/webapp/resources/js/dominio    
#HTML
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/emisors.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalCrearEmisor.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalUpdateEmisor.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
       
       
#INFRAESTRUCTURA
#HELPER
cp $ORIGEN_INFRAESTRUCTURA/EmisorConstantesHelper.java $1/DESTINO_INFRAESTRUCTURA

