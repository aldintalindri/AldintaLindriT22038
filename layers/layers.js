var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sawah_1 = new ol.format.GeoJSON();
var features_Sawah_1 = format_Sawah_1.readFeatures(json_Sawah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_1.addFeatures(features_Sawah_1);
var lyr_Sawah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sawah_1, 
                style: style_Sawah_1,
                interactive: true,
                title: '<img src="styles/legend/Sawah_1.png" /> Sawah'
            });
var format_Pemukiman_2 = new ol.format.GeoJSON();
var features_Pemukiman_2 = format_Pemukiman_2.readFeatures(json_Pemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_2.addFeatures(features_Pemukiman_2);
var lyr_Pemukiman_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_2, 
                style: style_Pemukiman_2,
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_2.png" /> Pemukiman'
            });
var format_Tambak_3 = new ol.format.GeoJSON();
var features_Tambak_3 = format_Tambak_3.readFeatures(json_Tambak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambak_3.addFeatures(features_Tambak_3);
var lyr_Tambak_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tambak_3, 
                style: style_Tambak_3,
                interactive: true,
                title: '<img src="styles/legend/Tambak_3.png" /> Tambak'
            });
var format_Tegalan_4 = new ol.format.GeoJSON();
var features_Tegalan_4 = format_Tegalan_4.readFeatures(json_Tegalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tegalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tegalan_4.addFeatures(features_Tegalan_4);
var lyr_Tegalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tegalan_4, 
                style: style_Tegalan_4,
                interactive: true,
                title: '<img src="styles/legend/Tegalan_4.png" /> Tegalan'
            });
var format_Tambang_5 = new ol.format.GeoJSON();
var features_Tambang_5 = format_Tambang_5.readFeatures(json_Tambang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambang_5.addFeatures(features_Tambang_5);
var lyr_Tambang_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tambang_5, 
                style: style_Tambang_5,
                interactive: true,
                title: '<img src="styles/legend/Tambang_5.png" /> Tambang'
            });
var format_Gedung_6 = new ol.format.GeoJSON();
var features_Gedung_6 = format_Gedung_6.readFeatures(json_Gedung_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gedung_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gedung_6.addFeatures(features_Gedung_6);
var lyr_Gedung_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gedung_6, 
                style: style_Gedung_6,
                interactive: true,
                title: '<img src="styles/legend/Gedung_6.png" /> Gedung'
            });
var format_Jalan_7 = new ol.format.GeoJSON();
var features_Jalan_7 = format_Jalan_7.readFeatures(json_Jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_7.addFeatures(features_Jalan_7);
var lyr_Jalan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_7, 
                style: style_Jalan_7,
                interactive: true,
                title: '<img src="styles/legend/Jalan_7.png" /> Jalan'
            });
var format_Sungai_8 = new ol.format.GeoJSON();
var features_Sungai_8 = format_Sungai_8.readFeatures(json_Sungai_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_8.addFeatures(features_Sungai_8);
var lyr_Sungai_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_8, 
                style: style_Sungai_8,
                interactive: true,
                title: '<img src="styles/legend/Sungai_8.png" /> Sungai'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Sawah_1.setVisible(true);lyr_Pemukiman_2.setVisible(true);lyr_Tambak_3.setVisible(true);lyr_Tegalan_4.setVisible(true);lyr_Tambang_5.setVisible(true);lyr_Gedung_6.setVisible(true);lyr_Jalan_7.setVisible(true);lyr_Sungai_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sawah_1,lyr_Pemukiman_2,lyr_Tambak_3,lyr_Tegalan_4,lyr_Tambang_5,lyr_Gedung_6,lyr_Jalan_7,lyr_Sungai_8];
lyr_Sawah_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'luas s': 'luas s', });
lyr_Pemukiman_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Tambak_3.set('fieldAliases', {'id': 'id', });
lyr_Tegalan_4.set('fieldAliases', {'id': 'id', 'Luas': 'Luas', });
lyr_Tambang_5.set('fieldAliases', {'id': 'id', });
lyr_Gedung_6.set('fieldAliases', {'id': 'id', 'Luas': 'Luas', });
lyr_Jalan_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sawah_1.set('fieldImages', {'fid': '', 'id': '', 'luas s': '', });
lyr_Pemukiman_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Tambak_3.set('fieldImages', {'id': '', });
lyr_Tegalan_4.set('fieldImages', {'id': '', 'Luas': '', });
lyr_Tambang_5.set('fieldImages', {'id': '', });
lyr_Gedung_6.set('fieldImages', {'id': '', 'Luas': '', });
lyr_Jalan_7.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Sungai_8.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_Sawah_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'luas s': 'no label', });
lyr_Pemukiman_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Tambak_3.set('fieldLabels', {'id': 'no label', });
lyr_Tegalan_4.set('fieldLabels', {'id': 'no label', 'Luas': 'no label', });
lyr_Tambang_5.set('fieldLabels', {'id': 'no label', });
lyr_Gedung_6.set('fieldLabels', {'id': 'no label', 'Luas': 'no label', });
lyr_Jalan_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_8.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});