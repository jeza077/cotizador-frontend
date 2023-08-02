import axios from "axios";

const apiProducts = {
    listProducts: async function () {
        return await axios.get(
            'https://app.ecwid.com/api/v3/82202526/products', {
            headers: {accept: 'application/json', Authorization: 'Bearer secret_KFCSzdTvExP3g2CF9xCUc4Pi3APGGC4m'}
        })
    },

    listProductsByCategory: async function (filtros) {
        if(!filtros){
            return await axios.get(
                'https://app.ecwid.com/api/v3/82202526/products', {
                headers: {accept: 'application/json', Authorization: 'Bearer secret_KFCSzdTvExP3g2CF9xCUc4Pi3APGGC4m'}
            })
        } else {
            return await axios.get(
                'https://app.ecwid.com/api/v3/82202526/products?' + filtros, {
                headers: {accept: 'application/json', Authorization: 'Bearer secret_KFCSzdTvExP3g2CF9xCUc4Pi3APGGC4m'}
            })
        }
    },

    detailProduct: async function (id) {
        return await axios.get(
            `https://app.ecwid.com/api/v3/82202526/products/` + id, {
            headers: {accept: 'application/json', Authorization: 'Bearer secret_KFCSzdTvExP3g2CF9xCUc4Pi3APGGC4m'}
        })
    },


}

export default apiProducts;