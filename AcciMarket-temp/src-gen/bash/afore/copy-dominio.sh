#!/usr/bin/env sh
       
ORIGEN_COMMON="../../banamex/common/src/main/java/com/aforebanamex/plata/comunes"
DESTINO_COMMON="PLATA-Comunes/src/main/java/com/aforebanamex/plata/comunes"
       
ORIGEN_CONFIGURACION="../../banamex/configuracion/src/main"
DESTINO_CONFIGURACION="PLATA-WebApp/src/main"

#CREACION DE DIRECTORIOS
rm -rf $1/$DESTINO_DOMINIO/repository
mkdir $1/$DESTINO_DOMINIO/repository
       
rm -rf $1/$DESTINO_DOMINIO/repository/impl
mkdir $1/$DESTINO_DOMINIO/repository/impl
       
rm -rf $1/$DESTINO_DOMINIO/service
mkdir $1/$DESTINO_DOMINIO/service
       
rm -rf $1/$DESTINO_DOMINIO/service/impl
mkdir $1/$DESTINO_DOMINIO/service/impl
       
ORIGEN_DOMINIO="../../banamex/dominio/src/main/java/com/aforebanamex/plata/cg/dominio"
DESTINO_DOMINIO="PLATA-DOMINIO/src/main/java/com/aforebanamex/plata/cg/dominio"
                    
#ARCHIVOS DEL COMPONENTE
#EXCEPTION   
cp $ORIGEN_DOMINIO/exception/PlantillaNoExisteException.java $1/$DESTINO_DOMINIO/exception
       
#HELPER
cp $ORIGEN_DOMINIO/helper/DOMINIOConstantesHelper.java $1/$DESTINO_DOMINIO/helper
       
#SENTENCES
cp ../../banamex/dominio/src/main/resorces/sentences/dominio-sentences.xml $1/PLATA-DOMINIO/src/main/resources/sentences
       
#MESSAGES
cp $ORIGEN_CONFIGURACION/resources/messages/mensajes-dominio.properties $1/$DESTINO_CONFIGURACION/resources/messages
       
       
#DOMINIO  
cp $ORIGEN_DOMINIO/service/DummyServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/DummyServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/DummyJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/DummyJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/SexoServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/SexoServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/SexoJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/SexoJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/InstitucionalServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/InstitucionalServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/InstitucionalJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/InstitucionalJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/SofisticadoServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/SofisticadoServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/SofisticadoJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/SofisticadoJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/ElegibleServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/ElegibleServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/ElegibleJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/ElegibleJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/CalificadoServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/CalificadoServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/CalificadoJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/CalificadoJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/DiscrecionalServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/DiscrecionalServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/DiscrecionalJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/DiscrecionalJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/ConocimientoExperienciaServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/ConocimientoExperienciaServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/ConocimientoExperienciaJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/ConocimientoExperienciaJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/RelacionServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/RelacionServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/RelacionJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/RelacionJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/OpcDistrInstruccionesServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/OpcDistrInstruccionesServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/OpcDistrInstruccionesJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/OpcDistrInstruccionesJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/MexicoExtrajeroServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/MexicoExtrajeroServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/MexicoExtrajeroJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/MexicoExtrajeroJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/NoSiServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/NoSiServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/NoSiJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/NoSiJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/SituacionFinancieraActualServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/SituacionFinancieraActualServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/SituacionFinancieraActualJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/SituacionFinancieraActualJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
cp $ORIGEN_DOMINIO/service/OrigenIngresosServices.java $1/$DESTINO_DOMINIO/service
cp $ORIGEN_DOMINIO/service/impl/OrigenIngresosServicesImpl.java $1/$DESTINO_DOMINIO/service/impl    
cp $ORIGEN_DOMINIO/repository/OrigenIngresosJDBCRepositories.java $1/$DESTINO_DOMINIO/repository
cp $ORIGEN_DOMINIO/repository/impl/OrigenIngresosJDBCRepositoriesImpl.java $1/$DESTINO_DOMINIO/repository/impl
             
             
#COMMON
#ENUM
cp $ORIGEN_COMMON/enums/Dummy.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/Sexo.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/Institucional.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/Sofisticado.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/Elegible.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/Calificado.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/Discrecional.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/ConocimientoExperiencia.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/Relacion.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/OpcDistrInstrucciones.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/MexicoExtrajero.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/NoSi.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/SituacionFinancieraActual.java $1/$DESTINO_COMMON/enums     
cp $ORIGEN_COMMON/enums/OrigenIngresos.java $1/$DESTINO_COMMON/enums     
#ENUM
cp $ORIGEN_COMMON/model/Dummy.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/Sexo.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/Institucional.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/Sofisticado.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/Elegible.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/Calificado.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/Discrecional.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/ConocimientoExperiencia.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/Relacion.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/OpcDistrInstrucciones.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/MexicoExtrajero.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/NoSi.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/SituacionFinancieraActual.java $1/$DESTINO_COMMON/model
cp $ORIGEN_COMMON/model/OrigenIngresos.java $1/$DESTINO_COMMON/model
       
#BASH DE COPIADO DE ENTIDADES
cd dominio
./copy-contrato.sh $1
./copy-titularcontrato.sh $1
./copy-beneficiario.sh $1
./copy-limitante.sh $1
./copy-emisor.sh $1
./copy-firmaautorizada.sh $1
./copy-instruccionefectivo.sh $1
./copy-distribucioninstrucciones.sh $1
./copy-reperfilamientopersonafisica.sh $1
./copy-negativaperfilamiento.sh $1
       
