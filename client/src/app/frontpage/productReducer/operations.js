import creators from "./actions";

const getProducts = (token) => {
    return dispatch => {
        dispatch(creators.requestProducts())
        return fetch("http://localhost:3000/api/products/", {
                headers: {
                    'Authorization': token,
                },
            })
            .then(response => {
                console.log("response", response)
                if (!response.ok) {
                    throw Error(response.statustext)
                }
                return response.json()
            })
            .then(json => dispatch(creators.receiveProducts(json)))
            .catch(err => dispatch(creators.error(err)))
    }
}

const filterProducts = (e, products) => {

    const filter = () => {
        const value = e.target.value
        console.log(products)

        const filteredProducts = products.filter(i => {

            let tmpKeywords = [...i.keywords]
            tmpKeywords.push(i.category)
            tmpKeywords.push(i.name)
            let words = tmpKeywords.concat(i.description.split(" "))
            const found = []
            for (let j in words) {
                if (words[j].toLowerCase().startsWith(value.toLowerCase()))
                    found.push(words[j].toLowerCase())
            }

            return found.length > 0
        })

        console.log("filtered", filteredProducts)

        return filteredProducts
    }


    return dispatch => {
        dispatch(creators.filterProducts(filter()))
    }
}

const updateProductStatus = (id, token) => {
    console.log("update", id)
    return dispatch => {
        dispatch(creators.requestProducts())
        return fetch("http://localhost:3000/api/products/"+id, {
            method:"PUT",
            headers: {
                'Authorization':token
            }
        })
        .then(res => {
            if (!res.ok){
                throw Error(res.statusText)
            }

            return res.json()
        })
        .then(json => dispatch(creators.receiveProducts(json)))
        .catch(err => console.log("Error when updating product", err))
    }
}

const deleteProduct = (id) => {
    console.log("delet", id)
    return dispatch => {

    }
}

export default {
    getProducts,
    filterProducts,
    updateProductStatus,
    deleteProduct
}