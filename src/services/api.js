const apiService = {
    getData: new Promise((resolve, reject) => {
        return resolve({
            room_type: 'living_room',
            room_photo: 'https://hutch-clean-photos.s3.amazonaws.com/render-b9d536c0-8430-433f-9280-2d0d970f14a1.jpeg',
            products: [
                {
                    id: 110,
                    index: 1,
                    top: 58.1371,
                    left: 20.914,
                    width: 58.1189,
                    height: 27.7761,
                    type: 'sofa',
                    url: 'imgs/RANCH-COUCH_Couches_0792.png',
                    price: 2000.00,
                    similar_producs: [{
                        url: 'imgs/GWSOFA1_Couches_0792.png',
                        price: 199.99,
                    }, {
                        price: 1200.00,
                        url: 'imgs/STYSOFA_Couches_0792.png',
                    }]
                }, {
                    id: 111,
                    index: 0,
                    top: 39.4818,
                    left: 57.1159,
                    width: 7.87608,
                    height: 7.90381,
                    type: 'art',
                    url: 'imgs/MIN-FCC-GNA_WallArt_0351.png',
                    price: 100.00,
                    similar_producs: [],
                }, {
                    id: 112,
                    index: 3,
                    top: 76.284,
                    left: 39.6117,
                    width: 6.10141,
                    height: 7.29,
                    type: 'plant',
                    url: 'imgs/VBPLANT4_Decor_0432.png',
                    price: 250.00,
                    similar_producs: [],
                }, {
                    id: 113,
                    index: 2,
                    top: 81.6894,
                    left: 32.4119,
                    width: 34.4195,
                    height: 16.5034,
                    type: 'table',
                    url: 'imgs/MOCOFFETABLE_Main_0864.png',
                    price: 300.00,
                    similar_producs: [],
                }, {
                    id: 114,
                    index: 4,
                    top: 68.5516,
                    left: 2.43159,
                    width: 26.9852,
                    height: 28.1286,
                    type: 'chair',
                    url: 'imgs/ARMCHAIR21_Main_0848.png',
                    price: 150.00,
                    similar_producs: [],
                }
            ],
        })
    })
};

export default apiService;