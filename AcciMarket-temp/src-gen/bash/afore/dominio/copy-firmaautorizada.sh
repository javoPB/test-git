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
cp $ORIGEN_DOMINIO/exception/EliminarFirmaAutorizadaInactivoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/FirmaAutorizadaDuplicadoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/FirmaAutorizadaException.java $1/$DESTINO_DOMINIO/exception
#REPOSITORY
cp $ORIGEN_DOMINIO/repository/FirmaAutorizadaJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/FirmaAutorizadaJDBCRepository.java $1/$DESTINO_DOMINIO/repository
#REPOSITORY IMPL    
cp $ORIGEN_DOMINIO/repository/impl/FirmaAutorizadaJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/FirmaAutorizadaJDBCRepositoryImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/FirmaAutorizadaMapper.java $1/$DESTINO_DOMINIO/repository/impl        
#SERVICE     
cp $ORIGEN_DOMINIO/service/FirmaAutorizadaService.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/FirmaAutorizadaServices.java $1/$DESTINO_DOMINIO/service
#SERCIVE IMPL
cp $ORIGEN_DOMINIO/service/impl/FirmaAutorizadaServiceImpl.java $1/$DESTINO_DOMINIO/service/impl
cp $ORIGEN_DOMINIO/service/impl/FirmaAutorizadaServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
       
       
#COMMON
#MODEL
cp $ORIGEN_COMMON/model/FirmaAutorizada.java $1/$DESTINO_COMMON/model     
       
             
#CONFIGURACION
#CONTROLLER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio/FirmaAutorizadaController.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio
#HELPER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio/FirmaAutorizadaHelper.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio
#JS
cp $ORIGEN_CONFIGURACION/webapp/resources/js/dominio/firmaAutorizada.js $1/$DESTINO_CONFIGURACION/webapp/resources/js/dominio    
#HTML
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/firmaAutorizadas.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalCrearFirmaAutorizada.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalUpdateFirmaAutorizada.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
       
       
#INFRAESTRUCTURA
#HELPER
cp $ORIGEN_INFRAESTRUCTURA/FirmaAutorizadaConstantesHelper.java $1/DESTINO_INFRAESTRUCTURA

