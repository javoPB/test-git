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
cp $ORIGEN_DOMINIO/exception/EliminarNegativaPerfilamientoInactivoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/NegativaPerfilamientoDuplicadoException.java $1/$DESTINO_DOMINIO/exception
cp $ORIGEN_DOMINIO/exception/NegativaPerfilamientoException.java $1/$DESTINO_DOMINIO/exception
#REPOSITORY
cp $ORIGEN_DOMINIO/repository/NegativaPerfilamientoJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/NegativaPerfilamientoJDBCRepository.java $1/$DESTINO_DOMINIO/repository
#REPOSITORY IMPL    
cp $ORIGEN_DOMINIO/repository/impl/NegativaPerfilamientoJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/NegativaPerfilamientoJDBCRepositoryImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/repository/impl/NegativaPerfilamientoMapper.java $1/$DESTINO_DOMINIO/repository/impl        
#SERVICE     
cp $ORIGEN_DOMINIO/service/NegativaPerfilamientoService.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/NegativaPerfilamientoServices.java $1/$DESTINO_DOMINIO/service
#SERCIVE IMPL
cp $ORIGEN_DOMINIO/service/impl/NegativaPerfilamientoServiceImpl.java $1/$DESTINO_DOMINIO/service/impl
cp $ORIGEN_DOMINIO/service/impl/NegativaPerfilamientoServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
       
       
#COMMON
#MODEL
cp $ORIGEN_COMMON/model/NegativaPerfilamiento.java $1/$DESTINO_COMMON/model     
       
             
#CONFIGURACION
#CONTROLLER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio/NegativaPerfilamientoController.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/controller/dominio
#HELPER
cp $ORIGEN_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio/NegativaPerfilamientoHelper.java $1/$DESTINO_CONFIGURACION/java/com/aforebanamex/plata/configuracion/helper/dominio
#JS
cp $ORIGEN_CONFIGURACION/webapp/resources/js/dominio/negativaPerfilamiento.js $1/$DESTINO_CONFIGURACION/webapp/resources/js/dominio    
#HTML
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/negativaPerfilamientos.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalCrearNegativaPerfilamiento.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
cp $ORIGEN_CONFIGURACION/webapp/WEB-INF/views/dominio/modalUpdateNegativaPerfilamiento.html $1/$DESTINO_CONFIGURACION/webapp/WEB-INF/views/dominio
       
       
#INFRAESTRUCTURA
#HELPER
cp $ORIGEN_INFRAESTRUCTURA/NegativaPerfilamientoConstantesHelper.java $1/DESTINO_INFRAESTRUCTURA

