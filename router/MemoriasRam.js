const express = require('express');
const router = express.Router();
const MemoriaRAM = require('../models/memoria'); // Asegúrate de que este es el modelo correcto

router.get('/', async (req, res) => {
    try {
        const arrayMemoriasRAM = await MemoriaRAM.find();
        console.log(arrayMemoriasRAM); // Imprime los datos recuperados para verificar
        res.render('memoriasRAM', { arrayMemoriasRAM });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al recuperar las memorias RAM');
    }
});

module.exports = router;

/*
            [

                {
                    id:1, 
                    nombre:"Memoria Ram Fury Beast Ddr4 Gamer Color Negro 16gb 1 Kingston Kf432c16bb/16", 
                    Imagen:"https://http2.mlstatic.com/D_NQ_NP_684230-MLU74421622272_022024-O.webp", 
                    direccion:"https://www.mercadolibre.com.ar/memoria-ram-fury-beast-ddr4-gamer-color-negro-16gb-1-kingston-kf432c16bb16/p/MLA19174271#polycard_client=search-nordic&searchVariation=MLA19174271&wid=MLA1957674276&position=8&search_layout=stack&type=product&tracking_id=a5f79a52-fd7c-4807-b3cb-b07a46c68ee3&sid=search"
                },
                {
                    id:2, 
                    nombre:"Memoria RAM Standard gamer color verde 8GB 1 SK hynix HMA81GS6AFR8N-UH",
                    Imagen:"https://http2.mlstatic.com/D_NQ_NP_835706-MLA74781908139_022024-O.webp",
                    direccion:"https://www.mercadolibre.com.ar/memoria-ram-standard-gamer-color-verde-8gb-1-sk-hynix-hma81gs6afr8n-uh/p/MLA19738900#polycard_client=search-nordic&searchVariation=MLA19738900&wid=MLA1451697809&position=21&search_layout=stack&type=product&tracking_id=a5f79a52-fd7c-4807-b3cb-b07a46c68ee3&sid=search"
                },
                {
                    id:2,
                    nombre:"Memoria RAM Vengeance LPX gamer color negro 32GB 2 Corsair CMK32GX4M2E3200C16",
                    Imagen:"https://http2.mlstatic.com/D_NQ_NP_795500-MLU75151059574_032024-O.webp",
                    direccion:"https://www.mercadolibre.com.ar/memoria-ram-vengeance-lpx-gamer-color-negro-32gb-2-corsair-cmk32gx4m2e3200c16/p/MLA17770039#polycard_client=search-nordic&searchVariation=MLA17770039&wid=MLA1888274488&position=24&search_layout=stack&type=product&tracking_id=a5f79a52-fd7c-4807-b3cb-b07a46c68ee3&sid=searchs"
                }
            ]
            */