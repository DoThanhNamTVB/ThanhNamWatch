const db = require('../models/index');
const { Op } = require('sequelize');

//create an
const createProductService = async ({
    categoryId,
    productName,
    price,
    discount,
    description,
    genderFor,
    productType,
    glassSurface,
    shellMaterial,
    wireMaterial,
    waterproofDeft,
    shape,
    dimension,
    thichness,
    sizeWire,
    origin,
}) => {
    try {
        const countName = await db.Product.count({
            where: { productName },
        });

        if (countName > 0) {
            return {
                err: 2,
                msg: 'Tên sản phẩm đã tồn tại',
            };
        } else {
            const response = await db.Product.create({
                categoryId,
                productName,
                price,
                discount,
                description,
                genderFor,
                productType,
                glassSurface,
                shellMaterial,
                wireMaterial,
                waterproofDeft,
                shape,
                dimension,
                thichness,
                sizeWire,
                origin,
            });
            return {
                err: 0,
                msg: 'Tạo tài khoản thành công',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

//get all product
const getAllProductService = async () => {
    try {
        const response = await db.Product.findAll(
            {
                order: [['createdAt', 'DESC']],
                include: [{ model: db.Category }, { model: db.Color, order: [['quantity', 'DESC']] }],
            },
            { raw: true },
            { nest: true }
        );

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get all products',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get an product
const getAnProductService = async (id) => {
    try {
        const response = await db.Product.findOne({
            where: { id },
            include: [{ model: db.Category }, { model: db.Color }],
        });

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Product is not exits',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get product hot

const getProductHot = async () => {
    try {
        const datenow = new Date();
        const dateLastWeek = new Date(datenow.getFullYear(), datenow.getMonth(), datenow.getDate() - 7);
        const response = await db.Product.findAll({
            include: [
                { model: db.Color },
                {
                    model: db.Order,
                    where: {
                        status: 'da-giao',
                        updatedAt: {
                            [Op.lte]: datenow,
                            [Op.gte]: dateLastWeek,
                        },
                    },
                },
            ],
            limit: 6,
        });
        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get product hot',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get product new

const getProductNew = async () => {
    try {
        const response = await db.Product.findAll({
            order: ['createdAt', 'DESC'],
            include: [{ model: db.Category }, { model: db.Color }],
            limit: 6,
        });

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get product new',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//update an product

const updateProductService = async (product, id) => {
    try {
        const findName = await db.Product.count({
            where: {
                id: { [Op.ne]: id },
                productName: product.productName,
            },
        });
        if (findName > 0) {
            return {
                err: 2,
                msg: 'Tên sản phẩm đã tồn tại !',
            };
        } else {
            await db.Product.update(product, {
                where: { id: id },
            });

            return {
                err: 0,
                msg: 'Updated for product',
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

const deleteProductService = async (id) => {
    try {
        const response = await db.Product.destroy({
            where: { id: id },
        });

        if (response) {
            await db.Product_Color.destroy({
                where: { productId: id },
            });
        }

        return {
            err: response ? 0 : 2,
            msg: response ? 'DELETED' : 'No find product to delete',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

const getProductByCategoryService = async (categorySlug) => {
    try {
        const find = await db.Category.findOne({
            where: { slug: categorySlug },
        });

        if (!find) {
            return {
                err: 2,
                msg: 'Không có danh mục này',
            };
        } else {
            const response = await db.Product.findAll({
                where: { categoryId: find.id },
                order: [['updatedAt', 'DESC']],
                include: [{ model: db.Category }, { model: db.Color }],
            });
            return {
                err: response ? 0 : 2,
                msg: response ? 'Hoàn thành ' : 'Không có danh mục này',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

const getProductCategoryLimit = async (categorySlug, page) => {
    try {
        const pageNumber = +page;
        const getLimit = +process.env.LIMIT;

        const getCategoryId = await db.Category.findOne({
            where: { slug: categorySlug },
            attributes: ['id'],
        });

        console.log('categoryId', getCategoryId.id);

        if (getCategoryId) {
            const response = await db.Product.findAndCountAll({
                where: { categoryId: getCategoryId.id },
                offset: getLimit * (pageNumber - 1) || 0,
                limit: getLimit,
                // attributes: ["id", "categoryId", "productName"],
                include: [{ model: db.Category }, { model: db.Color }],
                distinct: true,
            });
            return {
                err: response ? 0 : 2,
                msg: response ? 'Lấy danh sách thành công <3 ' : 'Lấy danh sách limit không thành công!',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

const getProductSearch = async (keySearch) => {
    try {
        const response = await db.Product.findAll({
            where: {
                [Op.or]: [
                    {
                        productName: {
                            [Op.like]: '%' + keySearch + '%',
                        },
                    },
                ],
            },
            limit: 10,
            include: [{ model: db.Category }, { model: db.Color }],
            order: [['updatedAt', 'DESC']],
        });

        if (!keySearch) {
            return {
                err: 0,
                msg: 'Lấy thành công ! ',
                response: [],
            };
        } else {
            return {
                err: 0,
                msg: 'Lấy thành công ! ',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

const getProductSimilar = async (price) => {
    try {
        const response = await db.Product.findAll({
            where: {
                price: {
                    [Op.gte]: Number(price) - 2000000,
                    [Op.lte]: Number(price) + 2000000,
                },
            },
            limit: 6,
            include: [{ model: db.Category }, { model: db.Color }],
            order: [['updatedAt', 'DESC']],
        });
        return {
            err: response ? 0 : 2,
            msg: response ? 'Lấy thành công ! ' : 'Lấy thát bại',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

const getProductFilter = async (payload) => {
    try {
        const data = {};
        if (payload?.categoryId) {
            data.where = {
                ...data.where,
                categoryId: payload?.categoryId,
            };
        }
        if (payload?.price) {
            const arr = payload?.price.split(',');
            data.where = {
                ...data.where,
                price: { [Op.between]: [+arr[0], +arr[1]] },
            };
        }
        if (payload?.gender) {
            data.where = {
                ...data.where,
                genderFor: payload?.gender,
            };
        }
        if (payload?.discount) {
            const arr = payload?.discount.split(',');
            data.where = {
                ...data.where,
                discount: { [Op.between]: [+arr[0], +arr[1]] },
            };
        }
        const response = await db.Product.findAll(
            {
                order: [['createdAt', 'DESC']],
                include: [{ model: db.Category }, { model: db.Color, order: [['quantity', 'DESC']] }],
                ...data,
            },
            { raw: true },
            { nest: true }
        );

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get all products',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};
module.exports = {
    createProductService,
    getAllProductService,
    getAnProductService,
    updateProductService,
    deleteProductService,
    getProductByCategoryService,
    getProductHot,
    getProductNew,
    getProductSearch,
    getProductSimilar,
    getProductFilter,
    getProductCategoryLimit,
};
