var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poothadi3poothadi_1 = new ol.format.GeoJSON();
var features_poothadi3poothadi_1 = format_poothadi3poothadi_1.readFeatures(json_poothadi3poothadi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poothadi3poothadi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poothadi3poothadi_1.addFeatures(features_poothadi3poothadi_1);
var lyr_poothadi3poothadi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poothadi3poothadi_1, 
                style: style_poothadi3poothadi_1,
                popuplayertitle: 'poothadi3 — poothadi',
                interactive: true,
                title: '<img src="styles/legend/poothadi3poothadi_1.png" /> poothadi3 — poothadi'
            });
var format_poothadilinesline_2 = new ol.format.GeoJSON();
var features_poothadilinesline_2 = format_poothadilinesline_2.readFeatures(json_poothadilinesline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poothadilinesline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poothadilinesline_2.addFeatures(features_poothadilinesline_2);
var lyr_poothadilinesline_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poothadilinesline_2, 
                style: style_poothadilinesline_2,
                popuplayertitle: 'poothadilines — line',
                interactive: true,
                title: '<img src="styles/legend/poothadilinesline_2.png" /> poothadilines — line'
            });
var format_poothadipointspoint_3 = new ol.format.GeoJSON();
var features_poothadipointspoint_3 = format_poothadipointspoint_3.readFeatures(json_poothadipointspoint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poothadipointspoint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poothadipointspoint_3.addFeatures(features_poothadipointspoint_3);
var lyr_poothadipointspoint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poothadipointspoint_3, 
                style: style_poothadipointspoint_3,
                popuplayertitle: 'poothadipoints — point',
                interactive: true,
    title: 'poothadipoints — point<br />\
    <img src="styles/legend/poothadipointspoint_3_0.png" /> Akshaya centre<br />\
    <img src="styles/legend/poothadipointspoint_3_1.png" /> Co-operative bank<br />\
    <img src="styles/legend/poothadipointspoint_3_2.png" /> Gramin Bank<br />\
    <img src="styles/legend/poothadipointspoint_3_3.png" /> Homeo clinic<br />\
    <img src="styles/legend/poothadipointspoint_3_4.png" /> School<br />\
    <img src="styles/legend/poothadipointspoint_3_5.png" /> Ration shop<br />\
    <img src="styles/legend/poothadipointspoint_3_6.png" /> Village Office<br />' });
var format_mainroad_4 = new ol.format.GeoJSON();
var features_mainroad_4 = format_mainroad_4.readFeatures(json_mainroad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainroad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainroad_4.addFeatures(features_mainroad_4);
var lyr_mainroad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mainroad_4, 
                style: style_mainroad_4,
                popuplayertitle: 'mainroad',
                interactive: true,
                title: '<img src="styles/legend/mainroad_4.png" /> mainroad'
            });

lyr_OSMStandard_0.setVisible(true);lyr_poothadi3poothadi_1.setVisible(true);lyr_poothadilinesline_2.setVisible(true);lyr_poothadipointspoint_3.setVisible(true);lyr_mainroad_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_poothadi3poothadi_1,lyr_poothadilinesline_2,lyr_poothadipointspoint_3,lyr_mainroad_4];
lyr_poothadi3poothadi_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:in': 'local_authority:in', 'name': 'name', 'name:ml': 'name:ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_poothadilinesline_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_poothadipointspoint_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', 'code': 'code', });
lyr_mainroad_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_poothadi3poothadi_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:in': 'TextEdit', 'name': 'TextEdit', 'name:ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_poothadilinesline_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid0': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'Range', 'other_tags': 'TextEdit', });
lyr_poothadipointspoint_3.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid0': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', 'code': 'Range', });
lyr_mainroad_4.set('fieldImages', {'ogc_fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_poothadi3poothadi_1.set('fieldLabels', {'ogc_fid': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'local_authority:in': 'no label', 'name': 'inline label - always visible', 'name:ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_poothadilinesline_2.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'osm_id': 'no label', 'name': 'no label', 'highway': 'inline label - always visible', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_poothadipointspoint_3.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'osm_id': 'no label', 'name': 'inline label - always visible', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', 'code': 'no label', });
lyr_mainroad_4.set('fieldLabels', {'ogc_fid': 'no label', 'osm_id': 'no label', 'name': 'inline label - always visible', 'type': 'no label', 'other_tags': 'no label', });
lyr_mainroad_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});