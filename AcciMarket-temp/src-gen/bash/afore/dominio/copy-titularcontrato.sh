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
cp $ORIGEN_DOMINIO/exception/EliminarTitularContratoInactivoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/TitularContratoDuplicadoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/TitularContratoException.java $1/$DESTINO_DOMINIO/exception
#REPOSITORY
cp $ORIGEN_DOMINIO/repository/TitularContratoJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/TitularContratoJDBCRepository.java $1/$DESTINO_DOMINIO/repository
#REPOSITORY IMPL    
cp $ORIGEN_DOMINIO/repository/impl/TitularContratoJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/TitularContratoJDBCRepositoryImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/TitularContratoMapper.java $1/$DESTINO_DOMINIO/repository/impl        
#SERVICE     
cp $ORIGEN_DOMINIO/service/TitularContratoService.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/TitularContratoServices.java $1/$DESTINO_DOMINIO/service
#SERCIVE IMPL
cp $ORIGEN_DOMINIO/service/impl/TitularContratoServiceImpl.java $1/$DESTINO_DOMINIO/service/impl
cp $ORIGEN_DOMINIO/service/impl/TitularContratoServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
       
       
#COMMON
#MODEL
cp $ORIGEN_COMMON/model/TitularContrato.java $1/$DESTINO_COMMON/model     
       
             
#CONFIGURACION
#CONTROLLER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio/TitularContratoController.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio
#HELPER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio/TitularContratoHelper.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio
#JS
cp $ORIGEN_CONFIGURACION/webapp/resources/js/dominio/titularContrato.js $1/$DESTINO_CONFIGURACION/webapp/resources/js/dominio    
#HTML
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/titularContratos.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalCrearTitularContrato.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalUpdateTitularContrato.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
       
       
#INFRAESTRUCTURA
#HELPER
cp $ORIGEN_INFRAESTRUCTURA/TitularContratoConstantesHelper.java $1/DESTINO_INFRAESTRUCTURA

