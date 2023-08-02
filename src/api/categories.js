import axios from "axios";

const apiCategories = {
    listCategories: async function () {
        return await axios.get(
            'https://app.ecwid.com/api/v3/82202526/categories', {
            headers: {accept: 'application/json', Authorization: 'Bearer secret_KFCSzdTvExP3g2CF9xCUc4Pi3APGGC4m'}
        })
    }
}

export default apiCategories;