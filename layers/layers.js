var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_shp_terri_completo_1 = new ol.format.GeoJSON();
var features_shp_terri_completo_1 = format_shp_terri_completo_1.readFeatures(json_shp_terri_completo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_terri_completo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_terri_completo_1.addFeatures(features_shp_terri_completo_1);
var lyr_shp_terri_completo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shp_terri_completo_1, 
                style: style_shp_terri_completo_1,
                interactive: true,
    title: 'shp_terri_completo<br />\
    <img src="styles/legend/shp_terri_completo_1_0.png" /> alto<br />\
    <img src="styles/legend/shp_terri_completo_1_1.png" /> bajo<br />\
    <img src="styles/legend/shp_terri_completo_1_2.png" /> medio<br />\
    <img src="styles/legend/shp_terri_completo_1_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_shp_terri_completo_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_shp_terri_completo_1];
lyr_shp_terri_completo_1.set('fieldAliases', {'DPA_SECTOR': 'DPA_SECTOR', 'DPA_VALOR': 'DPA_VALOR', 'DPA_ANIO': 'DPA_ANIO', 'DPA_ZONA': 'DPA_ZONA', 'FUENTE': 'FUENTE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'areaKM': 'areaKM', 'DPA_SECDIS': 'DPA_SECDIS', 'DPA_VALOR_': 'DPA_VALOR_', 'DPA_ANIO_2': 'DPA_ANIO_2', 'DPA_ZONDIS': 'DPA_ZONDIS', 'EMPATE': 'EMPATE', 'DPA_PARROQ': 'DPA_PARROQ', 'FUENTE_2': 'FUENTE_2', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Ar_1': 'Shape_Ar_1', 'SECTOR': 'SECTOR', 'LARGO': 'LARGO', 'territoryF': 'territoryF', 'QGIS_Field': 'QGIS_Field', 'QGIS_Fie_1': 'QGIS_Fie_1', 'QGIS_Fie_2': 'QGIS_Fie_2', 'QGIS_Fie_3': 'QGIS_Fie_3', 'QGIS_Fie_4': 'QGIS_Fie_4', 'QGIS_Fie_5': 'QGIS_Fie_5', 'QGIS_Fie_6': 'QGIS_Fie_6', 'QGIS_Fie_7': 'QGIS_Fie_7', 'QGIS_Fie_8': 'QGIS_Fie_8', 'QGIS_Fie_9': 'QGIS_Fie_9', });
lyr_shp_terri_completo_1.set('fieldImages', {'DPA_SECTOR': 'TextEdit', 'DPA_VALOR': 'Range', 'DPA_ANIO': 'TextEdit', 'DPA_ZONA': 'TextEdit', 'FUENTE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'areaKM': 'TextEdit', 'DPA_SECDIS': 'TextEdit', 'DPA_VALOR_': 'TextEdit', 'DPA_ANIO_2': 'TextEdit', 'DPA_ZONDIS': 'TextEdit', 'EMPATE': 'TextEdit', 'DPA_PARROQ': 'TextEdit', 'FUENTE_2': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Le_3': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SECTOR': 'TextEdit', 'LARGO': 'TextEdit', 'territoryF': 'TextEdit', 'QGIS_Field': 'TextEdit', 'QGIS_Fie_1': 'TextEdit', 'QGIS_Fie_2': 'TextEdit', 'QGIS_Fie_3': 'TextEdit', 'QGIS_Fie_4': 'TextEdit', 'QGIS_Fie_5': 'TextEdit', 'QGIS_Fie_6': 'TextEdit', 'QGIS_Fie_7': 'TextEdit', 'QGIS_Fie_8': 'TextEdit', 'QGIS_Fie_9': 'TextEdit', });
lyr_shp_terri_completo_1.set('fieldLabels', {'DPA_SECTOR': 'inline label', 'DPA_VALOR': 'inline label', 'DPA_ANIO': 'inline label', 'DPA_ZONA': 'inline label', 'FUENTE': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Area': 'inline label', 'areaKM': 'header label', 'DPA_SECDIS': 'no label', 'DPA_VALOR_': 'no label', 'DPA_ANIO_2': 'no label', 'DPA_ZONDIS': 'no label', 'EMPATE': 'no label', 'DPA_PARROQ': 'no label', 'FUENTE_2': 'no label', 'Shape_Le_2': 'no label', 'Shape_Le_3': 'no label', 'Shape_Ar_1': 'no label', 'SECTOR': 'no label', 'LARGO': 'no label', 'territoryF': 'no label', 'QGIS_Field': 'no label', 'QGIS_Fie_1': 'no label', 'QGIS_Fie_2': 'no label', 'QGIS_Fie_3': 'no label', 'QGIS_Fie_4': 'no label', 'QGIS_Fie_5': 'no label', 'QGIS_Fie_6': 'no label', 'QGIS_Fie_7': 'no label', 'QGIS_Fie_8': 'no label', 'QGIS_Fie_9': 'no label', });
lyr_shp_terri_completo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});