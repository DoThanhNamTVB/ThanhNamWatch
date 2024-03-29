const db = require('../models/index');
const { Op } = require('sequelize');

//create an
const createProductColorService = async (payload) => {
    try {
        const count = await db.Product_Color.count({
            where: {
                productId: payload.productId,
                colorId: payload.colorId,
            },
        });

        const exitsColor = await db.Color.findOne({
            where: { id: payload.colorId },
        });

        const exitsProduct = await db.Product.findOne({
            where: { id: payload.productId },
        });

        if (count > 0) {
            return {
                err: 2,
                msg: 'Màu của sản phẩm đã tồn tại',
            };
        } else if (!exitsColor) {
            return {
                err: 2,
                msg: 'Không có màu này',
            };
        } else if (!exitsProduct) {
            return {
                err: 2,
                msg: 'Không có sản phẩm này',
            };
        } else {
            const response = await db.Product_Color.create(payload);
            return {
                err: 0,
                msg: 'Thêm màu thành công thành công',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

const getAllByIdProductColorService = async (idProduct) => {
    try {
        const response = await db.Product_Color.findAll(
            {
                where: { productId: idProduct },
                order: [['updatedAt', 'DESC']],
            },
            { raw: true }
        );

        return {
            err: response.length ? 0 : 2,
            msg: response.length > 0 ? 'Tìm thành công' : 'Không có thông tin',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get an productcolor
const getAnByIdProductColorService = async (idProduct, idColor) => {
    try {
        const response = await db.Product_Color.findOne({
            where: { productId: idProduct, colorId: idColor },
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

//update an product

const updateProductColorService = async (payload, idProduct, idColor) => {
    try {
        console.log(idProduct, idColor);
        const count = await db.Product_Color.count({
            where: {
                productId: idProduct,
                colorId: { [Op.ne]: idColor, [Op.eq]: payload.colorId },
            },
        });
        console.log(count);
        if (count > 0) {
            return {
                err: 2,
                msg: 'Màu của sản phẩm đã tồn tại !',
            };
        } else {
            await db.Product_Color.update(payload, {
                where: { productId: idProduct, colorId: idColor },
            });

            return {
                err: 0,
                msg: 'Sửa thành công!',
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

const deleteProductColorService = async (productId, colorId) => {
    try {
        const reponse = await db.Product_Color.destroy({
            where: { productId: productId, colorId: colorId },
        });

        return {
            err: reponse ? 0 : 2,
            msg: reponse ? 'Đã xóa' : 'Không tìm thấy sản phẩm !',
            reponse,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createProductColorService,
    getAllByIdProductColorService,
    getAnByIdProductColorService,
    updateProductColorService,
    deleteProductColorService,
};
