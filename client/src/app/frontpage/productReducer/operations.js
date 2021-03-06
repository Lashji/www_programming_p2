import creators from "./actions";

const getProducts = (token) => {
    return dispatch => {
        dispatch(creators.requestProducts())
        return fetch("/api/products/", {
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

const updateProductStatus = (id, token, state) => {
    console.log("update product", id, token, state)
    return dispatch => {
        dispatch(creators.requestProducts())
        return fetch("/api/products/" + id, {
            method: "PUT",
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                state: state
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }

                return res.json()
            })
            .then(json => dispatch(creators.receiveProducts(json)))
            .catch(err => console.log("Error when updating product", err))
    }
}

const deleteProduct = (id, token) => {
    console.log("deleting product", id)
    return dispatch => {
        dispatch(creators.requestProducts())
        fetch("/api/products/" + id, {
            method: "DELETE",
            headers: {
                'Authorization': token
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res.json()
            })
            .then(json => dispatch(creators.receiveProducts(json)))
            .catch(err => console.log("error when deleting product", err))
    }
}

const setSelectedProduct = (id, token) => {

    return dispatch => {
        fetch("/api/products/" + id, {
            headers: {
                'Authorization': token
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(json => {
                dispatch(creators.receiveSingle(json));
            })
            .catch(err => console.log("error when selecting product", err))
    }
}

const postProduct = (data, token) => {
    return dispatch => {
        dispatch(creators.requestProducts())
        return fetch("/api/products/", {
            method: "POST",
            headers: {
                "Authorization": token,
            },
            body: data
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }

                return res.json()
            })
            .then(json => dispatch(creators.receiveProducts(json)))
            .catch(err => console.log("error when creating new product", err))
    }
}

const buyProduct = (userID, productID, token) => {
    console.log("buy operation", userID, productID)

    return dispatch => {
        dispatch(creators.requestProducts)
        return fetch("/api/buy/" + productID, {
            method: "PUT",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userID,
                productID
            })
        })
            .then(res => {
                if (!res.ok)
                    throw Error(res.statusText)

                return res.json()
            })
            .then(json => creators.receiveProducts(json))
            .catch(err => console.log("error when executing buy transaction", err))
    }
}

export default {
    getProducts,
    filterProducts,
    updateProductStatus,
    deleteProduct,
    postProduct,
    setSelectedProduct,
    buyProduct
}