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
cp $ORIGEN_DOMINIO/exception/EliminarReperfilamientoPersonaFisicaInactivoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/ReperfilamientoPersonaFisicaDuplicadoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/ReperfilamientoPersonaFisicaException.java $1/$DESTINO_DOMINIO/exception
#REPOSITORY
cp $ORIGEN_DOMINIO/repository/ReperfilamientoPersonaFisicaJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/ReperfilamientoPersonaFisicaJDBCRepository.java $1/$DESTINO_DOMINIO/repository
#REPOSITORY IMPL    
cp $ORIGEN_DOMINIO/repository/impl/ReperfilamientoPersonaFisicaJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/ReperfilamientoPersonaFisicaJDBCRepositoryImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/ReperfilamientoPersonaFisicaMapper.java $1/$DESTINO_DOMINIO/repository/impl        
#SERVICE     
cp $ORIGEN_DOMINIO/service/ReperfilamientoPersonaFisicaService.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/ReperfilamientoPersonaFisicaServices.java $1/$DESTINO_DOMINIO/service
#SERCIVE IMPL
cp $ORIGEN_DOMINIO/service/impl/ReperfilamientoPersonaFisicaServiceImpl.java $1/$DESTINO_DOMINIO/service/impl
cp $ORIGEN_DOMINIO/service/impl/ReperfilamientoPersonaFisicaServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
       
       
#COMMON
#MODEL
cp $ORIGEN_COMMON/model/ReperfilamientoPersonaFisica.java $1/$DESTINO_COMMON/model     
       
             
#CONFIGURACION
#CONTROLLER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio/ReperfilamientoPersonaFisicaController.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio
#HELPER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio/ReperfilamientoPersonaFisicaHelper.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio
#JS
cp $ORIGEN_CONFIGURACION/webapp/resources/js/dominio/reperfilamientoPersonaFisica.js $1/$DESTINO_CONFIGURACION/webapp/resources/js/dominio    
#HTML
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/reperfilamientoPersonaFisicas.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalCrearReperfilamientoPersonaFisica.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalUpdateReperfilamientoPersonaFisica.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
       
       
#INFRAESTRUCTURA
#HELPER
cp $ORIGEN_INFRAESTRUCTURA/ReperfilamientoPersonaFisicaConstantesHelper.java $1/DESTINO_INFRAESTRUCTURA

