import creators from "./actions";

const getProducts = () => {
    return dispatch => {
        dispatch(creators.requestProducts())
        return fetch("http://localhost:3000/api/products/")
            .then(response => {
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
    console.log("filtering", products)

    const filter = () => {
        const value = e.target.value
        console.log("filtering")
        console.log(products)

        const filteredProducts = products.filter(i => {

            let tmpKeywords = [...i.keywords]
            tmpKeywords.push(i.category)
            tmpKeywords.push(i.name)
            tmpKeywords.concat(i.description.split())
            console.log("keywords", tmpKeywords)
            const found = []
            for (let j in tmpKeywords) {
                if (tmpKeywords[j].startsWith(value))
                    found.push(tmpKeywords[i])
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

export default {
    getProducts,
    filterProducts
}